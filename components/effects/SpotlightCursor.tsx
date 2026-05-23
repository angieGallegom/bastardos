'use client';

import { useEffect, useRef } from 'react';

export function SpotlightCursor() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.background = `radial-gradient(500px at ${e.clientX}px ${e.clientY}px, rgba(200, 129, 26, 0.08) 0%, transparent 80%)`;
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="spotlight"
      aria-hidden="true"
    />
  );
}
