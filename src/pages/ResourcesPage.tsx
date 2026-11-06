import React from 'react';
import { BookmarkCheck, ExternalLink, ShieldCheck, AlertCircle, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { OFFICIAL_TEXTBOOKS, EDUCATIONAL_PORTALS } from '../data/resources';
import { MascotXolida } from '../components/MascotXolida';

interface ResourcesPageProps {
  lang: Language;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-700 via-sky-800 to-indigo-900 text-white p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <BookmarkCheck className="w-3.5 h-3.5" />
              <span>{lang === 'uz' ? 'Rasmiy ta’lim manbalari' : 'Официальные образовательные ресурсы'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              {lang === 'uz' ? 'Darsliklar va rasmiy portallar' : 'Учебники и образовательные порталы'}
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              {lang === 'uz'
                ? 'Rus tilida o‘qitiladigan umumta’lim maktablari uchun tasdiqlangan darsliklar shabloni va ta’lim portallari.'
                : 'Шаблоны официальных учебников узбекского языка и ссылки на государственные образовательные платформы.'}
            </p>
          </div>
          <div className="shrink-0">
            <MascotXolida mood="encouraging" size={120} />
          </div>
        </div>
      </div>

      {/* Teacher Instruction Note */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-3 text-xs sm:text-sm">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-extrabold text-amber-900 dark:text-amber-200 uppercase tracking-wide">
            {lang === 'uz' ? 'O‘qituvchilar va metodistlar diqqatiga:' : 'Вниманию преподавателей и методистов:'}
          </span>
          <p className="text-amber-950 dark:text-amber-100 leading-relaxed">
            {lang === 'uz'
              ? 'Darsliklar bo‘yicha aniq ma’lumotlarni uydirmaslik talabiga binoan, mualliflar tarkibi, nashr yili va nashriyot maydonlari shablon sifatida qoldirilgan. O‘qituvchi o‘z maktabida amalda qo‘llanilayotgan tasdiqlangan darslik ma’lumotlarini /src/data/resources.ts fayliga kiritishi lozim.'
              : 'В строгом соответствии с требованием не выдумывать данные об учебниках, поля авторов и годов оставлены в виде методического шаблона. Учитель может внести актуальные реквизиты используемых в школе изданий в файл /src/data/resources.ts.'}
          </p>
        </div>
      </div>

      {/* 1. Official Textbooks by Grades */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-teal-600" />
          <span>{lang === 'uz' ? '5–9-sinflar uchun «O‘zbek tili» darsliklari' : 'Учебники «Узбекский язык» для 5–9 классов'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OFFICIAL_TEXTBOOKS.map((tb) => (
            <div
              key={tb.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  {tb.grade}
                </span>
                <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>DTS tasdiqlagan</span>
                </span>
              </div>

              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                {tb.title}
              </h3>

              <div className="text-xs space-y-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-800 dark:text-slate-200">{lang === 'uz' ? 'Mualliflar:' : 'Авторы:'}</strong>{' '}
                  <span className="italic text-slate-500">{tb.authors}</span>
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-800 dark:text-slate-200">{lang === 'uz' ? 'Nashr yili:' : 'Год издания:'}</strong>{' '}
                  <span className="italic text-slate-500">{tb.year}</span>
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-800 dark:text-slate-200">{lang === 'uz' ? 'Tasdiqlagan:' : 'Утверждено:'}</strong>{' '}
                  <span>{tb.approvedBy}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                {lang === 'uz' ? tb.noteUz : tb.noteRu}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Official Educational Portals */}
      <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-sky-600" />
          <span>{lang === 'uz' ? 'Rasmiy ta’lim tarmoqlari va portallari' : 'Официальные образовательные платформы'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EDUCATIONAL_PORTALS.map((portal, idx) => (
            <a
              key={idx}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    {portal.badge}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {portal.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {lang === 'uz' ? portal.descUz : portal.descRu}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-sky-600 dark:text-sky-400">
                {portal.url.replace('https://', '')}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
