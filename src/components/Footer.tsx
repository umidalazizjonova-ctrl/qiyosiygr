import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, BookOpen, GraduationCap } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer className="no-print mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-extrabold text-sm">
                XU
              </div>
              <span className="font-black text-base text-slate-800 dark:text-slate-100">
                Xolida ustoz bilan o‘zbek tili
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              {lang === 'uz'
                ? 'Rus tilida o‘qitiladigan 5–9-sinf o‘quvchilari va o‘qituvchilari uchun qiyosiy sintaksis (so‘z birikmasi va gap) bo‘yicha interaktiv ta’lim platformasi.'
                : 'Интерактивная образовательная платформа по сравнительному синтаксису для учащихся 5–9 классов с русским языком обучения и их преподавателей.'}
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-2 text-xs">
            <span className="font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              {lang === 'uz' ? 'O‘quv bo‘limlari' : 'Разделы обучения'}
            </span>
            <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/darslar" className="hover:text-teal-600 transition-colors">
                  {t.navLessons}
                </Link>
              </li>
              <li>
                <Link to="/qiyoslash" className="hover:text-teal-600 transition-colors">
                  {t.navBridge}
                </Link>
              </li>
              <li>
                <Link to="/oyinlar" className="hover:text-teal-600 transition-colors">
                  {t.navGames}
                </Link>
              </li>
              <li>
                <Link to="/mashqlar" className="hover:text-teal-600 transition-colors">
                  {t.navExercises}
                </Link>
              </li>
              <li>
                <Link to="/test" className="hover:text-teal-600 transition-colors">
                  {t.navTests}
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="space-y-2 text-xs">
            <span className="font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              {lang === 'uz' ? 'Manbalar' : 'Ресурсы'}
            </span>
            <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/lugat" className="hover:text-teal-600 transition-colors">
                  {t.navDictionary}
                </Link>
              </li>
              <li>
                <Link to="/faktlar" className="hover:text-teal-600 transition-colors">
                  {t.navFacts}
                </Link>
              </li>
              <li>
                <Link to="/darsliklar" className="hover:text-teal-600 transition-colors">
                  {t.navResources}
                </Link>
              </li>
              <li>
                <Link to="/ustoz" className="hover:text-teal-600 transition-colors">
                  {t.navTeacher}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © 2026 Xolida ustoz bilan o‘zbek tili. {lang === 'uz' ? 'Barcha huquqlar himoyalangan.' : 'Все права защищены.'}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>O‘zbekiston umumta’lim maktablari ta’lim dasturiga asoslangan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
