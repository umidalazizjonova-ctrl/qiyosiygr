import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Sparkles, BookOpen, ArrowRight, Filter } from 'lucide-react';
import { Language, UserProgress } from '../types';
import { translations } from '../i18n/translations';
import { LESSONS_DATA } from '../data/lessons';

interface LessonsPageProps {
  lang: Language;
  progress: UserProgress;
}

export const LessonsPage: React.FC<LessonsPageProps> = ({ lang, progress }) => {
  const t = translations[lang];
  const [selectedGrade, setSelectedGrade] = useState<string>('all');

  const filteredLessons = LESSONS_DATA.filter((lesson) => {
    if (selectedGrade === 'all') return true;
    return lesson.grade.includes(selectedGrade);
  });

  const completedCount = progress.completedLessons.length;
  const progressPercent = Math.round((completedCount / LESSONS_DATA.length) * 100);

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-700 via-teal-800 to-sky-900 text-white p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>10 ta didaktik modul</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              {lang === 'uz' ? 'O‘zbek tili sintaksisi darslari' : 'Уроки узбекского синтаксиса'}
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 mt-1 max-w-xl">
              {lang === 'uz'
                ? 'Rusiyzabon o‘quvchilar uchun qiyosiy grammatika asosida tuzilgan interaktiv 10 ta modul.'
                : '10 интерактивных модулей сравнительной грамматики для учащихся 5–9 классов с русским языком обучения.'}
            </p>
          </div>

          {/* Overall Progress ring/bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shrink-0 min-w-[200px]">
            <div className="flex items-center justify-between text-xs font-bold mb-1.5">
              <span>{lang === 'uz' ? 'Umumiy o‘zlashtirish' : 'Общий прогресс'}</span>
              <span className="text-amber-300">{progressPercent}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full bg-amber-400 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-[11px] text-teal-200 mt-2 text-right">
              {completedCount} / 10 {lang === 'uz' ? 'dars yakunlandi' : 'уроков пройдено'}
            </div>
          </div>
        </div>
      </div>

      {/* Grade Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
          <Filter className="w-4 h-4 text-slate-400 ml-2 mr-1" />
          {['all', '5–6', '6–7', '7–8', '8–9'].map((grade) => (
            <button
              key={grade}
              type="button"
              onClick={() => setSelectedGrade(grade)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedGrade === grade
                  ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {grade === 'all'
                ? t.filterAll
                : `${grade}-${lang === 'uz' ? 'sinflar' : 'классы'}`}
            </button>
          ))}
        </div>

        <span className="text-xs text-slate-500 dark:text-slate-400">
          {filteredLessons.length} {lang === 'uz' ? 'ta modul ko‘rsatilmoqda' : 'модулей'}
        </span>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredLessons.map((lesson) => {
          const isDone = progress.completedLessons.includes(lesson.slug);

          return (
            <div
              key={lesson.id}
              className={`rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                isDone
                  ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60'
                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-teal-400 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-teal-600 text-white font-extrabold text-sm flex items-center justify-center">
                      {lesson.id}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      {lesson.grade}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{lesson.estimatedMinutes} daq.</span>
                    </span>
                    {isDone && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{lang === 'uz' ? 'Tugallangan' : 'Пройден'}</span>
                      </span>
                    )}
                  </div>
                </div>

                <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 leading-snug">
                  {lang === 'uz' ? lesson.titleUz : lesson.titleRu}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {lang === 'uz' ? lesson.subtitleUz : lesson.subtitleRu}
                </p>

                {/* Micro goals preview */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1">
                  {lesson.goals.slice(0, 2).map((goal, gIdx) => (
                    <div key={gIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      <span className="truncate">{lang === 'uz' ? goal.uz : goal.ru}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                  +50 XP
                </span>
                <Link
                  to={`/dars/${lesson.slug}`}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                    isDone
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200'
                      : 'bg-teal-600 hover:bg-teal-700 text-white'
                  }`}
                >
                  <span>{isDone ? (lang === 'uz' ? 'Qayta ko‘rish' : 'Повторить') : (lang === 'uz' ? 'Darsni boshlash' : 'Начать урок')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
