import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, ArrowLeftRight, Gamepad2, CheckSquare, User } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface BottomNavProps {
  lang: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({ lang }) => {
  const location = useLocation();
  const t = translations[lang];

  const items = [
    { to: '/', label: t.navHome, icon: Home },
    { to: '/darslar', label: t.navLessons, icon: BookOpen },
    { to: '/qiyoslash', label: lang === 'uz' ? 'Ko‘prik' : 'Мост', icon: ArrowLeftRight },
    { to: '/oyinlar', label: t.navGames, icon: Gamepad2 },
    { to: '/mashqlar', label: t.navExercises, icon: CheckSquare },
    { to: '/profil', label: t.navProfile, icon: User },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 backdrop-blur-md px-2 py-1 shadow-lg no-print">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
                isActive
                  ? 'text-teal-600 dark:text-teal-400 font-bold scale-105'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
