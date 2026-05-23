import { Check } from 'lucide-react';
import { type Taller } from '@/lib/talleres-data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/effects/ScrollReveal';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

type Props = {
  taller: Taller;
  onReservaClick: () => void;
};

export function TallerConcepto({ taller, onReservaClick }: Props) {
  const paragraphs = taller.concepto.split('\n\n').filter(Boolean);

  return (
    <section className="relative py-32 bg-bastardo-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left: text */}
          <div>
            <StaggerContainer>
              <StaggerItem>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-[1px]" style={{ background: taller.moodColor }} />
                  <span className="font-sans text-[11px] uppercase tracking-[4px]" style={{ color: taller.moodColor }}>
                    El concepto
                  </span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-bastardo-cream leading-tight mb-8">
                  ¿Qué vas a vivir?
                </h2>
              </StaggerItem>
            </StaggerContainer>

            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <p className="font-sans text-[16px] text-bastardo-cream/55 leading-[1.8]">{p}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3} className="mt-10">
              <p className="font-sans text-[13px] text-bastardo-cream/30 uppercase tracking-[2px] mb-4">Dirigido a</p>
              <p className="font-sans text-[15px] text-bastardo-cream/50 leading-relaxed">{taller.quienVaDirigido}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="mt-10">
              <Button onClick={onReservaClick} variant="outline">
                Reserva tu cupo →
              </Button>
            </ScrollReveal>
          </div>

          {/* Right: includes */}
          <div>
            <ScrollReveal>
              <div
                className="p-10 border"
                style={{ borderColor: `${taller.moodColor}25` }}
              >
                <p className="font-sans text-[11px] uppercase tracking-[3px] mb-8" style={{ color: taller.moodColor }}>
                  El taller incluye
                </p>
                <ul className="space-y-5">
                  {taller.queIncluyeItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: `${taller.moodColor}20`, border: `1px solid ${taller.moodColor}40` }}
                      >
                        <Check size={11} style={{ color: taller.moodColor }} />
                      </div>
                      <span className="font-sans text-[15px] text-bastardo-cream/65 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8" style={{ borderTop: `1px solid ${taller.moodColor}15` }}>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="font-sans text-[11px] uppercase tracking-wider text-bastardo-cream/25 mb-2">Duración</p>
                      <p className="font-display text-2xl text-bastardo-cream">{taller.duracion}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] uppercase tracking-wider text-bastardo-cream/25 mb-2">Precio</p>
                      <p className="font-display text-2xl" style={{ color: taller.moodColor }}>{taller.precio}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] uppercase tracking-wider text-bastardo-cream/25 mb-2">Cupos</p>
                      <p className="font-display text-2xl text-bastardo-cream">Máx. {taller.cuposMax}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] uppercase tracking-wider text-bastardo-cream/25 mb-2">Ciudad</p>
                      <p className="font-display text-2xl text-bastardo-cream">Bogotá</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonios */}
            {taller.testimonios.length > 0 && (
              <ScrollReveal delay={0.2} className="mt-6 space-y-4">
                {taller.testimonios.map((t, i) => (
                  <div key={i} className="p-6 bg-bastardo-brown/50 border border-bastardo-cream/5">
                    <p className="font-sans text-[14px] text-bastardo-cream/50 italic leading-relaxed mb-3">
                      "{t.texto}"
                    </p>
                    <p className="font-sans text-[12px] uppercase tracking-wider" style={{ color: taller.moodColor }}>
                      — {t.nombre}
                    </p>
                  </div>
                ))}
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
