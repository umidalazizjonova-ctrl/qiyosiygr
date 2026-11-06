import React, { useState } from 'react';
import { Sparkles, BookOpen, Quote, ExternalLink, Filter } from 'lucide-react';
import { Language, FactItem } from '../types';
import { translations } from '../i18n/translations';
import { FACTS_DATA } from '../data/facts';
import { MascotXolida } from '../components/MascotXolida';
import { CultureImage } from '../components/CultureImage';

interface FactsPageProps {
  lang: Language;
}

export const FactsPage: React.FC<FactsPageProps> = ({ lang }) => {
  const t = translations[lang];

  const categories = ['all', 'Agglyutinatsiya', 'Grammatik rod', 'So‘z tartibi', 'Turkiy so‘zlar', 'Sifatlar', 'Meros'];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFacts = FACTS_DATA.filter((fact) => {
    if (selectedCategory === 'all') return true;
    return fact.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-700 via-sky-800 to-indigo-900 text-white p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'uz' ? '20 ta ilmiy tasdiqlangan fakt' : '20 научно подтвержденных фактов'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              {lang === 'uz' ? 'O‘zbek tili haqida qiziqarli faktlar' : 'Удивительные факты об узбекском языке'}
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              {lang === 'uz'
                ? 'Agglyutinativ qurilish, grammatik rodning yo‘qligi, qadimiy meros va rus tiliga o‘tgan turkiy so‘zlar sirlari.'
                : 'Агглютинативность, отсутствие рода, богатая история и тюркизмы в русской речи с точными источниками.'}
            </p>
          </div>
          <div className="shrink-0">
            <MascotXolida mood="proud" size={120} />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-teal-400'
            }`}
          >
            {cat === 'all' ? t.filterAll : cat}
          </button>
        ))}
      </div>

      {/* Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredFacts.map((fact) => (
          <div
            key={fact.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-teal-400 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  {fact.category}
                </span>
                <span className="text-xs text-slate-400 font-bold">№ {fact.id.replace('fact_', '')}</span>
              </div>

              <h2 className="font-black text-base sm:text-lg text-slate-900 dark:text-slate-100 leading-snug">
                {lang === 'uz' ? fact.titleUz : fact.titleRu}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {lang === 'uz' ? fact.contentUz : fact.contentRu}
              </p>
            </div>

            {/* Cultural snippet thumbnail if present */}
            {fact.imageKey && (
              <div className="pt-2">
                <CultureImage imageKey={fact.imageKey} alt={fact.titleUz} />
              </div>
            )}

            {/* Source Citation */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-700 dark:text-slate-300">
                  {lang === 'uz' ? 'Manba:' : 'Источник:'}{' '}
                </strong>
                {fact.source}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
