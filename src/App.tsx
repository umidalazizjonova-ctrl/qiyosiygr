import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStorage } from './hooks/useStorage';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';

// Lazy-loaded pages for top Lighthouse performance
const HomePage = lazy(() =>
  import('./pages/HomePage').then((m) => ({ default: m.HomePage }))
);
const LessonsPage = lazy(() =>
  import('./pages/LessonsPage').then((m) => ({ default: m.LessonsPage }))
);
const LessonDetailPage = lazy(() =>
  import('./pages/LessonDetailPage').then((m) => ({ default: m.LessonDetailPage }))
);
const ComparisonPage = lazy(() =>
  import('./pages/ComparisonPage').then((m) => ({ default: m.ComparisonPage }))
);
const GamesPage = lazy(() =>
  import('./pages/GamesPage').then((m) => ({ default: m.GamesPage }))
);
const ExercisesPage = lazy(() =>
  import('./pages/ExercisesPage').then((m) => ({ default: m.ExercisesPage }))
);
const TestsPage = lazy(() =>
  import('./pages/TestsPage').then((m) => ({ default: m.TestsPage }))
);
const DictionaryPage = lazy(() =>
  import('./pages/DictionaryPage').then((m) => ({ default: m.DictionaryPage }))
);
const FactsPage = lazy(() =>
  import('./pages/FactsPage').then((m) => ({ default: m.FactsPage }))
);
const ResourcesPage = lazy(() =>
  import('./pages/ResourcesPage').then((m) => ({ default: m.ResourcesPage }))
);
const ProfilePage = lazy(() =>
  import('./pages/ProfilePage').then((m) => ({ default: m.ProfilePage }))
);
const TeacherPage = lazy(() =>
  import('./pages/TeacherPage').then((m) => ({ default: m.TeacherPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

export default function App() {
  const {
    lang,
    setLang,
    theme,
    setTheme,
    progress,
    awardXP,
    markLessonComplete,
    recordExerciseComplete,
    recordTestResult,
    incrementGameCount,
    completeDailyQuest,
    resetProgress,
  } = useStorage();

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
        {/* Top Navbar */}
        <Navbar
          lang={lang}
          onLangChange={setLang}
          theme={theme}
          onThemeChange={setTheme}
          progress={progress}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-20 lg:pb-12">
          <Suspense
            fallback={
              <div className="min-h-[40vh] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin" />
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    lang={lang}
                    progress={progress}
                    onCompleteDailyQuest={completeDailyQuest}
                  />
                }
              />
              <Route
                path="/darslar"
                element={<LessonsPage lang={lang} progress={progress} />}
              />
              <Route
                path="/dars/:slug"
                element={
                  <LessonDetailPage
                    lang={lang}
                    progress={progress}
                    onMarkLessonComplete={markLessonComplete}
                  />
                }
              />
              <Route
                path="/qiyoslash"
                element={<ComparisonPage lang={lang} />}
              />
              <Route
                path="/oyinlar"
                element={
                  <GamesPage
                    lang={lang}
                    onGameComplete={(xp) => incrementGameCount(xp)}
                  />
                }
              />
              <Route
                path="/mashqlar"
                element={
                  <ExercisesPage
                    lang={lang}
                    progress={progress}
                    onRecordExerciseComplete={recordExerciseComplete}
                  />
                }
              />
              <Route
                path="/test"
                element={
                  <TestsPage
                    lang={lang}
                    progress={progress}
                    onRecordTestResult={recordTestResult}
                  />
                }
              />
              <Route
                path="/lugat"
                element={<DictionaryPage lang={lang} />}
              />
              <Route
                path="/faktlar"
                element={<FactsPage lang={lang} />}
              />
              <Route
                path="/darsliklar"
                element={<ResourcesPage lang={lang} />}
              />
              <Route
                path="/profil"
                element={
                  <ProfilePage
                    lang={lang}
                    onLangChange={setLang}
                    theme={theme}
                    onThemeChange={setTheme}
                    progress={progress}
                    onResetProgress={resetProgress}
                  />
                }
              />
              <Route
                path="/ustoz"
                element={<TeacherPage lang={lang} />}
              />
              <Route
                path="*"
                element={<NotFoundPage lang={lang} />}
              />
            </Routes>
          </Suspense>
        </main>

        {/* Mobile Bottom Navigation */}
        <BottomNav lang={lang} />

        {/* Global Footer */}
        <Footer lang={lang} />
      </div>
    </BrowserRouter>
  );
}
