import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Gamepad2,
  CheckCircle2,
  RotateCcw,
  Clock,
  Sparkles,
  Trophy,
  HelpCircle,
  Zap,
} from 'lucide-react';
import { Language, SentencePartType } from '../types';
import { translations } from '../i18n/translations';
import { GAMES_CONTENT } from '../data/games';
import { MascotXolida } from '../components/MascotXolida';
import { fireSuccessConfetti } from '../components/Confetti';

interface GamesPageProps {
  lang: Language;
  onGameComplete: (xpEarned: number) => void;
}

type GameTab = 'word-order' | 'detective' | 'cases-roulette' | 'memory' | 'error-fix' | 'speed-bridge';
type Difficulty = 'easy' | 'medium' | 'hard';

export const GamesPage: React.FC<GamesPageProps> = ({ lang, onGameComplete }) => {
  const t = translations[lang];
  const [searchParams] = useSearchParams();
  const initialGame = (searchParams.get('game') as GameTab) || 'word-order';

  const [activeTab, setActiveTab] = useState<GameTab>(initialGame);
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');

  // Game 1: Word Order state
  const [woIndex, setWoIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [woChecked, setWoChecked] = useState(false);
  const [woIsCorrect, setWoIsCorrect] = useState(false);

  // Game 2: Detective state
  const [detIndex, setDetIndex] = useState(0);
  const [activeRoleTool, setActiveRoleTool] = useState<SentencePartType>('ega');
  const [userAssignedRoles, setUserAssignedRoles] = useState<Record<number, SentencePartType>>({});
  const [detChecked, setDetChecked] = useState(false);

  // Game 3: Case Roulette state
  const [crIndex, setCrIndex] = useState(0);
  const [crSelected, setCrSelected] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  // Game 4: Memory state
  const [memoryFlipped, setMemoryFlipped] = useState<number[]>([]);
  const [memoryMatched, setMemoryMatched] = useState<string[]>([]);
  const [memoryCards, setMemoryCards] = useState<{ id: string; text: string; matchId: string }[]>([]);

  // Game 5: Error Fix state
  const [efIndex, setEfIndex] = useState(0);
  const [efSelected, setEfSelected] = useState<string | null>(null);

  // Game 6: Speed Bridge state
  const [sbIndex, setSbIndex] = useState(0);
  const [sbSelectedWords, setSbSelectedWords] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(25);
  const [sbActive, setSbActive] = useState(false);
  const [sbChecked, setSbChecked] = useState(false);

  // Init memory cards for selected difficulty
  useEffect(() => {
    const memData =
      GAMES_CONTENT.memory.find((m) => m.difficulty === difficulty) || GAMES_CONTENT.memory[0];
    const cards: { id: string; text: string; matchId: string }[] = [];
    memData.pairs.forEach((p, idx) => {
      cards.push({ id: `uz_${idx}`, text: p.uz, matchId: `pair_${idx}` });
      cards.push({ id: `ru_${idx}`, text: p.ru, matchId: `pair_${idx}` });
    });
    // Shuffle
    setMemoryCards(cards.sort(() => Math.random() - 0.5));
    setMemoryFlipped([]);
    setMemoryMatched([]);
  }, [difficulty]);

  // Speed Bridge Timer
  useEffect(() => {
    let timer: any;
    if (activeTab === 'speed-bridge' && sbActive && timeLeft > 0 && !sbChecked) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !sbChecked) {
      setSbChecked(true);
    }
    return () => clearInterval(timer);
  }, [activeTab, sbActive, timeLeft, sbChecked]);

  const gamesList: { id: GameTab; titleUz: string; titleRu: string; badge: string }[] = [
    { id: 'word-order', titleUz: '1. Gap konstruktori', titleRu: '1. Конструктор предложений', badge: 'SOV' },
    { id: 'detective', titleUz: '2. Bo‘lak detektivi', titleRu: '2. Синтаксический детектив', badge: 'Bo‘laklar' },
    { id: 'cases-roulette', titleUz: '3. Kelishik ruleti', titleRu: '3. Падежная рулетка', badge: '6 kelishik' },
    { id: 'memory', titleUz: '4. Juftlik topish', titleRu: '4. Поиск пар', badge: 'Xotira' },
    { id: 'error-fix', titleUz: '5. Xato detektivi', titleRu: '5. Детектив ошибок', badge: 'Kalkani yo‘qotish' },
    { id: 'speed-bridge', titleUz: '6. Tarjima ko‘prigi', titleRu: '6. Скоростной мост', badge: 'Vaqtga qarshi' },
  ];

  // --- Handlers for Game 1 ---
  const currWo =
    GAMES_CONTENT.wordOrder.filter((w) => w.difficulty === difficulty)[woIndex] ||
    GAMES_CONTENT.wordOrder[0];

  const handleWoWordClick = (word: string) => {
    if (woChecked) return;
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleWoCheck = () => {
    const isCorrect = selectedWords.join(' ') === currWo.correctSequence.join(' ');
    setWoChecked(true);
    setWoIsCorrect(isCorrect);
    if (isCorrect) {
      fireSuccessConfetti();
      onGameComplete(20);
    }
  };

  const handleWoReset = () => {
    setSelectedWords([]);
    setWoChecked(false);
    setWoIsCorrect(false);
  };

  // --- Handlers for Game 2 (Detective) ---
  const currDet =
    GAMES_CONTENT.detective.filter((d) => d.difficulty === difficulty)[detIndex] ||
    GAMES_CONTENT.detective[0];

  const handleDetAssign = (wordIndex: number) => {
    if (detChecked) return;
    setUserAssignedRoles((prev) => ({
      ...prev,
      [wordIndex]: activeRoleTool,
    }));
  };

  const handleDetCheck = () => {
    setDetChecked(true);
    const allCorrect = currDet.words.every((w, idx) => userAssignedRoles[idx] === w.targetRole);
    if (allCorrect) {
      fireSuccessConfetti();
      onGameComplete(25);
    }
  };

  // --- Handlers for Game 3 (Case Roulette) ---
  const currCr =
    GAMES_CONTENT.caseRoulette.filter((c) => c.difficulty === difficulty)[crIndex] ||
    GAMES_CONTENT.caseRoulette[0];

  const handleSpinRoulette = () => {
    setIsSpinning(true);
    setCrSelected(null);
    setTimeout(() => {
      setIsSpinning(false);
      const list = GAMES_CONTENT.caseRoulette.filter((c) => c.difficulty === difficulty);
      const nextIdx = (crIndex + 1) % list.length;
      setCrIndex(nextIdx);
    }, 700);
  };

  const handleSelectCaseAnswer = (ans: string) => {
    if (crSelected) return;
    setCrSelected(ans);
    if (ans === currCr.correctAnswer) {
      fireSuccessConfetti();
      onGameComplete(15);
    }
  };

  // --- Handlers for Game 4 (Memory) ---
  const handleMemoryCardClick = (idx: number) => {
    if (memoryFlipped.length === 2 || memoryFlipped.includes(idx)) return;
    const card = memoryCards[idx];
    if (memoryMatched.includes(card.matchId)) return;

    const newFlipped = [...memoryFlipped, idx];
    setMemoryFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const card1 = memoryCards[newFlipped[0]];
      const card2 = memoryCards[newFlipped[1]];
      if (card1.matchId === card2.matchId) {
        setMemoryMatched((prev) => [...prev, card1.matchId]);
        setMemoryFlipped([]);
        if (memoryMatched.length + 1 === memoryCards.length / 2) {
          fireSuccessConfetti();
          onGameComplete(30);
        }
      } else {
        setTimeout(() => {
          setMemoryFlipped([]);
        }, 1000);
      }
    }
  };

  // --- Handlers for Game 5 (Error Fix) ---
  const currEf =
    GAMES_CONTENT.errorFix.filter((e) => e.difficulty === difficulty)[efIndex] ||
    GAMES_CONTENT.errorFix[0];

  const handleSelectEf = (opt: string) => {
    if (efSelected) return;
    setEfSelected(opt);
    if (opt === currEf.correctSentence) {
      fireSuccessConfetti();
      onGameComplete(20);
    }
  };

  // --- Handlers for Game 6 (Speed Bridge) ---
  const currSb =
    GAMES_CONTENT.speedBridge.filter((s) => s.difficulty === difficulty)[sbIndex] ||
    GAMES_CONTENT.speedBridge[0];

  const handleStartSpeedBridge = () => {
    setSbActive(true);
    setSbChecked(false);
    setTimeLeft(currSb.timeLimitSec);
    setSbSelectedWords([]);
  };

  const handleSbWordClick = (w: string) => {
    if (!sbActive || sbChecked) return;
    if (sbSelectedWords.includes(w)) {
      setSbSelectedWords(sbSelectedWords.filter((item) => item !== w));
    } else {
      setSbSelectedWords([...sbSelectedWords, w]);
    }
  };

  const handleSbCheck = () => {
    setSbChecked(true);
    const isCorrect = sbSelectedWords.join(' ') === currSb.correctUzbekSentence;
    if (isCorrect) {
      fireSuccessConfetti();
      onGameComplete(35);
    }
  };

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-700 via-sky-800 to-indigo-900 text-white p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>{lang === 'uz' ? 'Gamifikatsiya maydoni' : 'Игровая площадка'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              {lang === 'uz' ? 'Interaktiv sintaktik o‘yinlar' : 'Интерактивные игры по синтаксису'}
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              {lang === 'uz'
                ? '6 ta qiziqarli o‘yinda ishtirok eting, XP ballar yig‘ing va Xolida ustoz bilan darajangizni oshiring!'
                : 'Играйте в 6 обучающих игр, зарабатывайте XP и повышайте свой уровень мастерства!'}
            </p>
          </div>
          <div className="shrink-0">
            <MascotXolida mood="happy" size={120} />
          </div>
        </div>
      </div>

      {/* Game Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {gamesList.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => {
              setActiveTab(g.id);
              handleWoReset();
              setDetChecked(false);
              setUserAssignedRoles({});
              setCrSelected(null);
              setEfSelected(null);
              setSbActive(false);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs flex items-center gap-2 ${
              activeTab === g.id
                ? 'bg-teal-600 text-white shadow-teal-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-teal-400'
            }`}
          >
            <span>{lang === 'uz' ? g.titleUz : g.titleRu}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-black/20 text-white">
              {g.badge}
            </span>
          </button>
        ))}
      </div>

      {/* Difficulty Switcher */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
          {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => {
                setDifficulty(d);
                handleWoReset();
                setDetChecked(false);
                setUserAssignedRoles({});
                setCrSelected(null);
                setEfSelected(null);
                setSbActive(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors ${
                difficulty === d
                  ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
              }`}
            >
              {d === 'easy' ? t.difficultyEasy : d === 'medium' ? t.difficultyMedium : t.difficultyHard}
            </button>
          ))}
        </div>

        <span className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>+20-35 XP</span>
        </span>
      </div>

      {/* ================= GAME 1: GAP KONSTRUKTORI ================= */}
      {activeTab === 'word-order' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              {lang === 'uz' ? 'Maqsad: SOV (Ega — To‘ldiruvchi — Kesim) tartibida gap tuzing' : 'Цель: Соберите узбекское предложение в порядке SOV'}
            </span>
            <div className="text-lg sm:text-xl font-black text-slate-800 dark:text-slate-100 mt-2">
              «{currWo.russianTarget}»
            </div>
          </div>

          {/* Assembly Slot */}
          <div className="p-5 rounded-2xl bg-teal-50/50 dark:bg-slate-800/50 border-2 border-dashed border-teal-300 dark:border-teal-800 min-h-[90px] flex flex-wrap items-center gap-3">
            {selectedWords.length === 0 ? (
              <span className="text-xs sm:text-sm text-slate-400 italic">
                {lang === 'uz' ? 'Quyidagi so‘zlarni bosing — ular bu yerga teriladi...' : 'Нажимайте на слова внизу, чтобы поставить их в слот...'}
              </span>
            ) : (
              selectedWords.map((word, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleWoWordClick(word)}
                  className="px-4 py-2 rounded-xl bg-teal-600 text-white font-extrabold text-sm sm:text-base shadow-sm hover:bg-teal-700 transition-transform active:scale-95"
                >
                  {word}
                </button>
              ))
            )}
          </div>

          {/* Shuffled Word Pool */}
          <div>
            <div className="text-xs font-bold text-slate-400 mb-2">
              {lang === 'uz' ? 'Mavjud so‘zlar (bosib tanlang):' : 'Доступные слова:'}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {currWo.wordsShuffled.map((word, idx) => {
                const isUsed = selectedWords.includes(word);
                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isUsed || woChecked}
                    onClick={() => handleWoWordClick(word)}
                    className={`px-4 py-2.5 rounded-xl border text-sm font-bold transition-all ${
                      isUsed
                        ? 'opacity-30 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 cursor-not-allowed'
                        : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:border-teal-500 hover:scale-105 active:scale-95'
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions & Result */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleWoReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.restart}</span>
            </button>

            {!woChecked ? (
              <button
                type="button"
                disabled={selectedWords.length !== currWo.correctSequence.length}
                onClick={handleWoCheck}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-sm shadow-md disabled:opacity-40 transition-all hover:scale-105 active:scale-95"
              >
                {t.checkAnswer}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  const list = GAMES_CONTENT.wordOrder.filter((w) => w.difficulty === difficulty);
                  setWoIndex((woIndex + 1) % list.length);
                  handleWoReset();
                }}
                className="px-6 py-2.5 rounded-xl bg-amber-400 text-slate-900 font-black text-sm shadow-md hover:bg-amber-300"
              >
                {t.nextQuestion}
              </button>
            )}
          </div>

          {/* Feedback Explanation */}
          {woChecked && (
            <div
              className={`p-4 rounded-2xl border flex items-start gap-3 animate-fade-in ${
                woIsCorrect
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-900 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 text-rose-900 dark:text-rose-200'
              }`}
            >
              <MascotXolida mood={woIsCorrect ? 'proud' : 'thinking'} size={65} className="shrink-0" />
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="font-black text-sm">
                  {woIsCorrect
                    ? (lang === 'uz' ? 'Ofarin! To‘g‘ri SOV tartibi!' : 'Браво! Идеальный порядок SOV!')
                    : (lang === 'uz' ? 'Xatolik bor! Kesim qayerda turishi kerak edi?' : 'Ошибка! Помните: сказуемое в конце!')}
                </div>
                <p>{lang === 'uz' ? currWo.explanationUz : currWo.explanationRu}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= GAME 2: BO‘LAK DETEKTIVI ================= */}
      {activeTab === 'detective' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              {lang === 'uz' ? 'Sintaktik bo‘yoq cho‘tkasini tanlang va so‘zlarni bo‘yang:' : 'Выберите синтаксическую кисть и раскрасьте слова:'}
            </span>
            <div className="text-base text-slate-600 dark:text-slate-300 mt-1">
              {lang === 'uz' ? 'Gapdagi har bir so‘zning vazifasini aniqlang.' : 'Определите синтаксическую роль каждого слова.'}
            </div>
          </div>

          {/* Role Palette Selector */}
          <div className="flex flex-wrap gap-2">
            {[
              { role: 'ega', label: 'Ega (Подлежащее)', class: 'syntax-ega' },
              { role: 'kesim', label: 'Kesim (Сказуемое)', class: 'syntax-kesim' },
              { role: 'aniqlovchi', label: 'Aniqlovchi (Определение)', class: 'syntax-aniqlovchi' },
              { role: 'toldiruvchi', label: 'To‘ldiruvchi (Дополнение)', class: 'syntax-toldiruvchi' },
              { role: 'hol', label: 'Hol (Обстоятельство)', class: 'syntax-hol' },
            ].map((tool) => (
              <button
                key={tool.role}
                type="button"
                onClick={() => setActiveRoleTool(tool.role as SentencePartType)}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                  activeRoleTool === tool.role
                    ? 'ring-2 ring-teal-500 scale-105 shadow-xs'
                    : 'opacity-70 hover:opacity-100'
                } ${tool.class}`}
              >
                {tool.label}
              </button>
            ))}
          </div>

          {/* Interactive Words */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-3">
            {currDet.words.map((w, idx) => {
              const assigned = userAssignedRoles[idx];
              let wordStyle = 'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800';

              if (assigned === 'ega') wordStyle = 'syntax-ega';
              if (assigned === 'kesim') wordStyle = 'syntax-kesim';
              if (assigned === 'aniqlovchi') wordStyle = 'syntax-aniqlovchi';
              if (assigned === 'toldiruvchi') wordStyle = 'syntax-toldiruvchi';
              if (assigned === 'hol') wordStyle = 'syntax-hol';

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={detChecked}
                  onClick={() => handleDetAssign(idx)}
                  className={`px-4 py-2.5 rounded-xl text-base sm:text-lg font-black transition-all ${wordStyle} hover:scale-105 active:scale-95`}
                >
                  <div className="text-[10px] font-normal text-slate-400 capitalize">
                    {assigned || '?'}
                  </div>
                  <div>{w.text}</div>
                </button>
              );
            })}
          </div>

          {/* Actions & Result */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                setUserAssignedRoles({});
                setDetChecked(false);
              }}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold"
            >
              {t.restart}
            </button>

            {!detChecked ? (
              <button
                type="button"
                onClick={handleDetCheck}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-sm"
              >
                {t.checkAnswer}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  const list = GAMES_CONTENT.detective.filter((d) => d.difficulty === difficulty);
                  setDetIndex((detIndex + 1) % list.length);
                  setUserAssignedRoles({});
                  setDetChecked(false);
                }}
                className="px-6 py-2.5 rounded-xl bg-amber-400 text-slate-900 font-black text-sm"
              >
                {t.nextQuestion}
              </button>
            )}
          </div>

          {detChecked && (
            <div className="p-4 rounded-2xl bg-teal-50 dark:bg-slate-800 border border-teal-200 dark:border-slate-700 flex items-start gap-3">
              <MascotXolida mood="proud" size={65} className="shrink-0" />
              <div className="text-xs sm:text-sm space-y-1">
                <div className="font-bold text-teal-800 dark:text-teal-300">
                  {lang === 'uz' ? 'Tahlil yakuni:' : 'Итог разбора:'}
                </div>
                <p>{lang === 'uz' ? currDet.explanationUz : currDet.explanationRu}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= GAME 3: KELISHIK RULETI ================= */}
      {activeTab === 'cases-roulette' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6 text-center">
          <div className="max-w-md mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              {lang === 'uz' ? 'Kelishik ruletini aylantiring!' : 'Крутите падежную рулетку!'}
            </span>
            <div
              className={`p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-lg sm:text-xl shadow-lg transition-transform ${
                isSpinning ? 'rotate-180 scale-95 duration-700' : 'scale-100'
              }`}
            >
              {lang === 'uz' ? currCr.caseNameUz : currCr.caseNameRu}
            </div>
            <button
              type="button"
              disabled={isSpinning}
              onClick={handleSpinRoulette}
              className="mt-2 px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 shadow-sm"
            >
              {lang === 'uz' ? 'Boshqa kelishikni aylantirish' : 'Крутить рулетку'}
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 max-w-lg mx-auto space-y-4">
            <p className="font-bold text-base text-slate-800 dark:text-slate-100">
              {lang === 'uz' ? currCr.questionTextUz : currCr.questionTextRu}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {currCr.options.map((opt, idx) => {
                const isSelected = crSelected === opt;
                let btnClass = 'border-slate-300 dark:border-slate-700 hover:border-teal-400';
                if (crSelected) {
                  if (opt === currCr.correctAnswer) {
                    btnClass = 'border-emerald-500 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 font-black';
                  } else if (isSelected) {
                    btnClass = 'border-rose-500 bg-rose-100 dark:bg-rose-950 text-rose-800';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={!!crSelected}
                    onClick={() => handleSelectCaseAnswer(opt)}
                    className={`p-3.5 rounded-xl border text-sm sm:text-base font-extrabold transition-all ${btnClass}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {crSelected && (
            <div className="max-w-lg mx-auto p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 text-left text-xs sm:text-sm">
              <span className="font-bold text-amber-900 dark:text-amber-300">
                {lang === 'uz' ? 'Xolida ustoz tushuntirishi:' : 'Объяснение учителя:'}
              </span>
              <p className="mt-1 text-slate-700 dark:text-slate-300">
                {lang === 'uz' ? currCr.explanationUz : currCr.explanationRu}
              </p>
            </div>
          )}
        </div>
      )}

      {/* ================= GAME 4: JUFTLIK TOPISH (MEMORY) ================= */}
      {activeTab === 'memory' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                {lang === 'uz' ? 'O‘zbekcha va ruscha birikmalarni juftlang' : 'Сопоставьте пары карточек'}
              </span>
              <div className="text-xs text-slate-400">
                {memoryMatched.length} / {memoryCards.length / 2} {lang === 'uz' ? 'juftlik topildi' : 'пар найдено'}
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setMemoryFlipped([]);
                setMemoryMatched([]);
                setMemoryCards([...memoryCards].sort(() => Math.random() - 0.5));
              }}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold"
            >
              {t.restart}
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {memoryCards.map((card, idx) => {
              const isFlipped = memoryFlipped.includes(idx);
              const isMatched = memoryMatched.includes(card.matchId);

              return (
                <button
                  key={card.id}
                  type="button"
                  disabled={isMatched}
                  onClick={() => handleMemoryCardClick(idx)}
                  className={`h-24 sm:h-28 p-3 rounded-2xl border text-xs sm:text-sm font-black transition-all flex items-center justify-center text-center select-none ${
                    isMatched
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-400 text-emerald-800 dark:text-emerald-300 opacity-80'
                      : isFlipped
                      ? 'bg-teal-600 text-white border-teal-600 shadow-md scale-102'
                      : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-400 hover:border-teal-400 hover:scale-102 cursor-pointer'
                  }`}
                >
                  {isFlipped || isMatched ? (
                    <span>{card.text}</span>
                  ) : (
                    <Sparkles className="w-5 h-5 text-slate-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= GAME 5: XATO DETEKTIVI ================= */}
      {activeTab === 'error-fix' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              {lang === 'uz' ? 'Xatoni toping va tuzating' : 'Найдите и исправьте типичную ошибку'}
            </span>
            <div className="mt-2 text-xs font-bold px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 inline-block">
              {lang === 'uz' ? currEf.mistakeTypeUz : currEf.mistakeTypeRu}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 text-center">
            <div className="text-xs text-rose-500 font-bold uppercase tracking-wider mb-1">
              {lang === 'uz' ? 'Noto‘g‘ri variant (Kalka):' : 'Ошибочный вариант (Калька):'}
            </div>
            <div className="text-lg sm:text-2xl font-black text-rose-800 dark:text-rose-200 line-through">
              «{currEf.wrongSentence}»
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-400">
              {lang === 'uz' ? 'Qaysi shakl to‘g‘ri o‘zbekcha jumla?' : 'Как звучит правильная фраза?'}
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {currEf.options.map((opt, idx) => {
                const isSelected = efSelected === opt;
                let btnStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-teal-400';

                if (efSelected) {
                  if (opt === currEf.correctSentence) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950 text-rose-800';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={!!efSelected}
                    onClick={() => handleSelectEf(opt)}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm font-bold transition-all ${btnStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {efSelected && (
            <div className="p-4 rounded-2xl bg-teal-50 dark:bg-slate-800 border border-teal-200 dark:border-slate-700 flex items-start gap-3">
              <MascotXolida mood={efSelected === currEf.correctSentence ? 'proud' : 'thinking'} size={65} className="shrink-0" />
              <div className="text-xs sm:text-sm space-y-1">
                <div className="font-bold text-teal-800 dark:text-teal-300">
                  {lang === 'uz' ? 'Xolida ustoz tahlili:' : 'Разбор учителя Холиды:'}
                </div>
                <p>{lang === 'uz' ? currEf.explanationUz : currEf.explanationRu}</p>
                <button
                  type="button"
                  onClick={() => {
                    const list = GAMES_CONTENT.errorFix.filter((e) => e.difficulty === difficulty);
                    setEfIndex((efIndex + 1) % list.length);
                    setEfSelected(null);
                  }}
                  className="mt-2 px-4 py-1.5 rounded-lg bg-teal-600 text-white font-bold text-xs"
                >
                  {t.nextQuestion}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= GAME 6: TARJIMA KO‘PRIGI (SPEED BRIDGE) ================= */}
      {activeTab === 'speed-bridge' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              {lang === 'uz' ? 'Vaqtga qarshi tezkor tarjima ko‘prigi' : 'Скоростной перевод на время'}
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-black">
              <Clock className="w-3.5 h-3.5" />
              <span>{timeLeft} s</span>
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-xs text-slate-400">
              {lang === 'uz' ? 'Ruscha gap:' : 'Русское предложение:'}
            </div>
            <div className="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              «{currSb.russianSentence}»
            </div>
          </div>

          {!sbActive ? (
            <div className="text-center py-6">
              <button
                type="button"
                onClick={handleStartSpeedBridge}
                className="px-8 py-3 rounded-2xl bg-indigo-600 text-white font-black text-sm sm:text-base shadow-lg hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95"
              >
                {lang === 'uz' ? 'Tayyorman! Vaqtni boshlash' : 'Начать раунд с таймером!'}
              </button>
            </div>
          ) : (
            <>
              {/* Assembled slots */}
              <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/50 border-2 border-dashed border-indigo-200 min-h-[80px] flex flex-wrap gap-2 items-center">
                {sbSelectedWords.map((w, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSbWordClick(w)}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs sm:text-sm"
                  >
                    {w}
                  </button>
                ))}
              </div>

              {/* Scrambled word pool */}
              <div className="flex flex-wrap gap-2">
                {currSb.scrambledWords.map((w, idx) => {
                  const used = sbSelectedWords.includes(w);
                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={used || sbChecked}
                      onClick={() => handleSbWordClick(w)}
                      className={`px-3 py-2 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
                        used ? 'opacity-30' : 'bg-white dark:bg-slate-800 hover:border-indigo-400'
                      }`}
                    >
                      {w}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setSbSelectedWords([])}
                  className="px-3 py-1.5 rounded-lg border text-xs font-bold text-slate-500"
                >
                  {t.restart}
                </button>
                {!sbChecked ? (
                  <button
                    type="button"
                    onClick={handleSbCheck}
                    className="px-6 py-2 rounded-xl bg-indigo-600 text-white font-black text-xs sm:text-sm"
                  >
                    {t.checkAnswer}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      const list = GAMES_CONTENT.speedBridge.filter((s) => s.difficulty === difficulty);
                      setSbIndex((sbIndex + 1) % list.length);
                      handleStartSpeedBridge();
                    }}
                    className="px-6 py-2 rounded-xl bg-amber-400 text-slate-900 font-black text-xs sm:text-sm"
                  >
                    {t.nextQuestion}
                  </button>
                )}
              </div>
            </>
          )}

          {sbChecked && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border text-xs sm:text-sm space-y-1">
              <span className="font-bold text-indigo-700 dark:text-indigo-300">
                {lang === 'uz' ? 'To‘g‘ri javob:' : 'Правильный ответ:'}
              </span>
              <p className="font-bold text-slate-900 dark:text-slate-100">{currSb.correctUzbekSentence}</p>
              <p className="text-slate-600 dark:text-slate-400">{lang === 'uz' ? currSb.explanationUz : currSb.explanationRu}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
