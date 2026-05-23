'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Clock, Users } from 'lucide-react';
import { type Taller } from '@/lib/talleres-data';
import { Button } from '@/components/ui/Button';
import { RetroGrid } from '@/components/effects/RetroGrid';

type Props = {
  taller: Taller;
  onReservaClick: () => void;
};

export function TallerHero({ taller, onReservaClick }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden flex items-end justify-start">
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src={taller.bgImage}
          alt={taller.seo.h1}
          fill
          priority
          className="object-cover img-cinematic scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bastardo-deep via-bastardo-deep/60 to-bastardo-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-bastardo-deep/80 via-transparent to-transparent" />
      </motion.div>

      {/* Mood color accent */}
      <div
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background: `radial-gradient(ellipse at 30% 70%, ${taller.moodColor}25 0%, transparent 60%)`,
        }}
      />

      <RetroGrid className="z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 pb-24 w-full"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="font-sans text-[11px] uppercase tracking-[4px]" style={{ color: taller.moodColor }}>
            Taller
          </span>
          <span className="w-8 h-[1px]" style={{ background: taller.moodColor }} />
          <span className="font-sans text-[11px] uppercase tracking-[4px] text-bastardo-cream/40">
            BasTARDO.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3rem,8vw,6.5rem)] font-light text-bastardo-cream leading-[1.0] mb-6 max-w-3xl"
        >
          {taller.seo.h1}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.7 }}
          className="font-sans text-[17px] text-bastardo-cream/55 max-w-xl mb-10 leading-relaxed"
        >
          {taller.subtitulo}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.7 }}
          className="flex flex-wrap items-center gap-6"
        >
          <Button size="lg" onClick={onReservaClick}>
            Reserva tu cupo
          </Button>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-sans text-[13px] text-bastardo-cream/40">
              <Clock size={14} style={{ color: taller.moodColor }} />
              {taller.duracion}
            </span>
            <span className="flex items-center gap-2 font-sans text-[13px] text-bastardo-cream/40">
              <Users size={14} style={{ color: taller.moodColor }} />
              Máx. {taller.cuposMax} personas
            </span>
            <span className="font-sans text-[15px] font-semibold" style={{ color: taller.moodColor }}>
              {taller.precio}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
