import React, { useState } from 'react';

export interface CultureImageProps {
  imageKey: 'registon' | 'buxoro' | 'xiva' | 'non' | 'atlas' | 'anor' | 'dutor' | 'navroz' | string;
  alt: string;
  className?: string;
  caption?: string;
  sourceCredit?: string;
  license?: string;
}

export const CultureImage: React.FC<CultureImageProps> = ({
  imageKey,
  alt,
  className = '',
  caption,
  sourceCredit = 'Wikimedia Commons / Public Domain',
  license = 'CC BY-SA 4.0 / Public Domain',
}) => {
  const [imageError, setImageError] = useState(false);
  const src = `/images/${imageKey}.svg`;

  return (
    <figure className={`overflow-hidden rounded-2xl border border-teal-100 dark:border-teal-900/50 bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 ${className}`}>
      <div className="relative aspect-video w-full bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-slate-800 dark:to-teal-950 flex items-center justify-center overflow-hidden">
        {!imageError ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width={640}
            height={360}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : null}

        {/* Fallback SVG artistic illustration if local image is unavailable or missing */}
        {imageError && (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-br from-teal-700/10 via-amber-500/10 to-emerald-600/15">
            {imageKey === 'registon' && (
              <svg className="w-24 h-24 text-teal-600 dark:text-teal-400" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10 85 H90 V90 H10 Z" />
                <path d="M20 85 V45 C20 30 35 25 50 25 C65 25 80 30 80 45 V85 H70 V48 C70 38 60 35 50 35 C40 35 30 38 30 48 V85 Z" />
                <path d="M40 85 V55 C40 48 45 45 50 45 C55 45 60 48 60 55 V85 Z" fill="#f59e0b" />
                <circle cx="50" cy="18" r="6" fill="#0284c7" />
              </svg>
            )}

            {imageKey === 'non' && (
              <svg className="w-24 h-24 text-amber-600 dark:text-amber-400" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="38" fill="#fef3c7" stroke="#d97706" strokeWidth="6" />
                <circle cx="50" cy="50" r="22" fill="#fde68a" stroke="#b45309" strokeWidth="3" strokeDasharray="4 3" />
                <circle cx="50" cy="50" r="8" fill="#b45309" />
                <circle cx="50" cy="38" r="2.5" fill="#92400e" />
                <circle cx="50" cy="62" r="2.5" fill="#92400e" />
                <circle cx="38" cy="50" r="2.5" fill="#92400e" />
                <circle cx="62" cy="50" r="2.5" fill="#92400e" />
              </svg>
            )}

            {imageKey === 'anor' && (
              <svg className="w-24 h-24 text-rose-600 dark:text-rose-400" viewBox="0 0 100 100" fill="currentColor">
                <path d="M45 15 L50 22 L55 15 L60 22 L65 15 C60 26 50 24 50 28 C50 24 40 26 35 15 Z" fill="#15803d" />
                <circle cx="50" cy="58" r="34" fill="#e11d48" />
                <circle cx="50" cy="58" r="24" fill="#f43f5e" />
                <circle cx="44" cy="52" r="3" fill="#ffffff" opacity="0.6" />
                <circle cx="54" cy="56" r="3" fill="#ffffff" opacity="0.6" />
                <circle cx="48" cy="64" r="3" fill="#ffffff" opacity="0.6" />
              </svg>
            )}

            {imageKey === 'dutor' && (
              <svg className="w-24 h-24 text-amber-700 dark:text-amber-500" viewBox="0 0 100 100" fill="currentColor">
                <rect x="47" y="10" width="6" height="55" rx="3" fill="#78350f" />
                <ellipse cx="50" cy="74" rx="22" ry="18" fill="#92400e" />
                <line x1="49" y1="12" x2="49" y2="76" stroke="#fef3c7" strokeWidth="1.5" />
                <line x1="51" y1="12" x2="51" y2="76" stroke="#fef3c7" strokeWidth="1.5" />
                <circle cx="50" cy="70" r="4" fill="#451a03" />
              </svg>
            )}

            {imageKey === 'atlas' && (
              <svg className="w-24 h-24 text-teal-600 dark:text-teal-400" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="16" fill="#0f766e" />
                <path d="M0 20 Q25 40 50 20 T100 20 V35 Q75 55 50 35 T0 35 Z" fill="#f59e0b" />
                <path d="M0 45 Q25 65 50 45 T100 45 V60 Q75 80 50 60 T0 60 Z" fill="#e11d48" />
                <path d="M0 70 Q25 90 50 70 T100 70 V85 Q75 105 50 85 T0 85 Z" fill="#38bdf8" />
              </svg>
            )}

            {(!['registon', 'non', 'anor', 'dutor', 'atlas'].includes(imageKey)) && (
              <svg className="w-24 h-24 text-teal-600 dark:text-teal-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="50" cy="50" r="40" strokeDasharray="6 4" />
                <path d="M30 65 L50 35 L70 65 Z" fill="#0d9488" opacity="0.3" />
                <circle cx="50" cy="30" r="5" fill="#f59e0b" />
              </svg>
            )}

            <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-300">
              {alt}
            </span>
          </div>
        )}
      </div>

      {(caption || sourceCredit) && (
        <figcaption className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-slate-500 dark:text-slate-400">
          <span>{caption || alt}</span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">
            {sourceCredit} ({license})
          </span>
        </figcaption>
      )}
    </figure>
  );
};
