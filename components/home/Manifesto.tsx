'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { AuroraBackground } from '@/components/effects/AuroraBackground';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

const manifestoLines = [
  'BasTARDO. no se entiende como',
  'algo incompleto, sino como algo',
  'libre de un linaje único.',
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-40 bg-bastardo-deep overflow-hidden">
      <AuroraBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: quote */}
          <div ref={ref}>
            <div className="flex items-center gap-3 mb-10">
              <span className="divider-amber" />
              <span className="font-sans text-[11px] uppercase tracking-[4px] text-bastardo-amber">
                Quiénes somos
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light text-bastardo-cream leading-[1.1] mb-8">
              {manifestoLines.map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="font-sans text-[16px] text-bastardo-cream/50 leading-relaxed mb-8"
            >
              Es mezcla, cruce e hibridez; una postura que niega la idea de pureza y desconfía de lo intocable.
              En lo gastronómico, lo creativo y lo formativo, BasTARDO. se posiciona como un espacio donde no existen
              recetas sagradas, solo procesos honestos, abiertos al error, al tiempo y a la transformación.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="border-l-2 border-bastardo-amber pl-6 py-2"
            >
              <p className="font-display text-2xl italic text-bastardo-cream/80 leading-relaxed">
                "Bastardo no se explica del todo. Se vive."
              </p>
            </motion.blockquote>
          </div>

          {/* Right: image editorial */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/sculptural.jpg"
                alt="BasTARDO. — Centro de Experiencias Gastronómicas"
                fill
                className="object-cover img-cinematic"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bastardo-deep/60 via-transparent to-transparent" />

              {/* Overlay text */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-sans text-[11px] uppercase tracking-[3px] text-bastardo-cream/50">
                  Bogotá · Colombia · 2025
                </p>
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-bastardo-amber/20 pointer-events-none" />
          </ScrollReveal>
        </div>

        {/* Mission & Vision row */}
        <div className="grid md:grid-cols-2 gap-8 mt-24 pt-16 border-t border-bastardo-cream/8">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[3px] text-bastardo-amber mb-4">Misión</p>
            <p className="font-sans text-[15px] text-bastardo-cream/50 leading-relaxed">
              Crear experiencias gastronómicas y sensoriales que transformen lo cotidiano en algo íntimo y memorable,
              integrando cocina, mixología y diseño de experiencia sensorial para generar espacios cálidos, exclusivos
              y profundamente humanos.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-sans text-[11px] uppercase tracking-[3px] text-bastardo-amber mb-4">Visión</p>
            <p className="font-sans text-[15px] text-bastardo-cream/50 leading-relaxed">
              Consolidarnos como un laboratorio creativo referente en experiencias sensoriales en Latinoamérica, donde la
              gastronomía, el arte y el diseño se integran para generar conexiones auténticas y nuevas formas de habitar
              lo culinario.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
