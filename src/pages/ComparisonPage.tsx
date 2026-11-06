import React, { useState } from 'react';
import { ArrowLeftRight, AlertTriangle, Lightbulb, CheckCircle2, Sparkles } from 'lucide-react';
import { Language, SentencePartType } from '../types';
import { translations } from '../i18n/translations';
import { COMPARISONS_DATA } from '../data/comparisons';
import { MascotXolida } from '../components/MascotXolida';

interface ComparisonPageProps {
  lang: Language;
}

export const ComparisonPage: React.FC<ComparisonPageProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedItemId, setSelectedItemId] = useState<string>(COMPARISONS_DATA[0].id);
  const [activeWordId, setActiveWordId] = useState<string | null>(null);

  const activeItem =
    COMPARISONS_DATA.find((item) => item.id === selectedItemId) || COMPARISONS_DATA[0];

  const getRoleStyle = (role: SentencePartType) => {
    switch (role) {
      case 'ega':
        return 'syntax-ega border-sky-400 bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-200';
      case 'kesim':
        return 'syntax-kesim border-rose-400 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200';
      case 'toldiruvchi':
        return 'syntax-toldiruvchi border-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200';
      case 'aniqlovchi':
        return 'syntax-aniqlovchi border-amber-400 bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200';
      case 'hol':
        return 'syntax-hol border-purple-400 bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-200';
      default:
        return 'border-slate-300 bg-slate-50 text-slate-800';
    }
  };

  // Find linked counterpart
  const getLinkedWordId = (wordId: string): string | null => {
    const conn = activeItem.connections.find(
      (c) => c.uzWordId === wordId || c.ruWordId === wordId
    );
    if (!conn) return null;
    return conn.uzWordId === wordId ? conn.ruWordId : conn.uzWordId;
  };

  const linkedId = activeWordId ? getLinkedWordId(activeWordId) : null;

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-700 via-sky-800 to-indigo-900 text-white p-6 sm:p-8 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>{lang === 'uz' ? 'Qiyosiy sintaksis laboratoriyasi' : 'Лаборатория сравнительного синтаксиса'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              {t.bridgeTitle}
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              {t.bridgeSubtitle}
            </p>
          </div>
          <div className="shrink-0">
            <MascotXolida mood="thinking" size={120} />
          </div>
        </div>
      </div>

      {/* Comparison Items Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {COMPARISONS_DATA.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setSelectedItemId(item.id);
              setActiveWordId(null);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs ${
              selectedItemId === item.id
                ? 'bg-teal-600 text-white shadow-teal-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-teal-400'
            }`}
          >
            {lang === 'uz' ? item.categoryUz : item.categoryRu}
          </button>
        ))}
      </div>

      {/* Main Bridge Visualizer Box */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-8">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {lang === 'uz' ? 'Sintaktik moslik va so‘z tartibi' : 'Синтаксическое соответствие и порядок слов'}
          </span>
          <span className="text-xs text-teal-600 dark:text-teal-400 font-bold">
            {lang === 'uz' ? 'So‘z ustiga bosing — bog‘lanishni ko‘ring' : 'Нажмите на слово — увидите соответствие'}
          </span>
        </div>

        {/* 1. Uzbek Sentence Row (SOV) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-teal-700 dark:text-teal-300 uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
              <span>O‘zbek tili (SOV: Ega — To‘ldiruvchi — Kesim)</span>
            </span>
            <span className="text-[11px] text-slate-400">Kesim oxirida</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-teal-50/40 dark:bg-slate-800/50 border border-teal-100 dark:border-slate-700/60 min-h-[80px]">
            {activeItem.uzbekSentence.words.map((w) => {
              const isHighlight = activeWordId === w.id || linkedId === w.id;
              const roleStyle = getRoleStyle(w.role);

              return (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => setActiveWordId(activeWordId === w.id ? null : w.id)}
                  className={`px-4 py-2.5 rounded-xl text-base sm:text-lg font-black transition-all cursor-pointer ${roleStyle} ${
                    isHighlight
                      ? 'ring-4 ring-teal-400 scale-105 shadow-md'
                      : 'hover:scale-102 opacity-90 hover:opacity-100'
                  }`}
                >
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-0.5">
                    {lang === 'uz' ? w.roleLabelUz : w.roleLabelRu}
                  </div>
                  <div>{w.text}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Connecting Bridge Notice / Indicator */}
        <div className="relative py-2 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-dashed border-teal-200 dark:border-slate-700" />
          </div>
          <div className="relative z-10 px-4 py-1.5 rounded-full bg-amber-400 text-slate-900 text-xs font-black shadow-md flex items-center gap-1.5">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>
              {activeWordId
                ? (lang === 'uz' ? 'Bog‘lanish belgilandi' : 'Связь подсвечена')
                : (lang === 'uz' ? 'Qiyosiy ko‘prik' : 'Сравнительный мост')}
            </span>
          </div>
        </div>

        {/* 2. Russian Sentence Row (SVO) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-sky-700 dark:text-sky-300 uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              <span>Русский язык (SVO: Подлежащее — Сказуемое — Дополнение)</span>
            </span>
            <span className="text-[11px] text-slate-400">Сказуемое в середине</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-sky-50/40 dark:bg-slate-800/50 border border-sky-100 dark:border-slate-700/60 min-h-[80px]">
            {activeItem.russianSentence.words.map((w) => {
              const isHighlight = activeWordId === w.id || linkedId === w.id;
              const roleStyle = getRoleStyle(w.role);

              return (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => setActiveWordId(activeWordId === w.id ? null : w.id)}
                  className={`px-4 py-2.5 rounded-xl text-base sm:text-lg font-black transition-all cursor-pointer ${roleStyle} ${
                    isHighlight
                      ? 'ring-4 ring-sky-400 scale-105 shadow-md'
                      : 'hover:scale-102 opacity-90 hover:opacity-100'
                  }`}
                >
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-0.5">
                    {lang === 'uz' ? w.roleLabelUz : w.roleLabelRu}
                  </div>
                  <div>{w.text}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanatory Cards: Rule Tip & Common Error */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60 space-y-1.5">
            <div className="flex items-center gap-2 font-extrabold text-xs text-teal-800 dark:text-teal-300 uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{lang === 'uz' ? 'Sintaktik qoida' : 'Синтаксическое правило'}</span>
            </div>
            <p className="text-xs sm:text-sm text-teal-950 dark:text-teal-100 leading-relaxed">
              {lang === 'uz' ? activeItem.ruleTipUz : activeItem.ruleTipRu}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 space-y-1.5">
            <div className="flex items-center gap-2 font-extrabold text-xs text-rose-800 dark:text-rose-300 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{lang === 'uz' ? 'Tipik xato va ogohlantirish' : 'Типичная ошибка и предостережение'}</span>
            </div>
            <p className="text-xs sm:text-sm text-rose-950 dark:text-rose-100 leading-relaxed font-semibold">
              {lang === 'uz' ? activeItem.commonErrorUz : activeItem.commonErrorRu}
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3 sm:gap-6 text-xs text-slate-600 dark:text-slate-300">
          <span className="font-bold text-slate-400">{lang === 'uz' ? 'Belgilanishlar:' : 'Обозначения:'}</span>
          <span className="syntax-ega px-1.5 py-0.5">Ega / Подлежащее</span>
          <span className="syntax-kesim px-1.5 py-0.5">Kesim / Сказуемое</span>
          <span className="syntax-aniqlovchi px-1.5 py-0.5">Aniqlovchi / Определение</span>
          <span className="syntax-toldiruvchi px-1.5 py-0.5">To‘ldiruvchi / Дополнение</span>
          <span className="syntax-hol px-1.5 py-0.5">Hol / Обстоятельство</span>
        </div>
      </div>
    </div>
  );
};
