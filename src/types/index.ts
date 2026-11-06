export type Language = 'uz' | 'ru';
export type Theme = 'light' | 'dark' | 'system';

export type SentencePartType = 'ega' | 'kesim' | 'toldiruvchi' | 'aniqlovchi' | 'hol';

export interface SentenceToken {
  text: string;
  part?: SentencePartType;
  explanationUz?: string;
  explanationRu?: string;
  roleUz?: string;
  roleRu?: string;
}

export interface LessonGoal {
  uz: string;
  ru: string;
}

export interface ComparisonRow {
  uzbek: string;
  russian: string;
  noteUz: string;
  noteRu: string;
}

export interface MiniPracticeItem {
  id: string;
  questionUz: string;
  questionRu: string;
  options: {
    textUz: string;
    textRu: string;
    isCorrect: boolean;
  }[];
  explanationUz: string;
  explanationRu: string;
}

export interface LessonModule {
  id: number;
  slug: string;
  titleUz: string;
  titleRu: string;
  subtitleUz: string;
  subtitleRu: string;
  grade: string; // e.g. "5–7-sinf"
  estimatedMinutes: number;
  goals: LessonGoal[];
  lectureUz: string; // max ~200 words, crisp and didactic
  lectureRu: string;
  comparisonTable: ComparisonRow[];
  keyExamples: {
    uz: string;
    ru: string;
    tokensUz: SentenceToken[];
    tokensRu: SentenceToken[];
    highlightNoteUz: string;
    highlightNoteRu: string;
  }[];
  didYouKnowUz: string;
  didYouKnowRu: string;
  miniPractice: MiniPracticeItem[];
  summaryUz: string[];
  summaryRu: string[];
  culturalTopic?: {
    imageKey: string;
    titleUz: string;
    titleRu: string;
    captionUz: string;
    captionRu: string;
  };
}

export interface BridgeItem {
  id: string;
  category: string;
  categoryUz: string;
  categoryRu: string;
  uzbekSentence: {
    words: { id: string; text: string; role: SentencePartType; roleLabelUz: string; roleLabelRu: string }[];
  };
  russianSentence: {
    words: { id: string; text: string; role: SentencePartType; roleLabelUz: string; roleLabelRu: string }[];
  };
  connections: { uzWordId: string; ruWordId: string; relationNameUz: string; relationNameRu: string }[];
  ruleTipUz: string;
  ruleTipRu: string;
  commonErrorUz: string;
  commonErrorRu: string;
}

export interface GameItem {
  id: string;
  type: 'word-order' | 'detective' | 'cases-roulette' | 'memory' | 'error-fix' | 'speed-bridge';
  difficulty: 'easy' | 'medium' | 'hard';
  promptUz: string;
  promptRu: string;
  payload: any;
  correctExplanationUz: string;
  correctExplanationRu: string;
  xpReward: number;
}

export type ExerciseType =
  | 'fill-blank'
  | 'choice'
  | 'matching'
  | 'sentence-builder'
  | 'find-error'
  | 'translate'
  | 'part-detector'
  | 'true-false';

export interface ExerciseItem {
  id: string;
  moduleId: number;
  type: ExerciseType;
  difficulty: 'easy' | 'medium' | 'hard';
  instructionUz: string;
  instructionRu: string;
  questionUz: string;
  questionRu: string;
  options?: string[];
  optionsRu?: string[];
  pairs?: { left: string; right: string }[]; // for matching
  correctAnswer: string | string[]; // can be exact string, array of ordered tokens, or index
  teacherTipUz: string;
  teacherTipRu: string;
  culturalImageKey?: string;
}

export interface TestQuestion {
  id: string;
  moduleId: number;
  difficulty: 'easy' | 'medium' | 'hard';
  questionUz: string;
  questionRu: string;
  optionsUz: string[];
  optionsRu: string[];
  correctIndex: number;
  explanationUz: string;
  explanationRu: string;
}

export interface DictionaryEntry {
  id: string;
  uzbek: string;
  russian: string;
  category: 'kelishik' | 'birikma' | 'bolak' | 'soxta-dost' | 'boshqaruv' | 'yuklama';
  categoryUz: string;
  categoryRu: string;
  exampleUz: string;
  exampleRu: string;
  tipUz: string;
  tipRu: string;
}

export interface FactItem {
  id: string;
  titleUz: string;
  titleRu: string;
  contentUz: string;
  contentRu: string;
  category: string;
  source: string;
  imageKey?: string;
}

export interface TextbookResource {
  id: string;
  grade: string;
  title: string;
  authors: string;
  year: string;
  publisher: string;
  approvedBy: string;
  officialLink?: string;
  noteUz: string;
  noteRu: string;
}

export interface Badge {
  id: string;
  titleUz: string;
  titleRu: string;
  descUz: string;
  descRu: string;
  icon: string;
  unlockedAt?: string;
  category: 'lesson' | 'game' | 'test' | 'streak' | 'mastery';
  condition: (stats: UserProgress) => boolean;
}

export interface UserProgress {
  xp: number;
  completedLessons: string[]; // slug array
  completedExercises: string[]; // exercise id array
  completedTests: Record<number, { bestScore: number; total: number; timestamp: string }>; // moduleId -> stats
  playedGamesCount: number;
  streakDays: number;
  lastActiveDate: string; // YYYY-MM-DD
  unlockedBadges: string[]; // badge id array
  dailyQuestCompleted: boolean;
  dailyQuestDate: string;
  savedWorksheetIds?: string[];
}
