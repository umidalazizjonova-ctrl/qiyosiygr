import React from 'react';

export type MascotMood = 'happy' | 'thinking' | 'proud' | 'encouraging' | 'waving';

interface MascotProps {
  mood?: MascotMood;
  className?: string;
  size?: number;
}

export const MascotXolida: React.FC<MascotProps> = ({
  mood = 'happy',
  className = '',
  size = 120,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-transform duration-300 ${className}`}
      aria-label="Xolida ustoz qahramoni"
    >
      <defs>
        <linearGradient id="bgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d9488" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="scarfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#115e59" />
        </linearGradient>
        <linearGradient id="coatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
      </defs>

      {/* Gentle background badge circle */}
      <circle cx="80" cy="80" r="76" fill="url(#bgGlow)" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />

      {/* Body / Shoulders */}
      <path
        d="M32 152 C32 120, 52 108, 80 108 C108 108, 128 120, 128 152 Z"
        fill="url(#coatGrad)"
      />

      {/* Atlas collar accent (traditional Uzbek subtle geometric pattern) */}
      <path
        d="M66 112 L80 134 L94 112 Z"
        fill="#f59e0b"
      />
      <path
        d="M72 118 L80 130 L88 118 Z"
        fill="#e11d48"
      />

      {/* Scarf / Hijab wrap around shoulders and head */}
      <path
        d="M44 80 C40 100, 50 120, 68 126 L92 126 C110 120, 120 100, 116 80 C118 50, 112 36, 80 34 C48 36, 42 50, 44 80 Z"
        fill="url(#scarfGrad)"
      />

      {/* Face */}
      <ellipse cx="80" cy="74" rx="28" ry="30" fill="url(#skinGrad)" />

      {/* Inner hair hairline fringe */}
      <path
        d="M56 64 C64 56, 75 54, 80 58 C85 54, 96 56, 104 64 C100 52, 90 48, 80 48 C70 48, 60 52, 56 64 Z"
        fill="#3f2e24"
      />

      {/* Friendly Round Eyeglasses */}
      <circle cx="68" cy="72" r="9" stroke="#92400e" strokeWidth="2" fill="#ffffff" fillOpacity="0.25" />
      <circle cx="92" cy="72" r="9" stroke="#92400e" strokeWidth="2" fill="#ffffff" fillOpacity="0.25" />
      <line x1="77" y1="72" x2="83" y2="72" stroke="#92400e" strokeWidth="2" />

      {/* Eyebrows based on mood */}
      {mood === 'thinking' ? (
        <>
          <path d="M60 62 Q68 58 74 62" stroke="#522e1b" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M86 60 Q92 56 100 58" stroke="#522e1b" strokeWidth="2" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          <path d="M62 61 Q68 58 74 61" stroke="#522e1b" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M86 61 Q92 58 98 61" stroke="#522e1b" strokeWidth="2" strokeLinecap="round" fill="none" />
        </>
      )}

      {/* Eyes */}
      {mood === 'proud' ? (
        <>
          {/* Happy closed arched eyes */}
          <path d="M63 73 Q68 68 73 73" stroke="#261b15" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M87 73 Q92 68 97 73" stroke="#261b15" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          <circle cx="68" cy="73" r="3.5" fill="#261b15" />
          <circle cx="70" cy="71" r="1.2" fill="#ffffff" />
          <circle cx="92" cy="73" r="3.5" fill="#261b15" />
          <circle cx="94" cy="71" r="1.2" fill="#ffffff" />
        </>
      )}

      {/* Cheerful blush */}
      <circle cx="59" cy="79" r="4.5" fill="#fb7185" opacity="0.5" />
      <circle cx="101" cy="79" r="4.5" fill="#fb7185" opacity="0.5" />

      {/* Gentle Nose */}
      <path d="M79 73 Q81 77 78 78" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Smile / Mouth */}
      {mood === 'proud' || mood === 'happy' || mood === 'waving' ? (
        <path
          d="M72 84 Q80 94 88 84"
          stroke="#991b1b"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="#fca5a5"
        />
      ) : mood === 'thinking' ? (
        <path
          d="M74 85 Q80 87 86 83"
          stroke="#991b1b"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      ) : (
        <path
          d="M73 84 Q80 90 87 84"
          stroke="#991b1b"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      )}

      {/* Extra Props & Gestures */}
      {mood === 'waving' && (
        <g className="animate-bounce" style={{ transformOrigin: '128px 105px' }}>
          <circle cx="132" cy="85" r="10" fill="url(#skinGrad)" />
          {/* Fingers waving */}
          <path d="M126 80 L126 73" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M130 78 L131 71" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M135 80 L136 73" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M139 83 L142 78" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      )}

      {mood === 'thinking' && (
        <g>
          {/* Little question mark or light bulb spark */}
          <circle cx="120" cy="46" r="12" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="120" y="52" textAnchor="middle" fill="#d97706" fontSize="15" fontWeight="bold">?</text>
          {/* Hand under chin */}
          <circle cx="94" cy="94" r="8" fill="url(#skinGrad)" />
        </g>
      )}

      {mood === 'proud' && (
        <g>
          {/* Little sparkling star */}
          <path
            d="M26 44 L28 36 L30 44 L38 46 L30 48 L28 56 L26 48 L18 46 Z"
            fill="#f59e0b"
          />
          <path
            d="M134 38 L135 32 L137 38 L143 39 L137 41 L135 47 L134 41 L128 39 Z"
            fill="#38bdf8"
          />
        </g>
      )}

      {mood === 'encouraging' && (
        <g>
          {/* Small book or pen symbol */}
          <rect x="22" y="104" width="22" height="16" rx="2" fill="#f8fafc" stroke="#0f766e" strokeWidth="1.5" />
          <line x1="26" y1="109" x2="38" y2="109" stroke="#0f766e" strokeWidth="1.5" />
          <line x1="26" y1="114" x2="35" y2="114" stroke="#0f766e" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
};
