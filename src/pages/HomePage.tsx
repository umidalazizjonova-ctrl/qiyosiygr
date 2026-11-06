import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowLeftRight,
  Gamepad2,
  CheckSquare,
  FileQuestion,
  Flame,
  Award,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { MascotXolida } from '../components/MascotXolida';
import { CultureImage } from '../components/CultureImage';
import { Language, UserProgress } from '../types';
import { translations } from '../i18n/translations';
import { LESSONS_DATA } from '../data/lessons';
import { fireSuccessConfetti } from '../components/Confetti';

interface HomePageProps {
  lang: Language;
  progress: UserProgress;
  onCompleteDailyQuest: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  progress,
  onCompleteDailyQuest,
}) => {
  const t = translations[lang];

  // Current Level
  const currentLevel = [...t.levels]
    .reverse()
    .find((lvl) => progress.xp >= lvl.minXp) || t.levels[0];

  const featuredGames = [
    {
      id: 'word-order',
      titleUz: 'Gap konstruktori',
      titleRu: 'Конструктор предложений',
      descUz: 'So‘zlarni sudrab to‘g‘ri SOV tartibida terish',
      descRu: 'Сборка правильного порядка слов (SOV)',
      color: 'from-teal-500 to-emerald-600',
      badge: 'SOV',
    },
    {
      id: 'detective',
      titleUz: 'Bo‘lak detektivi',
      titleRu: 'Синтаксический детектив',
      descUz: 'Ega, kesim va ikkinchi darajali bo‘laklarni topish',
      descRu: 'Определение членов предложения по цветам',
      color: 'from-sky-500 to-indigo-600',
      badge: 'Tahlil',
    },
    {
      id: 'cases-roulette',
      titleUz: 'Kelishik ruleti',
      titleRu: 'Падежная рулетка',
      descUz: '6 ta kelishik qo‘shimchasini chaqqon topish',
      descRu: 'Быстрый подбор 6 падежных окончаний',
      color: 'from-amber-500 to-orange-600',
      badge: 'Kelishik',
    },
    {
      id: 'error-fix',
      titleUz: 'Xato detektivi',
      titleRu: 'Детектив ошибок',
      descUz: 'Rusiyzabonlarga xos tipik xatolarni tuzatish',
      descRu: 'Устранение типичных ошибок и калек',
      color: 'from-rose-500 to-pink-600',
      badge: 'Kalka yo‘q',
    },
  ];

  const handleClaimDailyQuest = () => {
    if (!progress.dailyQuestCompleted) {
      onCompleteDailyQuest();
      fireSuccessConfetti();
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 via-teal-700 to-sky-800 text-white p-6 sm:p-10 shadow-xl shadow-teal-900/10">
        {/* Subtle decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>5–9-sinflar uchun qiyosiy sintaksis</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {lang === 'uz' ? (
                <>
                  Xolida ustoz bilan <br />
                  <span className="text-amber-300">o‘zbek tilini</span> o‘rganamiz!
                </>
              ) : (
                <>
                  Изучаем узбекский язык <br />
                  <span className="text-amber-300">с учителем Холидой!</span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-teal-100 max-w-xl leading-relaxed">
              {lang === 'uz'
                ? 'Zerikarli qoidalar o‘rniga o‘yinlar, jonli qiyoslash va interaktiv mashqlar orqali so‘z birikmasi hamda gap tuzilishini oson o‘rganing.'
                : 'Без скучной зубрежки: сравнительный синтаксис узбекского и русского языков через увлекательные игры, наглядные схемы и устранение типичных ошибок.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link
                to="/darslar"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 text-slate-900 font-extrabold text-sm shadow-md hover:bg-amber-300 transition-all hover:scale-105 active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.startLearning}</span>
              </Link>
              <Link
                to="/qiyoslash"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm backdrop-blur-sm transition-all"
              >
                <ArrowLeftRight className="w-4 h-4" />
                <span>{t.navBridge}</span>
              </Link>
            </div>
          </div>

          {/* Friendly Mascot Presentation */}
          <div className="flex flex-col items-center shrink-0">
            <div className="relative p-3 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <MascotXolida mood="waving" size={170} />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[11px] font-black px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                {lang === 'uz' ? 'Xolida ustoz' : 'Учитель Холида'}
              </div>
            </div>
            <p className="text-xs text-teal-200 mt-4 italic max-w-xs text-center">
              «{lang === 'uz' ? t.mascotHello : t.mascotHello}»
            </p>
          </div>
        </div>
      </section>

      {/* Progress & Daily Mission Bar */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Level card */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t.levelLabel}</span>
            <div className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100">
              {currentLevel.title}
            </div>
            <div className="text-xs text-teal-600 dark:text-teal-400 font-bold">{progress.xp} XP</div>
          </div>
        </div>

        {/* Streak card */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 fill-amber-500" />
          </div>
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t.streakLabel}</span>
            <div className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100">
              {progress.streakDays} {lang === 'uz' ? 'kun' : 'дня'}
            </div>
            <div className="text-xs text-amber-600 dark:text-amber-400 font-bold">
              {lang === 'uz' ? 'A’lo odat!' : 'Отличный темп!'}
            </div>
          </div>
        </div>

        {/* Lessons done */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t.lessonsCompleted}</span>
            <div className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100">
              {progress.completedLessons.length} / 10
            </div>
            <div className="text-xs text-sky-600 dark:text-sky-400 font-bold">
              {Math.round((progress.completedLessons.length / 10) * 100)}% {lang === 'uz' ? 'bajarildi' : 'пройдено'}
            </div>
          </div>
        </div>

        {/* Daily Mission Claim */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              {t.dailyMission}
            </span>
            {progress.dailyQuestCompleted ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            ) : (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 font-bold">
                +50 XP
              </span>
            )}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug my-1">
            {progress.dailyQuestCompleted ? t.dailyMissionDone : t.dailyMissionDesc}
          </p>
          {!progress.dailyQuestCompleted && (
            <button
              type="button"
              onClick={handleClaimDailyQuest}
              className="mt-1 w-full py-1 text-xs font-bold rounded-lg bg-teal-600 hover:bg-teal-700 text-white transition-colors"
            >
              {lang === 'uz' ? 'Vazifani tasdiqlash' : 'Получить бонус'}
            </button>
          )}
        </div>
      </section>

      {/* Featured Educational Games */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              {lang === 'uz' ? 'Interaktiv sintaksis o‘yinlari' : 'Интерактивные игры по синтаксису'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {lang === 'uz'
                ? 'Qoidalarni zerikmasdan, ekranda o‘ynab mustahkamlang'
                : 'Закрепляйте правила в игре с мгновенной обратной связью'}
            </p>
          </div>
          <Link
            to="/oyinlar"
            className="text-xs sm:text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
          >
            <span>{lang === 'uz' ? 'Barcha 6 ta o‘yin' : 'Все 6 игр'}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredGames.map((game) => (
            <Link
              key={game.id}
              to={`/oyinlar?game=${game.id}`}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-teal-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${game.color} text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}
                  >
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {game.badge}
                  </span>
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {lang === 'uz' ? game.titleUz : game.titleRu}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {lang === 'uz' ? game.descUz : game.descRu}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
                <span>{lang === 'uz' ? 'O‘ynash' : 'Играть'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Module Curriculum Roadmap */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              {lang === 'uz' ? '10 ta dars moduli' : '10 учебных модулей'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {lang === 'uz'
                ? 'Oddiy so‘z birikmasidan murakkab qo‘shma gaplargacha qadamma-qadam'
                : 'От простого словосочетания до сложных синтаксических конструкций'}
            </p>
          </div>
          <Link
            to="/darslar"
            className="text-xs sm:text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
          >
            <span>{lang === 'uz' ? 'Batafsil ko‘rish' : 'Смотреть все'}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LESSONS_DATA.slice(0, 4).map((lesson) => {
            const isDone = progress.completedLessons.includes(lesson.slug);
            return (
              <Link
                key={lesson.id}
                to={`/dars/${lesson.slug}`}
                className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-teal-400 transition-all flex items-start gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-black text-base transition-colors ${
                    isDone
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                      : 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 group-hover:bg-teal-600 group-hover:text-white'
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-6 h-6" /> : lesson.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {lesson.grade}
                    </span>
                    <span className="text-xs text-slate-400">
                      {lesson.estimatedMinutes} {lang === 'uz' ? 'daq.' : 'мин.'}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 truncate group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {lang === 'uz' ? lesson.titleUz : lesson.titleRu}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                    {lang === 'uz' ? lesson.subtitleUz : lesson.subtitleRu}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Cultural & Pedagogical Bridge teaser */}
      <section className="rounded-3xl bg-teal-50 dark:bg-slate-900/80 border border-teal-100 dark:border-slate-800 p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              {lang === 'uz' ? 'Madaniy kontekst bilan o‘rganish' : 'Язык в культурном контексте'}
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
              {lang === 'uz'
                ? 'Har bir gap ortida boy milliy meros va jonli nutq bor'
                : 'За каждым синтаксическим правилом — живая культура и традиции'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === 'uz'
                ? 'Tandir noni («issiq non»), Registon maydoni («Registonga bormoq»), dutor («dutor chalmoq») va milliy xonatlas orqali o‘zbek tilining nafisligini his eting.'
                : 'Постигайте узбекский синтаксис через реальные культурные образы: лепёшки из тандыра, площадь Регистан, звуки дутара и шёлковый хан-атлас.'}
            </p>
            <div className="pt-2 flex gap-3">
              <Link
                to="/qiyoslash"
                className="px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs sm:text-sm hover:bg-teal-700 transition-colors shadow-xs"
              >
                {lang === 'uz' ? '«Ko‘prik» panelini ochish' : 'Открыть панель «Мост»'}
              </Link>
              <Link
                to="/faktlar"
                className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-colors"
              >
                {lang === 'uz' ? 'Qiziqarli faktlar' : 'Интересные факты'}
              </Link>
            </div>
          </div>
          <div>
            <CultureImage
              imageKey="registon"
              alt="Registon maydoni"
              caption={lang === 'uz' ? 'Samarqand: Registon maydoni' : 'Самарканд: Площадь Регистан'}
              sourceCredit="Wikimedia Commons / Public Domain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
