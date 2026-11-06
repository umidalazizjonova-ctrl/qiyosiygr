import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Sparkles,
  BookOpen,
  Award,
  Share2,
} from 'lucide-react';
import { Language, UserProgress } from '../types';
import { LESSONS_DATA } from '../data/lessons';
import { SentenceHighlighter } from '../components/SentenceHighlighter';
import { MascotXolida } from '../components/MascotXolida';
import { CultureImage } from '../components/CultureImage';
import { fireSuccessConfetti } from '../components/Confetti';

interface LessonDetailPageProps {
  lang: Language;
  progress: UserProgress;
  onMarkLessonComplete: (slug: string, xpReward?: number) => void;
}

export const LessonDetailPage: React.FC<LessonDetailPageProps> = ({
  lang,
  progress,
  onMarkLessonComplete,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const lessonIndex = LESSONS_DATA.findIndex((l) => l.slug === slug);
  const lesson = LESSONS_DATA[lessonIndex];

  // Mini practice state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showPracticeResult, setShowPracticeResult] = useState<Record<string, boolean>>({});

  if (!lesson) {
    return (
      <div className="text-center py-20 space-y-4">
        <MascotXolida mood="thinking" size={140} className="mx-auto" />
        <h2 className="text-2xl font-bold">
          {lang === 'uz' ? 'Dars topilmadi' : 'Урок не найден'}
        </h2>
        <Link
          to="/darslar"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'uz' ? 'Darslar ro‘yxatiga qaytish' : 'Вернуться к списку'}</span>
        </Link>
      </div>
    );
  }

  const isCompleted = progress.completedLessons.includes(lesson.slug);
  const nextLesson = LESSONS_DATA[lessonIndex + 1];
  const prevLesson = LESSONS_DATA[lessonIndex - 1];

  const handleSelectOption = (practiceId: string, optIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [practiceId]: optIndex }));
    setShowPracticeResult((prev) => ({ ...prev, [practiceId]: true }));
    const opt = lesson.miniPractice.find((p) => p.id === practiceId)?.options[optIndex];
    if (opt?.isCorrect) {
      fireSuccessConfetti();
    }
  };

  const handleCompleteLesson = () => {
    if (!isCompleted) {
      onMarkLessonComplete(lesson.slug, 50);
      fireSuccessConfetti();
    }
  };

  return (
    <article className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Top Breadcrumb & Controls */}
      <div className="flex items-center justify-between gap-2 text-xs">
        <Link
          to="/darslar"
          className="inline-flex items-center gap-1.5 font-bold text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'uz' ? 'Barcha darslar' : 'Все уроки'}</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-extrabold px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
            {lesson.grade}
          </span>
          <span className="font-bold text-slate-400">
            {lesson.estimatedMinutes} {lang === 'uz' ? 'daqiqalik dars' : 'мин.'}
          </span>
        </div>
      </div>

      {/* Lesson Header Banner */}
      <header className="rounded-3xl bg-gradient-to-br from-teal-700 via-teal-800 to-sky-900 text-white p-6 sm:p-10 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'uz' ? `${lesson.id}-modul` : `Модуль ${lesson.id}`}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black leading-tight">
              {lang === 'uz' ? lesson.titleUz : lesson.titleRu}
            </h1>
            <p className="text-sm sm:text-base text-teal-100 max-w-xl">
              {lang === 'uz' ? lesson.subtitleUz : lesson.subtitleRu}
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center">
            <MascotXolida mood={isCompleted ? 'proud' : 'encouraging'} size={130} />
            {isCompleted && (
              <span className="mt-2 text-xs font-extrabold text-amber-300 bg-black/30 px-3 py-1 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'uz' ? 'O‘zlashtirildi' : 'Усвоено'}</span>
              </span>
            )}
          </div>
        </div>
      </header>

      {/* 1. Maqsad (Learning Goals) */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-extrabold text-sm uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>{lang === 'uz' ? 'Dars maqsadi va vazifalari' : 'Цели и задачи урока'}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {lesson.goals.map((goal, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
            >
              <span className="w-5 h-5 rounded-full bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <span>{lang === 'uz' ? goal.uz : goal.ru}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Qisqa ma’ruza (Micro-lecture <= 200 words) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {lang === 'uz' ? 'Nazariy qism (ixcham tushuntirish)' : 'Теоретическая часть (сжатое объяснение)'}
          </span>
          <span className="text-[11px] text-teal-600 dark:text-teal-400 font-bold">
            {lang === 'uz' ? 'Xolida ustoz ma’ruzasi' : 'Микролекция учителя Холиды'}
          </span>
        </div>

        {/* Dual language side-by-side or combined didactic lecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <div className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-2 uppercase">
              O‘zbekcha matn
            </div>
            <p className="text-slate-800 dark:text-slate-200">{lesson.lectureUz}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <div className="text-xs font-bold text-sky-700 dark:text-sky-300 mb-2 uppercase">
              Русский комментарий
            </div>
            <p className="text-slate-700 dark:text-slate-300">{lesson.lectureRu}</p>
          </div>
        </div>
      </section>

      {/* 3. Qiyoslash jadvali (Comparison Table) */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100">
          {lang === 'uz' ? 'Qiyosiy tahlil jadvali' : 'Таблица сравнительного анализа'}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <th className="p-3 font-extrabold text-teal-800 dark:text-teal-300">
                  {lang === 'uz' ? 'O‘zbek tili shakli' : 'Узбекская форма'}
                </th>
                <th className="p-3 font-extrabold text-sky-800 dark:text-sky-300">
                  {lang === 'uz' ? 'Rus tili ekvivalenti' : 'Русский эквивалент'}
                </th>
                <th className="p-3 font-extrabold text-slate-600 dark:text-slate-300">
                  {lang === 'uz' ? 'Qiyosiy izoh' : 'Грамматический комментарий'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {lesson.comparisonTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-teal-50/30 dark:hover:bg-teal-950/20">
                  <td className="p-3 font-bold text-slate-900 dark:text-slate-100">
                    {row.uzbek}
                  </td>
                  <td className="p-3 text-slate-700 dark:text-slate-300">
                    {row.russian}
                  </td>
                  <td className="p-3 text-slate-500 dark:text-slate-400 text-xs">
                    {lang === 'uz' ? row.noteUz : row.noteRu}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Namunaviy misollar (Key Examples with Sentence Highlighter) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100">
            {lang === 'uz' ? 'Namunaviy gap va sintaktik tahlil' : 'Образцовый синтаксический разбор'}
          </h3>
          <span className="text-xs text-slate-400 hidden sm:inline">
            {lang === 'uz' ? 'So‘z ustiga bosing' : 'Нажмите на слово для подсказки'}
          </span>
        </div>

        {lesson.keyExamples.map((ex, eIdx) => (
          <div
            key={eIdx}
            className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 space-y-4"
          >
            {/* Uzbek syntax breakdown */}
            <div>
              <div className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-1">
                O‘zbekcha sintaktik qurilish (SOV):
              </div>
              <SentenceHighlighter tokens={ex.tokensUz} lang={lang} interactive={true} showLegend={true} />
            </div>

            {/* Russian equivalent */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
              <div className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider mb-1">
                Русский синтаксис (SVO):
              </div>
              <SentenceHighlighter tokens={ex.tokensRu} lang={lang} interactive={true} showLegend={false} />
            </div>

            {/* Teacher highlight note */}
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{lang === 'uz' ? ex.highlightNoteUz : ex.highlightNoteRu}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Cultural Card Topic if available */}
      {lesson.culturalTopic && (
        <section className="space-y-3">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
            {lang === 'uz' ? 'Madaniy kontekst' : 'Культурный контекст'}
          </h3>
          <CultureImage
            imageKey={lesson.culturalTopic.imageKey}
            alt={lesson.culturalTopic.titleUz}
            caption={lang === 'uz' ? lesson.culturalTopic.captionUz : lesson.culturalTopic.captionRu}
          />
        </section>
      )}

      {/* 5. «Bilasizmi?» Fakti (Did you know?) */}
      <section className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-200 dark:border-amber-900/60 flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 font-black flex items-center justify-center shrink-0">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="font-extrabold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-300">
            {lang === 'uz' ? 'Bilasizmi?' : 'А знаете ли вы?'}
          </h4>
          <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 leading-relaxed">
            {lang === 'uz' ? lesson.didYouKnowUz : lesson.didYouKnowRu}
          </p>
        </div>
      </section>

      {/* 6. Mini-mashq (Mini Practice) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
              {lang === 'uz' ? 'Mini-mashq: o‘zingizni sinab ko‘ring' : 'Мини-практика: проверьте себя'}
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'uz' ? 'Qoidani amalda qo‘llang' : 'Примените правило на практике'}
            </p>
          </div>
        </div>

        {lesson.miniPractice.map((practice) => {
          const selected = selectedAnswers[practice.id];
          const isAnswered = showPracticeResult[practice.id];

          return (
            <div key={practice.id} className="space-y-3">
              <p className="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100">
                {lang === 'uz' ? practice.questionUz : practice.questionRu}
              </p>

              <div className="grid grid-cols-1 gap-2.5">
                {practice.options.map((opt, oIdx) => {
                  const isThisSelected = selected === oIdx;
                  let btnStyle =
                    'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-teal-400';

                  if (isAnswered) {
                    if (opt.isCorrect) {
                      btnStyle =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-200 font-bold';
                    } else if (isThisSelected && !opt.isCorrect) {
                      btnStyle =
                        'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(practice.id, oIdx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{lang === 'uz' ? opt.textUz : opt.textRu}</span>
                      {isAnswered && opt.isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Teacher Explanation */}
              {isAnswered && (
                <div className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start gap-3 animate-fade-in">
                  <MascotXolida
                    mood={practice.options[selected]?.isCorrect ? 'happy' : 'thinking'}
                    size={60}
                    className="shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-teal-700 dark:text-teal-300">
                      {lang === 'uz' ? 'Xolida ustoz izohi:' : 'Комментарий учителя Холиды:'}
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      {lang === 'uz' ? practice.explanationUz : practice.explanationRu}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 7. Xulosa (Summary) */}
      <section className="p-6 rounded-2xl bg-teal-50 dark:bg-slate-900 border border-teal-200 dark:border-teal-900/60 space-y-3">
        <h4 className="font-extrabold text-sm uppercase tracking-wider text-teal-800 dark:text-teal-300">
          {lang === 'uz' ? 'Dars xulosasi (eng muhim qoidalar)' : 'Итоги урока (ключевые выводы)'}
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {(lang === 'uz' ? lesson.summaryUz : lesson.summaryRu).map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-1.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Complete Button & Bottom Nav */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
        <div>
          {prevLesson ? (
            <Link
              to={`/dars/${prevLesson.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === 'uz' ? 'Oldingi dars' : 'Предыдущий урок'}</span>
            </Link>
          ) : <div />}
        </div>

        <button
          type="button"
          onClick={handleCompleteLesson}
          className={`px-6 py-3 rounded-xl font-black text-sm flex items-center gap-2 transition-all shadow-md ${
            isCompleted
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : 'bg-teal-600 hover:bg-teal-700 text-white hover:scale-105 active:scale-95'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>
            {isCompleted
              ? (lang === 'uz' ? 'Dars yakunlangan (+50 XP olindi)' : 'Урок завершён (+50 XP получено)')
              : (lang === 'uz' ? 'Darsni yakunlash (+50 XP)' : 'Завершить урок (+50 XP)')}
          </span>
        </button>

        <div>
          {nextLesson ? (
            <Link
              to={`/dars/${nextLesson.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
            >
              <span>{lang === 'uz' ? 'Keyingi dars' : 'Следующий урок'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/test"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
            >
              <span>{lang === 'uz' ? 'Yakuniy test' : 'Итоговый тест'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
