import React, { useState } from 'react';
import {
  CheckCircle2,
  CheckSquare,
  HelpCircle,
  Sparkles,
  Filter,
  RotateCcw,
  BookOpen,
} from 'lucide-react';
import { Language, UserProgress, ExerciseType, ExerciseItem } from '../types';
import { translations } from '../i18n/translations';
import { EXERCISES_DATA } from '../data/exercises';
import { MascotXolida } from '../components/MascotXolida';
import { fireSuccessConfetti } from '../components/Confetti';

interface ExercisesPageProps {
  lang: Language;
  progress: UserProgress;
  onRecordExerciseComplete: (exerciseId: string, xp?: number) => void;
}

export const ExercisesPage: React.FC<ExercisesPageProps> = ({
  lang,
  progress,
  onRecordExerciseComplete,
}) => {
  const t = translations[lang];

  const [selectedModule, setSelectedModule] = useState<number | 'all'>('all');
  const [selectedType, setSelectedType] = useState<ExerciseType | 'all'>('all');

  // Answers state: exerciseId -> selected answer representation
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [checkedExercises, setCheckedExercises] = useState<Record<string, boolean>>({});

  const exerciseTypeLabels: Record<ExerciseType, { uz: string; ru: string }> = {
    'fill-blank': { uz: 'Bo‘sh joyni to‘ldirish', ru: 'Заполнение пропусков' },
    choice: { uz: 'Variant tanlash', ru: 'Выбор варианта' },
    matching: { uz: 'Moslashtirish', ru: 'Сопоставление' },
    'sentence-builder': { uz: 'Gap tuzish', ru: 'Построение предложения' },
    'find-error': { uz: 'Xatoni topish', ru: 'Поиск ошибки' },
    translate: { uz: 'Tarjima qilish', ru: 'Перевод' },
    'part-detector': { uz: 'Bo‘lakni ajratish', ru: 'Выделение членов' },
    'true-false': { uz: 'To‘g‘ri/noto‘g‘ri', ru: 'Верно/Неверно' },
  };

  const filteredExercises = EXERCISES_DATA.filter((ex) => {
    if (selectedModule !== 'all' && ex.moduleId !== selectedModule) return false;
    if (selectedType !== 'all' && ex.type !== selectedType) return false;
    return true;
  });

  const handleSelectOption = (ex: ExerciseItem, opt: string) => {
    if (checkedExercises[ex.id]) return;
    setUserAnswers((prev) => ({ ...prev, [ex.id]: opt }));
    setCheckedExercises((prev) => ({ ...prev, [ex.id]: true }));

    const isCorrect = opt === ex.correctAnswer;
    if (isCorrect) {
      fireSuccessConfetti();
      onRecordExerciseComplete(ex.id, 15);
    }
  };

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-700 via-sky-800 to-indigo-900 text-white p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <CheckSquare className="w-3.5 h-3.5" />
              <span>{lang === 'uz' ? '100+ amaliy mashqlar' : '100+ практических упражнений'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              {lang === 'uz' ? 'Sintaksis amaliyot zali' : 'Практический зал синтаксиса'}
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              {lang === 'uz'
                ? '8 xil turdagi mashqlar: bo‘sh joy to‘ldirish, juftlash, xatoni tuzatish, tarjima va boshqalar.'
                : '8 интерактивных форматов упражнений с подробными методическими подсказками учителя Холиды.'}
            </p>
          </div>
          <div className="shrink-0">
            <MascotXolida mood="encouraging" size={120} />
          </div>
        </div>
      </div>

      {/* Filters: Module & Type */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        {/* Module pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedModule('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
              selectedModule === 'all'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {t.filterAll} {lang === 'uz' ? 'modullar' : 'модули'}
          </button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((mNum) => (
            <button
              key={mNum}
              type="button"
              onClick={() => setSelectedModule(mNum)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                selectedModule === mNum
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {mNum}-{lang === 'uz' ? 'modul' : 'модуль'}
            </button>
          ))}
        </div>

        {/* Exercise Type pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setSelectedType('all')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-bold whitespace-nowrap transition-colors ${
              selectedType === 'all'
                ? 'bg-sky-600 text-white'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
            }`}
          >
            {lang === 'uz' ? 'Barcha 8 tur' : 'Все 8 типов'}
          </button>
          {(Object.keys(exerciseTypeLabels) as ExerciseType[]).map((typeKey) => (
            <button
              key={typeKey}
              type="button"
              onClick={() => setSelectedType(typeKey)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold whitespace-nowrap transition-colors ${
                selectedType === typeKey
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {lang === 'uz' ? exerciseTypeLabels[typeKey].uz : exerciseTypeLabels[typeKey].ru}
            </button>
          ))}
        </div>
      </div>

      {/* Exercises List */}
      <div className="space-y-5">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{filteredExercises.length} {lang === 'uz' ? 'ta mashq mavjud' : 'упражнений найдено'}</span>
          <span className="font-bold text-teal-600 dark:text-teal-400">
            {progress.completedExercises.length} {lang === 'uz' ? 'tasi bajarilgan' : 'выполнено'}
          </span>
        </div>

        {filteredExercises.map((ex, idx) => {
          const isDone = progress.completedExercises.includes(ex.id);
          const userAns = userAnswers[ex.id];
          const isChecked = checkedExercises[ex.id] || isDone;
          const isCorrect = userAns === ex.correctAnswer || isDone;

          return (
            <div
              key={ex.id}
              className={`p-6 rounded-2xl border transition-all ${
                isDone
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50'
                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 shadow-xs'
              }`}
            >
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    {ex.moduleId}-{lang === 'uz' ? 'modul' : 'модуль'}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">
                    {lang === 'uz' ? exerciseTypeLabels[ex.type].uz : exerciseTypeLabels[ex.type].ru}
                  </span>
                </div>
                {isDone && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-600 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{lang === 'uz' ? 'Bajarildi (+15 XP)' : 'Выполнено (+15 XP)'}</span>
                  </span>
                )}
              </div>

              {/* Instruction & Question */}
              <div className="space-y-1 mb-4">
                <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                  {lang === 'uz' ? ex.instructionUz : ex.instructionRu}
                </div>
                <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                  {lang === 'uz' ? ex.questionUz : ex.questionRu}
                </div>
              </div>

              {/* Options */}
              {ex.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ex.options.map((opt, oIdx) => {
                    const isSelected = userAns === opt;
                    let optStyle =
                      'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-teal-400';

                    if (isChecked) {
                      if (opt === ex.correctAnswer) {
                        optStyle =
                          'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold';
                      } else if (isSelected && !isCorrect) {
                        optStyle =
                          'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        type="button"
                        disabled={isChecked}
                        onClick={() => handleSelectOption(ex, opt)}
                        className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${optStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Matching pairs preview */}
              {ex.pairs && (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="text-xs font-bold text-slate-400">
                    {lang === 'uz' ? 'Mos juftliklar:' : 'Пары соответствий:'}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {ex.pairs.map((p, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-2 rounded-lg bg-white dark:bg-slate-900 border text-xs flex items-center justify-between font-bold"
                      >
                        <span className="text-teal-700 dark:text-teal-300">{p.left}</span>
                        <span className="text-slate-400">↔</span>
                        <span className="text-sky-700 dark:text-sky-300">{p.right}</span>
                      </div>
                    ))}
                  </div>
                  {!isDone && (
                    <button
                      type="button"
                      onClick={() => handleSelectOption(ex, 'matched')}
                      className="mt-2 px-4 py-1.5 rounded-lg bg-teal-600 text-white font-bold text-xs"
                    >
                      {lang === 'uz' ? 'Juftlikni o‘zlashtirdim (+15 XP)' : 'Усвоено (+15 XP)'}
                    </button>
                  )}
                </div>
              )}

              {/* Teacher explanation box */}
              {isChecked && (
                <div className="mt-4 p-3.5 rounded-xl bg-teal-50/60 dark:bg-slate-800/80 border border-teal-100 dark:border-slate-700 flex items-start gap-3 animate-fade-in text-xs sm:text-sm">
                  <MascotXolida mood="happy" size={55} className="shrink-0" />
                  <div className="space-y-0.5">
                    <span className="font-extrabold text-teal-800 dark:text-teal-300">
                      {lang === 'uz' ? 'Xolida ustoz izohi:' : 'Комментарий учителя Холиды:'}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300">
                      {lang === 'uz' ? ex.teacherTipUz : ex.teacherTipRu}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
