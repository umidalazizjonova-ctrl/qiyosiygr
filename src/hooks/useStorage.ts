import { useState, useEffect, useCallback } from 'react';
import { Language, Theme, UserProgress } from '../types';

const STORAGE_KEYS = {
  LANG: 'xolida_lang_v1',
  THEME: 'xolida_theme_v1',
  PROGRESS: 'xolida_progress_v1',
};

const DEFAULT_PROGRESS: UserProgress = {
  xp: 40, // initial welcoming bonus
  completedLessons: [],
  completedExercises: [],
  completedTests: {},
  playedGamesCount: 0,
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  unlockedBadges: ['welcome'],
  dailyQuestCompleted: false,
  dailyQuestDate: new Date().toISOString().split('T')[0],
  savedWorksheetIds: [],
};

export function useStorage() {
  // 1. Language state
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANG);
      if (saved === 'ru' || saved === 'uz') return saved;
    } catch {
      // fallback
    }
    return 'uz';
  });

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEYS.LANG, newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  }, []);

  // 2. Theme state
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME);
      if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
    } catch {
      // fallback
    }
    return 'light';
  });

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // 3. User Progress state
  const [progress, setProgressState] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      if (saved) {
        const parsed = JSON.parse(saved);
        const today = new Date().toISOString().split('T')[0];

        // Calculate streak
        let streak = parsed.streakDays || 1;
        if (parsed.lastActiveDate) {
          const lastDate = new Date(parsed.lastActiveDate);
          const currDate = new Date(today);
          const diffDays = Math.floor(
            (currDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
          );
          if (diffDays === 1) {
            streak += 1;
          } else if (diffDays > 1) {
            streak = 1;
          }
        }

        return {
          ...DEFAULT_PROGRESS,
          ...parsed,
          streakDays: streak,
          lastActiveDate: today,
          dailyQuestCompleted: parsed.dailyQuestDate === today ? parsed.dailyQuestCompleted : false,
          dailyQuestDate: today,
        };
      }
    } catch {
      // fallback
    }
    return DEFAULT_PROGRESS;
  });

  const saveProgress = useCallback((updater: (prev: UserProgress) => UserProgress) => {
    setProgressState((prev) => {
      const next = updater(prev);
      try {
        localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const awardXP = useCallback(
    (amount: number) => {
      saveProgress((prev) => ({
        ...prev,
        xp: prev.xp + amount,
      }));
    },
    [saveProgress]
  );

  const markLessonComplete = useCallback(
    (slug: string, xpReward = 50) => {
      saveProgress((prev) => {
        if (prev.completedLessons.includes(slug)) return prev;
        const newCompleted = [...prev.completedLessons, slug];
        const newBadges = [...prev.unlockedBadges];
        if (newCompleted.length >= 1 && !newBadges.includes('first_lesson')) {
          newBadges.push('first_lesson');
        }
        if (newCompleted.length >= 5 && !newBadges.includes('half_way')) {
          newBadges.push('half_way');
        }
        if (newCompleted.length >= 10 && !newBadges.includes('master_all_lessons')) {
          newBadges.push('master_all_lessons');
        }

        return {
          ...prev,
          completedLessons: newCompleted,
          unlockedBadges: newBadges,
          xp: prev.xp + xpReward,
        };
      });
    },
    [saveProgress]
  );

  const recordExerciseComplete = useCallback(
    (exerciseId: string, xpReward = 15) => {
      saveProgress((prev) => {
        const isNew = !prev.completedExercises.includes(exerciseId);
        const newExercises = isNew ? [...prev.completedExercises, exerciseId] : prev.completedExercises;
        const newBadges = [...prev.unlockedBadges];

        if (newExercises.length >= 5 && !newBadges.includes('practice_starter')) {
          newBadges.push('practice_starter');
        }
        if (newExercises.length >= 25 && !newBadges.includes('practice_pro')) {
          newBadges.push('practice_pro');
        }

        return {
          ...prev,
          completedExercises: newExercises,
          unlockedBadges: newBadges,
          xp: prev.xp + (isNew ? xpReward : 5),
        };
      });
    },
    [saveProgress]
  );

  const recordTestResult = useCallback(
    (moduleId: number, score: number, total: number, xpEarned: number) => {
      saveProgress((prev) => {
        const existing = prev.completedTests[moduleId];
        const bestScore = existing ? Math.max(existing.bestScore, score) : score;
        const newBadges = [...prev.unlockedBadges];

        if (!newBadges.includes('test_taker')) {
          newBadges.push('test_taker');
        }
        if (score === total && !newBadges.includes('perfect_score')) {
          newBadges.push('perfect_score');
        }

        return {
          ...prev,
          completedTests: {
            ...prev.completedTests,
            [moduleId]: {
              bestScore,
              total,
              timestamp: new Date().toISOString(),
            },
          },
          unlockedBadges: newBadges,
          xp: prev.xp + xpEarned,
        };
      });
    },
    [saveProgress]
  );

  const incrementGameCount = useCallback(
    (xpReward = 20) => {
      saveProgress((prev) => {
        const count = prev.playedGamesCount + 1;
        const newBadges = [...prev.unlockedBadges];
        if (count >= 1 && !newBadges.includes('first_game')) {
          newBadges.push('first_game');
        }
        if (count >= 10 && !newBadges.includes('gamer_linguist')) {
          newBadges.push('gamer_linguist');
        }
        return {
          ...prev,
          playedGamesCount: count,
          unlockedBadges: newBadges,
          xp: prev.xp + xpReward,
        };
      });
    },
    [saveProgress]
  );

  const completeDailyQuest = useCallback(() => {
    saveProgress((prev) => {
      if (prev.dailyQuestCompleted) return prev;
      return {
        ...prev,
        dailyQuestCompleted: true,
        xp: prev.xp + 50,
      };
    });
  }, [saveProgress]);

  const resetProgress = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEYS.PROGRESS);
    } catch {
      // ignore
    }
    setProgressState(DEFAULT_PROGRESS);
  }, []);

  return {
    lang,
    setLang,
    theme,
    setTheme,
    progress,
    awardXP,
    markLessonComplete,
    recordExerciseComplete,
    recordTestResult,
    incrementGameCount,
    completeDailyQuest,
    resetProgress,
  };
}
