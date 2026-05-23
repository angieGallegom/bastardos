'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { RetroGrid } from '@/components/effects/RetroGrid';

const words = ['La cocina', 'como ritual.', 'El aprendizaje', 'como placer.'];

type Props = {
  onReservaClick: () => void;
};

export function Hero({ onReservaClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/images/hero-bg.jpg"
          alt="BasTARDO. Centro de Experiencias Gastronómicas"
          fill
          priority
          className="object-cover img-cinematic scale-110"
          sizes="100vw"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-bastardo-deep/85 via-bastardo-deep/60 to-bastardo-deep/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-bastardo-deep/50 via-transparent to-bastardo-deep/30" />
      </motion.div>

      {/* Retro grid at bottom */}
      <RetroGrid className="z-10" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-bastardo-amber/8 rounded-full blur-[120px] pointer-events-none z-10 animate-pulse-glow" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        style={{ y: textY, opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="divider-amber" />
          <span className="font-sans text-[11px] uppercase tracking-[4px] text-bastardo-amber">
            Bogotá · Colombia
          </span>
          <span className="divider-amber" />
        </motion.div>

        {/* Headline word by word */}
        <h1 className="font-display font-light text-[clamp(3rem,8vw,6rem)] leading-[1.05] text-bastardo-cream mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 2.2 + i * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ display: 'inline-block' }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.7 }}
          className="font-sans text-[17px] font-light text-bastardo-cream/60 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Talleres gastronómicos íntimos en Bogotá. Grupos de hasta 12 personas.<br />
          Una experiencia que se vive, no se explica.
        </motion.p>

        {/* CTA group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" onClick={onReservaClick}>
            Reserva tu cupo
          </Button>
          <Button variant="ghost" size="md" onClick={() => {
            document.getElementById('talleres')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Ver talleres →
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 0.8 }}
          className="flex items-center justify-center gap-10 mt-16 pt-10 border-t border-bastardo-cream/10"
        >
          {[
            { value: '3', label: 'Talleres únicos' },
            { value: '12', label: 'Cupos máximos' },
            { value: '100%', label: 'Experiencia práctica' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-3xl font-light text-bastardo-amber">{value}</p>
              <p className="font-sans text-[12px] text-bastardo-cream/40 uppercase tracking-[1.5px] mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6 }}
        style={{ opacity }}
      >
        <span className="font-sans text-[10px] uppercase tracking-[3px] text-bastardo-cream/30">Scroll</span>
        <ChevronDown size={16} className="text-bastardo-cream/30 scroll-indicator" />
      </motion.div>
    </section>
  );
}
