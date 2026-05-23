'use client';

import { UtensilsCrossed, Sparkles, Users, Handshake, MessageCircle } from 'lucide-react';
import { otrosServicios, waLink } from '@/lib/talleres-data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/effects/ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  Sparkles,
  Users,
  Handshake,
};

export function OtrosServicios() {
  return (
    <section className="relative py-32 bg-bastardo-brown overflow-hidden">
      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C8811A 0px, #C8811A 1px, transparent 1px, transparent 60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <StaggerContainer className="text-center mb-20">
          <StaggerItem>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="divider-amber" />
              <span className="font-sans text-[11px] uppercase tracking-[4px] text-bastardo-amber">
                Otros Servicios
              </span>
              <span className="divider-amber" />
            </div>
          </StaggerItem>
          <StaggerItem>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-bastardo-cream">
              Más allá del taller
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="font-sans text-bastardo-cream/40 mt-4 max-w-md mx-auto">
              Diseñamos experiencias gastronómicas a la medida. Cuéntanos qué tienes en mente.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid md:grid-cols-2 gap-6">
          {otrosServicios.map((servicio, i) => {
            const Icon = iconMap[servicio.icono] || UtensilsCrossed;
            const waUrl = waLink(servicio.waText);

            return (
              <ScrollReveal key={servicio.id} delay={i * 0.1}>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 border border-bastardo-cream/8 hover:border-bastardo-amber/30 bg-bastardo-deep/30 hover:bg-bastardo-deep/60 transition-all duration-400 card-glow"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-none border border-bastardo-amber/30 group-hover:border-bastardo-amber/60 flex items-center justify-center transition-colors duration-300">
                      <Icon size={20} className="text-bastardo-amber" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-sans font-semibold text-[17px] text-bastardo-cream group-hover:text-bastardo-amber transition-colors duration-300 mb-2">
                        {servicio.titulo}
                      </h3>
                      <p className="font-sans text-[14px] text-bastardo-cream/40 leading-relaxed mb-5">
                        {servicio.descripcion}
                      </p>
                      <span className="inline-flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-[2px] text-bastardo-whatsapp">
                        <MessageCircle size={14} />
                        Consultar por WhatsApp
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
