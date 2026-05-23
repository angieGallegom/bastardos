'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-bastardo-deep flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
            className="text-center"
          >
            <LogoSvg className="w-64 opacity-90" />
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8 } }}
          >
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-bastardo-amber"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LogoSvg({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Script "sbg" part */}
      <text
        x="10"
        y="75"
        fontFamily="'Brush Script MT', cursive, Georgia, serif"
        fontSize="70"
        fill="#F5EFE0"
        opacity="0.9"
      >
        sbg
      </text>
      {/* Rectangle border */}
      <rect x="140" y="10" width="250" height="80" stroke="#F5EFE0" strokeWidth="1.5" fill="none" />
      {/* TARDO. */}
      <text
        x="152"
        y="73"
        fontFamily="'DM Sans', Arial, sans-serif"
        fontSize="52"
        fontWeight="700"
        letterSpacing="2"
        fill="#F5EFE0"
      >
        TARDO.
      </text>
      {/* Subtitle */}
      <text
        x="140"
        y="108"
        fontFamily="'DM Sans', Arial, sans-serif"
        fontSize="8.5"
        letterSpacing="2"
        fill="#F5EFE0"
        opacity="0.7"
      >
        CENTRO DE EXPERIENCIAS GASTRONÓMICAS Y FORMATIVAS.
      </text>
    </svg>
  );
}
