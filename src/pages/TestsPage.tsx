import React, { useState } from 'react';
import {
  FileQuestion,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Trophy,
  ArrowRight,
  BookOpen,
  AlertCircle,
} from 'lucide-react';
import { Language, UserProgress, TestQuestion } from '../types';
import { translations } from '../i18n/translations';
import { TESTS_DATA } from '../data/tests';
import { LESSONS_DATA } from '../data/lessons';
import { MascotXolida } from '../components/MascotXolida';
import { fireSuccessConfetti } from '../components/Confetti';

interface TestsPageProps {
  lang: Language;
  progress: UserProgress;
  onRecordTestResult: (moduleId: number, score: number, total: number, xp: number) => void;
}

export const TestsPage: React.FC<TestsPageProps> = ({
  lang,
  progress,
  onRecordTestResult,
}) => {
  const t = translations[lang];

  const [selectedModule, setSelectedModule] = useState<number>(1);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');

  // Test session state
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<TestQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isTestFinished, setIsTestFinished] = useState(false);

  const startTest = (moduleId: number) => {
    // Filter questions for the selected module and difficulty, shuffle them
    const pool = TESTS_DATA.filter((q) => q.moduleId === moduleId);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);

    setCurrentQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsTestFinished(false);
    setIsTestStarted(true);
  };

  const handleSelectAnswer = (optIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setIsTestFinished(true);
    let correctCount = 0;
    currentQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount += 1;
      }
    });

    const xpEarned = correctCount * 10;
    onRecordTestResult(selectedModule, correctCount, currentQuestions.length, xpEarned);

    if (correctCount >= Math.ceil(currentQuestions.length * 0.7)) {
      fireSuccessConfetti();
    }
  };

  const restartTest = () => {
    setIsTestStarted(false);
    setIsTestFinished(false);
    setSelectedAnswers({});
  };

  // Evaluation calculations
  const totalQuestions = currentQuestions.length;
  const correctCount = currentQuestions.filter(
    (q, idx) => selectedAnswers[idx] === q.correctIndex
  ).length;
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Find which lessons need revision
  const wrongQuestions = currentQuestions.filter(
    (q, idx) => selectedAnswers[idx] !== q.correctIndex
  );
  const needsRevisionModules = Array.from(new Set(wrongQuestions.map((q) => q.moduleId)));

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-700 via-sky-800 to-indigo-900 text-white p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <FileQuestion className="w-3.5 h-3.5" />
              <span>{lang === 'uz' ? '100+ savolli test tizimi' : 'Тестовая система из 100+ вопросов'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              {lang === 'uz' ? 'Sintaksis bo‘yicha bilim sinovi' : 'Тестирование по синтаксису'}
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              {lang === 'uz'
                ? 'Har bir modul bo‘yicha 10 ta saralangan savol, xatolar tahlili va shaxsiy tavsiyalar.'
                : 'По 10 тестовых вопросов на каждый модуль, мгновенный подсчёт баллов и рекомендации.'}
            </p>
          </div>
          <div className="shrink-0">
            <MascotXolida mood="thinking" size={120} />
          </div>
        </div>
      </div>

      {/* 1. Module Selection State */}
      {!isTestStarted && !isTestFinished && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
            <h2 className="font-black text-lg text-slate-900 dark:text-slate-100">
              {lang === 'uz' ? '1. Test modulini tanlang:' : '1. Выберите модуль для тестирования:'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LESSONS_DATA.map((lesson) => {
                const isSelected = selectedModule === lesson.id;
                const result = progress.completedTests[lesson.id];

                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => setSelectedModule(lesson.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-teal-500 bg-teal-50/60 dark:bg-teal-950/40 ring-2 ring-teal-400'
                        : 'border-slate-200 dark:border-slate-800 hover:border-teal-300 bg-white dark:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                        {lesson.id}
                      </span>
                      <div>
                        <div className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-snug">
                          {lang === 'uz' ? lesson.titleUz : lesson.titleRu}
                        </div>
                        {result && (
                          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">
                            {lang === 'uz' ? 'Eng yaxshi natija:' : 'Лучший результат:'} {result.bestScore}/{result.total}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {lang === 'uz' ? 'Savollar har safar tasodifiy tartibda beriladi' : 'Вопросы перемешиваются случайным образом'}
              </span>
              <button
                type="button"
                onClick={() => startTest(selectedModule)}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-sm shadow-md transition-all hover:scale-105 active:scale-95"
              >
                {lang === 'uz' ? 'Testni boshlash' : 'Начать тестирование'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Active Test Session */}
      {isTestStarted && !isTestFinished && currentQuestions.length > 0 && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>
                {lang === 'uz' ? 'Savol' : 'Вопрос'} {currentQuestionIndex + 1} / {totalQuestions}
              </span>
              <span className="text-teal-600 dark:text-teal-400">
                {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-teal-500 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Current Question */}
          {(() => {
            const currQ = currentQuestions[currentQuestionIndex];
            const currentSelected = selectedAnswers[currentQuestionIndex];

            return (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {lang === 'uz' ? `${currQ.moduleId}-modul testi` : `Тест по модулю ${currQ.moduleId}`}
                  </span>
                  <h3 className="font-black text-lg sm:text-xl text-slate-900 dark:text-slate-100 leading-snug">
                    {lang === 'uz' ? currQ.questionUz : currQ.questionRu}
                  </h3>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 gap-3">
                  {(lang === 'uz' ? currQ.optionsUz : currQ.optionsRu).map((optText, oIdx) => {
                    const isSelected = currentSelected === oIdx;

                    return (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => handleSelectAnswer(oIdx)}
                        className={`text-left p-4 rounded-2xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-teal-500 bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-200 ring-2 ring-teal-400 shadow-sm'
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-teal-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-6 h-6 rounded-lg text-xs flex items-center justify-center font-black ${
                              isSelected
                                ? 'bg-teal-600 text-white'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                            }`}
                          >
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{optText}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={restartTest}
                    className="text-xs font-bold text-slate-400 hover:text-slate-700"
                  >
                    {t.cancel}
                  </button>

                  <button
                    type="button"
                    disabled={currentSelected === undefined}
                    onClick={handleNextQuestion}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-xs sm:text-sm shadow-md disabled:opacity-40 transition-all hover:scale-105 active:scale-95"
                  >
                    <span>
                      {currentQuestionIndex === totalQuestions - 1
                        ? (lang === 'uz' ? 'Natijani ko‘rish' : 'Завершить тест')
                        : t.nextQuestion}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* 3. Test Results & Error Analysis */}
      {isTestFinished && (
        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md text-center space-y-4">
            <MascotXolida
              mood={scorePercent >= 70 ? 'proud' : 'encouraging'}
              size={140}
              className="mx-auto"
            />

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
                {scorePercent >= 70
                  ? (lang === 'uz' ? 'Ajoyib natija! Barakalla!' : 'Отличный результат! Молодцы!')
                  : (lang === 'uz' ? 'Yaxshi urinish, ammo takrorlash zarur!' : 'Хорошая попытка, но стоит повторить тему!')}
              </h2>
              <div className="text-base text-slate-500 mt-1">
                {lang === 'uz' ? 'To‘plangan ball:' : 'Набранный балл:'}{' '}
                <span className="font-black text-teal-600 dark:text-teal-400 text-xl">
                  {correctCount} / {totalQuestions}
                </span>{' '}
                ({scorePercent}%)
              </div>
            </div>

            {/* Recommendations Box */}
            {needsRevisionModules.length > 0 && (
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-left text-xs sm:text-sm space-y-2">
                <div className="font-extrabold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{lang === 'uz' ? 'Xolida ustoz tavsiyasi:' : 'Рекомендация учителя Холиды:'}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  {lang === 'uz'
                    ? 'Ushbu mavzularda xatolar uchradi. Quyidagi darsni qayta ko‘rib chiqishingizni maslahat beraman:'
                    : 'В этих вопросах допущены ошибки. Рекомендуется повторить следующий материал:'}
                </p>
                <div className="space-y-1">
                  {needsRevisionModules.map((mId) => {
                    const l = LESSONS_DATA.find((x) => x.id === mId);
                    if (!l) return null;
                    return (
                      <div key={mId} className="font-bold text-teal-700 dark:text-teal-300 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{lang === 'uz' ? l.titleUz : l.titleRu}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={restartTest}
                className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{lang === 'uz' ? 'Boshqa test tanlash' : 'Выбрать другой тест'}</span>
              </button>
            </div>
          </div>

          {/* Detailed Error Analysis Cards */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
              {lang === 'uz' ? 'Barcha savollar tahlili' : 'Подробный разбор всех вопросов'}
            </h3>

            <div className="space-y-3">
              {currentQuestions.map((q, idx) => {
                const userChoice = selectedAnswers[idx];
                const isUserCorrect = userChoice === q.correctIndex;
                const options = lang === 'uz' ? q.optionsUz : q.optionsRu;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border ${
                      isUserCorrect
                        ? 'bg-emerald-50/30 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60'
                        : 'bg-rose-50/30 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100">
                        {idx + 1}. {lang === 'uz' ? q.questionUz : q.questionRu}
                      </div>
                      {isUserCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </div>

                    <div className="text-xs space-y-1 mb-2">
                      <div className="text-slate-600 dark:text-slate-300">
                        <span className="font-bold">{lang === 'uz' ? 'Sizning javobingiz:' : 'Ваш ответ:'} </span>
                        <span className={isUserCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                          {userChoice !== undefined ? options[userChoice] : '—'}
                        </span>
                      </div>
                      {!isUserCorrect && (
                        <div className="text-emerald-700 dark:text-emerald-400 font-bold">
                          <span>{lang === 'uz' ? 'To‘g‘ri javob:' : 'Правильный ответ:'} </span>
                          <span>{options[q.correctIndex]}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border text-xs text-slate-600 dark:text-slate-300">
                      <span className="font-bold text-teal-700 dark:text-teal-300">
                        {lang === 'uz' ? 'Izoh:' : 'Пояснение:'}{' '}
                      </span>
                      <span>{lang === 'uz' ? q.explanationUz : q.explanationRu}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
