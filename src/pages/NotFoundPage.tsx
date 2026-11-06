import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Language } from '../types';
import { MascotXolida } from '../components/MascotXolida';

interface NotFoundPageProps {
  lang: Language;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ lang }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-6">
      <MascotXolida mood="thinking" size={160} />
      <div className="space-y-2 max-w-md">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-800 dark:text-slate-100">
          404
        </h1>
        <h2 className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-200">
          {lang === 'uz' ? 'Sahifa topilmadi' : 'Страница не найдена'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          {lang === 'uz'
            ? 'Siz qidirayotgan manzil mavjud emas yoki boshqa joyga ko‘chirilgan. Keling, bosh sahifadan davom etamiz!'
            : 'Запрошенная страница не существует или была перемещена. Давайте вернёмся на главную!'}
        </p>
      </div>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
      >
        <Home className="w-4 h-4" />
        <span>{lang === 'uz' ? 'Bosh sahifaga qaytish' : 'На главную'}</span>
      </Link>
    </div>
  );
};
