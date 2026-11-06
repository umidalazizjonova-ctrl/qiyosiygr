import confetti from 'canvas-confetti';

export function fireSuccessConfetti() {
  try {
    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#0d9488', '#f59e0b', '#0284c7', '#ec4899'],
      disableForReducedMotion: true,
      ticks: 120,
    });
  } catch {
    // ignore if canvas unavailable
  }
}
