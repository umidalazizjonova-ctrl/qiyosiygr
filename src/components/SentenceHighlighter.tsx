import React, { useState } from 'react';
import { SentencePartType, SentenceToken, Language } from '../types';

interface SentenceHighlighterProps {
  tokens: SentenceToken[];
  lang?: Language;
  showLegend?: boolean;
  interactive?: boolean;
  className?: string;
}

export const SentenceHighlighter: React.FC<SentenceHighlighterProps> = ({
  tokens,
  lang = 'uz',
  showLegend = false,
  interactive = true,
  className = '',
}) => {
  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number | null>(null);

  const getPartClass = (part?: SentencePartType) => {
    switch (part) {
      case 'ega':
        return 'syntax-ega';
      case 'kesim':
        return 'syntax-kesim';
      case 'toldiruvchi':
        return 'syntax-toldiruvchi';
      case 'aniqlovchi':
        return 'syntax-aniqlovchi';
      case 'hol':
        return 'syntax-hol';
      default:
        return 'text-slate-800 dark:text-slate-200';
    }
  };

  const getRoleLabel = (part?: SentencePartType) => {
    if (!part) return '';
    if (lang === 'uz') {
      switch (part) {
        case 'ega':
          return 'Ega (kim? nima?)';
        case 'kesim':
          return 'Kesim (nima qildi?)';
        case 'toldiruvchi':
          return 'To‘ldiruvchi (kimni? nimani? kimga?)';
        case 'aniqlovchi':
          return 'Aniqlovchi (qanday? qaysi? kimning?)';
        case 'hol':
          return 'Hol (qayerda? qachon? qanday?)';
      }
    } else {
      switch (part) {
        case 'ega':
          return 'Подлежащее (кто? что?)';
        case 'kesim':
          return 'Сказуемое (что делает?)';
        case 'toldiruvchi':
          return 'Дополнение (кого? что? кому?)';
        case 'aniqlovchi':
          return 'Определение (какой? чей?)';
        case 'hol':
          return 'Обстоятельство (где? когда? как?)';
      }
    }
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Tokens display */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3 text-lg sm:text-xl leading-relaxed py-2">
        {tokens.map((token, idx) => {
          const isSelected = selectedTokenIndex === idx;
          const partClass = getPartClass(token.part);

          return (
            <div key={idx} className="relative group inline-block">
              <button
                type="button"
                onClick={() => {
                  if (!interactive || !token.part) return;
                  setSelectedTokenIndex(isSelected ? null : idx);
                }}
                className={`transition-all duration-200 text-left outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded ${partClass} ${
                  interactive && token.part
                    ? 'cursor-pointer hover:scale-105 active:scale-95'
                    : 'cursor-default'
                }`}
                title={token.part ? getRoleLabel(token.part) : undefined}
                aria-label={`${token.text} - ${token.part ? getRoleLabel(token.part) : 'Oddiy so‘z'}`}
              >
                {token.text}
              </button>

              {/* Hover or click info tooltip */}
              {interactive && token.part && isSelected && (
                <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-56 p-2.5 rounded-xl bg-slate-900 text-white text-xs shadow-xl animate-fade-in border border-slate-700">
                  <div className="font-bold text-amber-300 mb-1 flex items-center justify-between">
                    <span>{getRoleLabel(token.part)}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTokenIndex(null);
                      }}
                      className="text-slate-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-slate-300 leading-snug">
                    {lang === 'uz'
                      ? token.explanationUz || 'Gapning mustaqil sintaktik bo‘lagi'
                      : token.explanationRu || 'Самостоятельный синтаксический член предложения'}
                  </p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Optional Syntax Legend */}
      {showLegend && (
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2 sm:gap-4 text-xs select-none">
          <div className="flex items-center gap-1.5">
            <span className="syntax-ega text-xs py-0.5">Ega / Подлежащее</span>
            <span className="text-slate-400">(__)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="syntax-kesim text-xs py-0.5">Kesim / Сказуемое</span>
            <span className="text-slate-400">(====)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="syntax-aniqlovchi text-xs py-0.5">Aniqlovchi / Определение</span>
            <span className="text-slate-400">(~~~~)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="syntax-toldiruvchi text-xs py-0.5">To‘ldiruvchi / Дополнение</span>
            <span className="text-slate-400">(- - -)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="syntax-hol text-xs py-0.5">Hol / Обстоятельство</span>
            <span className="text-slate-400">(- · -)</span>
          </div>
        </div>
      )}
    </div>
  );
};
