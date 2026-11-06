import React, { useState } from 'react';
import {
  GraduationCap,
  Printer,
  FileText,
  CheckCircle2,
  Settings2,
  RefreshCw,
  BookOpen,
} from 'lucide-react';
import { Language, ExerciseItem } from '../types';
import { translations } from '../i18n/translations';
import { EXERCISES_DATA } from '../data/exercises';
import { LESSONS_DATA } from '../data/lessons';
import { MascotXolida } from '../components/MascotXolida';

interface TeacherPageProps {
  lang: Language;
}

export const TeacherPage: React.FC<TeacherPageProps> = ({ lang }) => {
  const t = translations[lang];

  const [selectedModules, setSelectedModules] = useState<number[]>([1, 2, 3]);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [includeAnswers, setIncludeAnswers] = useState<boolean>(true);
  const [worksheetTitle, setWorksheetTitle] = useState(
    lang === 'uz'
      ? 'O‘zbek tili (qiyosiy sintaksis): Mustaqil ish varaqasi'
      : 'Узбекский язык (сравнительный синтаксис): Раздаточный материал для урока'
  );

  // Generate worksheet tasks
  const [generatedTasks, setGeneratedTasks] = useState<ExerciseItem[]>(() => {
    return [...EXERCISES_DATA].slice(0, 10);
  });

  const handleGenerate = () => {
    const pool = EXERCISES_DATA.filter((ex) => selectedModules.includes(ex.moduleId));
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, questionCount);
    setGeneratedTasks(shuffled);
  };

  const handleToggleModule = (mId: number) => {
    if (selectedModules.includes(mId)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter((id) => id !== mId));
      }
    } else {
      setSelectedModules([...selectedModules, mId]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header Banner - hidden in print */}
      <div className="no-print rounded-3xl bg-gradient-to-r from-teal-700 via-sky-800 to-indigo-900 text-white p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{lang === 'uz' ? 'O‘qituvchi va metodist xonasi' : 'Кабинет учителя и методиста'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              {t.teacherTitle}
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              {t.teacherSubtitle}
            </p>
          </div>
          <div className="shrink-0">
            <MascotXolida mood="encouraging" size={120} />
          </div>
        </div>
      </div>

      {/* Generator Configuration Panel - hidden in print */}
      <div className="no-print p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-base sm:text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Settings2 className="w-5 h-5 text-teal-600" />
            <span>{lang === 'uz' ? 'Varaqa sozlamalari' : 'Параметры формирования раздатки'}</span>
          </h2>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>{t.printWorksheet}</span>
          </button>
        </div>

        {/* Modules select */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {t.selectModules}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {LESSONS_DATA.map((l) => {
              const checked = selectedModules.includes(l.id);
              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => handleToggleModule(l.id)}
                  className={`p-2 rounded-xl border text-xs font-bold transition-all text-left ${
                    checked
                      ? 'border-teal-500 bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-200'
                      : 'border-slate-200 dark:border-slate-800 text-slate-500 opacity-60'
                  }`}
                >
                  {l.id}-modul ({l.grade})
                </button>
              );
            })}
          </div>
        </div>

        {/* Question Count & Include Answers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {t.questionCount}
            </label>
            <div className="flex gap-2">
              {[5, 10, 15, 20].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setQuestionCount(num)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border ${
                    questionCount === num
                      ? 'bg-teal-600 text-white border-teal-600'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600'
                  }`}
                >
                  {num} ta
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <input
              type="checkbox"
              id="includeAns"
              checked={includeAnswers}
              onChange={(e) => setIncludeAnswers(e.target.checked)}
              className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500"
            />
            <label htmlFor="includeAns" className="text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
              {t.includeAnswers}
            </label>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={handleGenerate}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t.generateWorksheet}</span>
          </button>
        </div>
      </div>

      {/* ================= PRINTABLE WORKSHEET PREVIEW ================= */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-lg text-slate-900 dark:text-slate-100 font-sans space-y-6 print:border-none print:shadow-none print:p-0">
        {/* Printable Official Header */}
        <div className="border-b-2 border-slate-800 pb-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span className="font-bold">O‘zbekiston Respublikasi umumta’lim maktablari</span>
            <span>«Xolida ustoz bilan o‘zbek tili» ta’lim platformasi</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-center uppercase tracking-tight">
            {worksheetTitle}
          </h2>

          {/* Student details fill-in lines */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="font-bold">{t.studentNameField}</span>
              <span className="flex-1 border-b border-dotted border-slate-400 min-w-[120px]" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold">{t.gradeField}</span>
              <span className="w-16 border-b border-dotted border-slate-400" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold">{t.dateField}</span>
              <span className="w-24 border-b border-dotted border-slate-400" />
            </div>
          </div>
        </div>

        {/* Tasks list */}
        <div className="space-y-6 pt-2">
          {generatedTasks.map((task, idx) => (
            <div key={task.id} className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="font-black text-teal-700 dark:text-teal-400 shrink-0">
                  {idx + 1}-topshiriq.
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {lang === 'uz' ? task.instructionUz : task.instructionRu}
                </span>
              </div>

              <div className="pl-6 font-bold text-slate-900 dark:text-slate-100">
                {lang === 'uz' ? task.questionUz : task.questionRu}
              </div>

              {/* Multiple choice options or answer blanks */}
              {task.options && (
                <div className="pl-6 grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                  {task.options.map((opt, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded border border-slate-400 inline-block shrink-0" />
                      <span>
                        {String.fromCharCode(65 + oIdx)}) {opt}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Blank writing area for sentence builder or translate */}
              {!task.options && (
                <div className="pl-6 pt-2">
                  <div className="border-b border-dotted border-slate-400 h-6 w-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Answer Key (if enabled) */}
        {includeAnswers && (
          <div className="pt-8 border-t-2 border-dashed border-slate-300 dark:border-slate-800 space-y-3 page-break">
            <div className="flex items-center justify-between text-xs font-black uppercase text-slate-500">
              <span>{lang === 'uz' ? 'Javoblar kaliti va metodik izohlar (O‘qituvchi uchun)' : 'Ключ к ответам (Для учителя)'}</span>
              <span>Nazorat kaliti</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {generatedTasks.map((t, idx) => (
                <div key={t.id} className="p-2 rounded bg-slate-50 dark:bg-slate-800 border text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-teal-700">{idx + 1}. </span>
                  <span className="font-bold">
                    {Array.isArray(t.correctAnswer) ? t.correctAnswer.join(', ') : t.correctAnswer}
                  </span>
                  <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {lang === 'uz' ? t.teacherTipUz : t.teacherTipRu}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
