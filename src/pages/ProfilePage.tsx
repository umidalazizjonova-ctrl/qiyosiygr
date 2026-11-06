import React, { useState } from 'react';
import {
  User,
  Award,
  Flame,
  BookOpen,
  CheckSquare,
  Sparkles,
  RotateCcw,
  ShieldAlert,
  Moon,
  Sun,
  Laptop,
} from 'lucide-react';
import { Language, Theme, UserProgress } from '../types';
import { translations } from '../i18n/translations';
import { BADGES_DATA } from '../data/badges';
import { MascotXolida } from '../components/MascotXolida';

interface ProfilePageProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  progress: UserProgress;
  onResetProgress: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  lang,
  onLangChange,
  theme,
  onThemeChange,
  progress,
  onResetProgress,
}) => {
  const t = translations[lang];
  const [showResetModal, setShowResetModal] = useState(false);

  // Current level
  const levels = t.levels;
  const currentLevelIndex = [...levels]
    .reverse()
    .findIndex((lvl) => progress.xp >= lvl.minXp);
  const actualIdx = currentLevelIndex === -1 ? 0 : levels.length - 1 - currentLevelIndex;
  const currentLevel = levels[actualIdx];
  const nextLevel = levels[actualIdx + 1];

  const xpCurrentLevelMin = currentLevel.minXp;
  const xpNextLevelMin = nextLevel ? nextLevel.minXp : currentLevel.minXp + 500;
  const xpInLevel = progress.xp - xpCurrentLevelMin;
  const xpNeeded = xpNextLevelMin - xpCurrentLevelMin;
  const levelPercent = Math.min(100, Math.round((xpInLevel / xpNeeded) * 100));

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Student Profile Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-700 via-sky-800 to-indigo-900 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shrink-0">
            <MascotXolida mood="proud" size={110} />
          </div>

          <div className="flex-1 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-black">
              <Award className="w-3.5 h-3.5" />
              <span>{currentLevel.title}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              {lang === 'uz' ? 'O‘quvchi profili' : 'Профиль ученика'}
            </h1>
            <p className="text-xs sm:text-sm text-teal-100">
              {lang === 'uz'
                ? 'Siz o‘zbek tili sintaksisini qunt bilan o‘rganmoqdasiz!'
                : 'Вы упорно изучаете сравнительный синтаксис узбекского языка!'}
            </p>

            {/* Level XP Progress Bar */}
            <div className="pt-2 space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-teal-200">
                <span>{progress.xp} XP</span>
                {nextLevel && (
                  <span>
                    {lang === 'uz' ? 'Keyingi daraja:' : 'До следующего уровня:'} {nextLevel.minXp} XP ({nextLevel.title})
                  </span>
                )}
              </div>
              <div className="w-full h-2.5 rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${levelPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Metric Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center">
          <Flame className="w-6 h-6 text-amber-500 fill-amber-500 mx-auto mb-1" />
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
            {progress.streakDays}
          </div>
          <div className="text-xs text-slate-500">{t.streakLabel}</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center">
          <BookOpen className="w-6 h-6 text-teal-600 mx-auto mb-1" />
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
            {progress.completedLessons.length} / 10
          </div>
          <div className="text-xs text-slate-500">{t.lessonsCompleted}</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center">
          <CheckSquare className="w-6 h-6 text-sky-600 mx-auto mb-1" />
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
            {progress.completedExercises.length}
          </div>
          <div className="text-xs text-slate-500">
            {lang === 'uz' ? 'Yechilgan mashqlar' : 'Решено упражнений'}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center">
          <Sparkles className="w-6 h-6 text-indigo-600 mx-auto mb-1" />
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
            {progress.unlockedBadges.length} / 12
          </div>
          <div className="text-xs text-slate-500">
            {lang === 'uz' ? 'Nishonlar' : 'Достижения'}
          </div>
        </div>
      </div>

      {/* 12 Achievement Badges Gallery */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100">
            {lang === 'uz' ? '12 ta yutuq nishonlari' : '12 знаков отличия и достижений'}
          </h2>
          <p className="text-xs text-slate-500">
            {lang === 'uz'
              ? 'Darslarni tamomlash, mashqlar va o‘yinlar orqali yangi nishonlarni oching'
              : 'Открывайте новые награды за прохождение уроков, тестов и игр'}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {BADGES_DATA.map((badge) => {
            const isUnlocked =
              progress.unlockedBadges.includes(badge.id) || badge.condition(progress);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-between min-h-[140px] ${
                  isUnlocked
                    ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-900/60 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-50 grayscale'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${
                    isUnlocked
                      ? 'bg-amber-400 text-slate-900 shadow-md'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                  }`}
                >
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-extrabold text-xs text-slate-900 dark:text-slate-100">
                    {lang === 'uz' ? badge.titleUz : badge.titleRu}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                    {lang === 'uz' ? badge.descUz : badge.descRu}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Settings & Reset */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
        <h2 className="text-lg font-black text-slate-900 dark:text-slate-100">
          {lang === 'uz' ? 'Tizim sozlamalari' : 'Системные настройки'}
        </h2>

        {/* Language switch */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <div>
            <div className="font-bold text-sm text-slate-800 dark:text-slate-100">
              {lang === 'uz' ? 'Interfeys tili' : 'Язык интерфейса'}
            </div>
            <div className="text-xs text-slate-500">
              {lang === 'uz' ? 'O‘zbek yoki rus tilini tanlang' : 'Выберите язык приложения'}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onLangChange('uz')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-colors ${
                lang === 'uz'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border'
              }`}
            >
              O‘zbekcha (UZ)
            </button>
            <button
              type="button"
              onClick={() => onLangChange('ru')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-colors ${
                lang === 'ru'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border'
              }`}
            >
              Русский (RU)
            </button>
          </div>
        </div>

        {/* Theme switch */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <div>
            <div className="font-bold text-sm text-slate-800 dark:text-slate-100">
              {lang === 'uz' ? 'Mavzu (yorug‘ / tungi)' : 'Тема оформления'}
            </div>
            <div className="text-xs text-slate-500">
              {lang === 'uz' ? 'Ko‘zingizga qulay bo‘lgan rejim' : 'Комфортный визуальный режим'}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onThemeChange('light')}
              className={`p-2 rounded-xl border flex items-center gap-1 text-xs font-bold ${
                theme === 'light' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-700 text-slate-600'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>{t.lightMode}</span>
            </button>
            <button
              type="button"
              onClick={() => onThemeChange('dark')}
              className={`p-2 rounded-xl border flex items-center gap-1 text-xs font-bold ${
                theme === 'dark' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-700 text-slate-600'
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>{t.darkMode}</span>
            </button>
          </div>
        </div>

        {/* Reset progress */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <div className="font-bold text-xs text-rose-600 dark:text-rose-400">
              {lang === 'uz' ? 'Xavfli hudud' : 'Сброс данных'}
            </div>
            <div className="text-[11px] text-slate-400">
              {lang === 'uz'
                ? 'Barcha ballar va nishonlar o‘chiriladi'
                : 'Сброс всех баллов XP, пройденных уроков и наград'}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowResetModal(true)}
            className="px-4 py-2 rounded-xl border border-rose-300 dark:border-rose-800 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950 text-xs font-bold flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.resetProgress}</span>
          </button>
        </div>
      </section>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-sm w-full space-y-4 shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-black text-lg text-slate-900 dark:text-slate-100">
                {lang === 'uz' ? 'Progressni nollash?' : 'Сбросить весь прогресс?'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'uz'
                  ? 'Ushbu amalni ortga qaytarib bo‘lmaydi. Barcha XP ballar va yutuqlar dastlabki holatga qaytadi.'
                  : 'Это действие необратимо. Все баллы XP и награды будут сброшены к начальным.'}
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowResetModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200"
              >
                {t.cancel}
              </button>
              <button
                type="button"
                onClick={() => {
                  onResetProgress();
                  setShowResetModal(false);
                }}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-black shadow-md hover:bg-rose-700"
              >
                {t.confirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
