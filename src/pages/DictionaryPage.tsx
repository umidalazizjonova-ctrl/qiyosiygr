import React, { useState } from 'react';
import { BookA, Search, Volume2, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { Language, DictionaryEntry } from '../types';
import { translations } from '../i18n/translations';
import { DICTIONARY_DATA } from '../data/dictionary';
import { MascotXolida } from '../components/MascotXolida';

interface DictionaryPageProps {
  lang: Language;
}

export const DictionaryPage: React.FC<DictionaryPageProps> = ({ lang }) => {
  const t = translations[lang];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', uz: 'Barchasi', ru: 'Все термины' },
    { id: 'kelishik', uz: 'Kelishiklar', ru: 'Падежи' },
    { id: 'bolak', uz: 'Gap bo‘laklari', ru: 'Члены предложения' },
    { id: 'soxta-dost', uz: 'Soxta do‘stlar (kalkalar)', ru: 'Ложные друзья и кальки' },
    { id: 'boshqaruv', uz: 'Fe’l boshqaruvi', ru: 'Управление глаголов' },
    { id: 'yuklama', uz: 'Yuklamalar', ru: 'Частицы' },
  ];

  const filteredEntries = DICTIONARY_DATA.filter((entry) => {
    if (selectedCategory !== 'all' && entry.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchUz = entry.uzbek.toLowerCase().includes(q) || entry.exampleUz.toLowerCase().includes(q);
      const matchRu = entry.russian.toLowerCase().includes(q) || entry.exampleRu.toLowerCase().includes(q);
      return matchUz || matchRu;
    }
    return true;
  });

  const handleSpeak = (text: string) => {
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'uz-UZ';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
      }
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-700 via-sky-800 to-indigo-900 text-white p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <BookA className="w-3.5 h-3.5" />
              <span>{lang === 'uz' ? 'Ruscha–o‘zbekcha qiyosiy lug‘at' : 'Русско–узбекский синтаксический глоссарий'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              {lang === 'uz' ? 'Sintaktik atamalar lug‘ati' : 'Словарь синтаксических терминов'}
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              {lang === 'uz'
                ? 'Kelishiklar, boshqaruv, bog‘lanish turlari va rusiyzabonlar uchun nozik farqlar jamlanmasi.'
                : 'Падежи, глагольное управление, способы связи и тонкие различия между двумя языками.'}
            </p>
          </div>
          <div className="shrink-0">
            <MascotXolida mood="happy" size={120} />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'uz'
                ? 'Atama, so‘z yoki misol bo‘yicha qidiring (masalan: kelishik, tobe, shahar)...'
                : 'Поиск по термину или примеру (например: падеж, сказуемое, изафет)...'
            }
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {lang === 'uz' ? cat.uz : cat.ru}
            </button>
          ))}
        </div>
      </div>

      {/* Dictionary Cards */}
      <div className="space-y-4">
        <div className="text-xs text-slate-500 flex items-center justify-between">
          <span>{filteredEntries.length} {lang === 'uz' ? 'ta atama topildi' : 'терминов'}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEntries.map((entry) => (
            <div
              key={entry.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-teal-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    {lang === 'uz' ? entry.categoryUz : entry.categoryRu}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSpeak(entry.uzbek)}
                    className="p-1 rounded-md text-slate-400 hover:text-teal-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title={lang === 'uz' ? 'Talaffuzni eshitish' : 'Прослушать'}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-black text-base text-slate-900 dark:text-slate-100">
                  {entry.uzbek}
                </h3>
                <div className="text-xs font-semibold text-sky-700 dark:text-sky-300 mt-0.5">
                  {entry.russian}
                </div>

                {/* Example sentence */}
                <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs space-y-1">
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    «{entry.exampleUz}»
                  </div>
                  <div className="text-slate-500 italic">
                    «{entry.exampleRu}»
                  </div>
                </div>
              </div>

              {/* Comparative Tip */}
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-teal-900 dark:text-teal-200">
                <span className="font-bold text-teal-700 dark:text-teal-400">
                  {lang === 'uz' ? 'Xolida ustoz maslahati:' : 'Подсказка Холиды:'}{' '}
                </span>
                <span>{lang === 'uz' ? entry.tipUz : entry.tipRu}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
