'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { talleres } from '@/lib/talleres-data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/effects/ScrollReveal';
import { Button } from '@/components/ui/Button';

type Props = {
  onReservaClick: (slug?: string) => void;
};

export function WorkshopsGrid({ onReservaClick }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="talleres" className="relative py-32 bg-bastardo-deep overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <StaggerContainer className="text-center mb-20">
          <StaggerItem>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="divider-amber" />
              <span className="font-sans text-[11px] uppercase tracking-[4px] text-bastardo-amber">
                Próximos Talleres
              </span>
              <span className="divider-amber" />
            </div>
          </StaggerItem>
          <StaggerItem>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-bastardo-cream leading-tight">
              Elige tu experiencia
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="font-sans text-bastardo-cream/40 mt-4 max-w-lg mx-auto leading-relaxed">
              Cada taller es una inmersión completa. Ingredientes incluidos, grupos pequeños, guía experta.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Expandable panels — desktop */}
        <div className="hidden md:flex gap-3 h-[600px]">
          {talleres.map((taller) => {
            const isHovered = hovered === taller.slug;
            const isOtherHovered = hovered && hovered !== taller.slug;

            return (
              <motion.div
                key={taller.slug}
                className="relative overflow-hidden cursor-pointer taller-panel"
                style={{
                  flex: isHovered ? 3 : isOtherHovered ? 0.7 : 1,
                  transition: 'flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={() => setHovered(taller.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background image */}
                <Image
                  src={taller.bgImage}
                  alt={taller.nombre}
                  fill
                  className="object-cover img-cinematic transition-transform duration-700"
                  style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                  sizes="33vw"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to top, ${taller.moodColor}60 0%, rgba(10,9,8,0.7) 40%, rgba(10,9,8,0.3) 100%)`,
                    opacity: isHovered ? 1 : 0.85,
                  }}
                />

                {/* Mood color accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300"
                  style={{ background: taller.moodColor, opacity: isHovered ? 1 : 0 }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Tags */}
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-3 mb-4"
                  >
                    <span className="flex items-center gap-1.5 font-sans text-[11px] text-bastardo-cream/60 uppercase tracking-wider">
                      <Clock size={12} /> {taller.duracion}
                    </span>
                    <span className="flex items-center gap-1.5 font-sans text-[11px] text-bastardo-cream/60 uppercase tracking-wider">
                      <Users size={12} /> Máx. {taller.cuposMax}
                    </span>
                  </motion.div>

                  <h3 className="font-display text-3xl font-light text-bastardo-cream leading-tight mb-2">
                    {taller.nombre}
                  </h3>

                  <motion.p
                    animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-sans text-[13px] text-bastardo-cream/60 leading-relaxed mb-4 overflow-hidden"
                  >
                    {taller.descripcionCorta}
                  </motion.p>

                  <div className="flex items-center justify-between">
                    <span className="font-sans text-bastardo-amber font-semibold text-[15px]">
                      {taller.precio}
                    </span>

                    <motion.div
                      animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={`/talleres/${taller.slug}`}
                        className="flex items-center gap-2 font-sans text-[13px] font-semibold text-bastardo-cream hover:text-bastardo-amber transition-colors uppercase tracking-wider"
                      >
                        Ver taller <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {talleres.map((taller, i) => (
            <ScrollReveal key={taller.slug} delay={i * 0.1}>
              <Link href={`/talleres/${taller.slug}`} className="block">
                <div className="relative h-72 overflow-hidden card-glow">
                  <Image
                    src={taller.bgImage}
                    alt={taller.nombre}
                    fill
                    className="object-cover img-cinematic"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bastardo-deep via-bastardo-deep/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-sans text-[11px] text-bastardo-amber uppercase tracking-wider mb-1">{taller.duracion} · {taller.precio}</p>
                        <h3 className="font-display text-2xl text-bastardo-cream">{taller.nombre}</h3>
                      </div>
                      <ArrowRight size={20} className="text-bastardo-cream/40" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA under grid */}
        <ScrollReveal className="text-center mt-16">
          <p className="font-sans text-bastardo-cream/30 text-[13px] mb-6">
            ¿Ya sabes cuál quieres? No esperes — los cupos son limitados.
          </p>
          <Button size="lg" onClick={() => onReservaClick()}>
            Reserva tu cupo ahora
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
