'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, AlertCircle } from 'lucide-react';
import { type Taller } from '@/lib/talleres-data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/effects/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { waLink } from '@/lib/talleres-data';

type Props = {
  taller: Taller;
  onReservaClick: (fechaId?: string) => void;
};

export function TallerFechas({ taller, onReservaClick }: Props) {
  return (
    <section className="relative py-32 bg-bastardo-brown overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <StaggerContainer className="mb-16">
          <StaggerItem>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px]" style={{ background: taller.moodColor }} />
              <span className="font-sans text-[11px] uppercase tracking-[4px]" style={{ color: taller.moodColor }}>
                Próximas Fechas
              </span>
            </div>
          </StaggerItem>
          <StaggerItem>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-bastardo-cream">
              ¿Cuándo te unes?
            </h2>
          </StaggerItem>
        </StaggerContainer>

        <div className="space-y-3 mb-12">
          {taller.proximasFechas.map((fecha, i) => {
            const agotado = fecha.cuposDisponibles === 0;
            const urgente = fecha.cuposDisponibles > 0 && fecha.cuposDisponibles <= 4;

            return (
              <ScrollReveal key={fecha.id} delay={i * 0.08}>
                <div
                  className={`group flex flex-col sm:flex-row sm:items-center justify-between p-6 border transition-all duration-300 ${
                    agotado
                      ? 'border-bastardo-cream/5 opacity-40'
                      : 'border-bastardo-cream/8 hover:border-bastardo-amber/30 cursor-pointer hover:bg-bastardo-deep/30'
                  }`}
                  onClick={() => !agotado && onReservaClick(fecha.id)}
                >
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <Calendar size={20} style={{ color: agotado ? '#6B6B6B' : taller.moodColor }} />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-[16px] text-bastardo-cream group-hover:text-bastardo-amber transition-colors">
                        {fecha.diaSemana}, {fecha.fecha}
                      </p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="flex items-center gap-1.5 font-sans text-[13px] text-bastardo-cream/40">
                          <Clock size={12} /> {fecha.hora}
                        </span>
                        <span className="flex items-center gap-1.5 font-sans text-[13px] text-bastardo-cream/40">
                          <Users size={12} /> Zona horaria Bogotá
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-4 sm:mt-0">
                    {agotado ? (
                      <span className="font-sans text-[12px] uppercase tracking-wider text-bastardo-cream/25">
                        Agotado
                      </span>
                    ) : (
                      <>
                        {urgente && (
                          <span className="flex items-center gap-1.5 font-sans text-[12px] text-red-400">
                            <AlertCircle size={12} />
                            ¡Solo quedan {fecha.cuposDisponibles}!
                          </span>
                        )}
                        {!urgente && (
                          <span className="font-sans text-[13px] text-bastardo-cream/35">
                            {fecha.cuposDisponibles} cupos disponibles
                          </span>
                        )}
                        <Button size="sm" onClick={() => onReservaClick(fecha.id)} className="!py-2.5 !px-5">
                          Reservar
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="text-center p-8 border border-bastardo-cream/5 bg-bastardo-deep/20">
          <p className="font-sans text-[14px] text-bastardo-cream/35 mb-4">
            ¿Quieres una fecha específica o un grupo privado?
          </p>
          <Button
            variant="whatsapp"
            href={waLink(`Hola%20Bastardo%2C%20quiero%20información%20sobre%20el%20${encodeURIComponent(taller.nombre)}`)}
          >
            Consultar por WhatsApp
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
