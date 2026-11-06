import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  ArrowLeftRight,
  Gamepad2,
  CheckSquare,
  FileQuestion,
  BookA,
  Sparkles,
  BookmarkCheck,
  User,
  GraduationCap,
  Sun,
  Moon,
  Flame,
  Award,
} from 'lucide-react';
import { Language, Theme, UserProgress } from '../types';
import { translations } from '../i18n/translations';

interface NavbarProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  progress: UserProgress;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLangChange,
  theme,
  onThemeChange,
  progress,
}) => {
  const location = useLocation();
  const t = translations[lang];

  const navLinks = [
    { to: '/darslar', label: t.navLessons, icon: BookOpen },
    { to: '/qiyoslash', label: t.navBridge, icon: ArrowLeftRight },
    { to: '/oyinlar', label: t.navGames, icon: Gamepad2 },
    { to: '/mashqlar', label: t.navExercises, icon: CheckSquare },
    { to: '/test', label: t.navTests, icon: FileQuestion },
    { to: '/lugat', label: t.navDictionary, icon: BookA },
    { to: '/faktlar', label: t.navFacts, icon: Sparkles },
    { to: '/darsliklar', label: t.navResources, icon: BookmarkCheck },
    { to: '/ustoz', label: t.navTeacher, icon: GraduationCap },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-teal-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Brand Logo & Mascot badge */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-500 flex items-center justify-center text-white shadow-sm shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-lg tracking-tight">XU</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base leading-tight text-slate-800 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                Xolida ustoz
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                {lang === 'uz' ? 'Qiyosiy sintaksis' : 'Сравнительный синтаксис'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar: XP, Streak, Lang, Theme, Profile */}
          <div className="flex items-center gap-2">
            {/* Streak Counter */}
            <div
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 text-xs font-bold"
              title={`${t.streakLabel}: ${progress.streakDays} kun`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{progress.streakDays}</span>
            </div>

            {/* XP Counter */}
            <div
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/50 text-teal-700 dark:text-teal-300 text-xs font-bold"
              title={`${t.xpLabel}: ${progress.xp} XP`}
            >
              <Award className="w-3.5 h-3.5 text-teal-600" />
              <span>{progress.xp} XP</span>
            </div>

            {/* Language Switcher RU / UZ */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={() => onLangChange('uz')}
                className={`px-2 py-1 text-xs font-bold rounded-md transition-colors ${
                  lang === 'uz'
                    ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
                aria-label="O‘zbek tili"
              >
                UZ
              </button>
              <button
                type="button"
                onClick={() => onLangChange('ru')}
                className={`px-2 py-1 text-xs font-bold rounded-md transition-colors ${
                  lang === 'ru'
                    ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
                aria-label="Русский язык"
              >
                RU
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={theme === 'dark' ? t.lightMode : t.darkMode}
              title={theme === 'dark' ? t.lightMode : t.darkMode}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Profile Link */}
            <Link
              to="/profil"
              className={`h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 text-xs font-bold transition-colors ${
                location.pathname === '/profil'
                  ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={t.navProfile}
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">{t.navProfile}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
