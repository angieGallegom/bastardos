import { type Taller } from '@/lib/talleres-data';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

type Props = {
  taller: Taller;
  onReservaClick: () => void;
};

export function TallerFicha({ taller, onReservaClick }: Props) {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: `linear-gradient(135deg, #0a0908 0%, ${taller.moodColor}12 50%, #0a0908 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { label: 'Duración', value: taller.duracion, desc: 'De principio a degustación' },
            { label: 'Precio', value: taller.precio, desc: 'Por persona · Todo incluido' },
            { label: 'Cupos', value: `Máx. ${taller.cuposMax}`, desc: 'Grupos pequeños, experiencia íntima' },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.12}>
              <div
                className="p-8 border text-center"
                style={{ borderColor: `${taller.moodColor}20` }}
              >
                <p className="font-sans text-[11px] uppercase tracking-[3px] text-bastardo-cream/30 mb-4">{item.label}</p>
                <p className="font-display text-[2.5rem] font-light" style={{ color: taller.moodColor }}>
                  {item.value}
                </p>
                <p className="font-sans text-[13px] text-bastardo-cream/30 mt-2">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <p className="font-sans text-[14px] text-bastardo-cream/35 mb-8 max-w-md mx-auto">
            Los cupos se llenan rápido. Si ya sabes que quieres esto, no lo pienses más.
          </p>
          <Button size="lg" onClick={onReservaClick}>
            Reserva tu cupo
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
