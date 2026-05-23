import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { type Taller } from '@/lib/talleres-data';
import { StaggerContainer, StaggerItem } from '@/components/effects/ScrollReveal';

type Props = {
  talleres: Taller[];
};

export function TallerCrossSell({ talleres }: Props) {
  return (
    <section className="py-32 bg-bastardo-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <StaggerContainer className="text-center mb-16">
          <StaggerItem>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="divider-amber" />
              <span className="font-sans text-[11px] uppercase tracking-[4px] text-bastardo-amber">
                Otros Talleres
              </span>
              <span className="divider-amber" />
            </div>
          </StaggerItem>
          <StaggerItem>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-bastardo-cream">
              Más experiencias Bastardo
            </h2>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid md:grid-cols-2 gap-6">
          {talleres.map((taller) => (
            <StaggerItem key={taller.slug}>
              <Link href={`/talleres/${taller.slug}`} className="group block relative h-72 overflow-hidden card-glow">
                <Image
                  src={taller.bgImage}
                  alt={taller.nombre}
                  fill
                  className="object-cover img-cinematic transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bastardo-deep via-bastardo-deep/50 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `radial-gradient(ellipse at center, ${taller.moodColor}20 0%, transparent 70%)` }}
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="font-sans text-[11px] uppercase tracking-[3px] mb-2" style={{ color: taller.moodColor }}>
                    {taller.duracion} · {taller.precio}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-light text-bastardo-cream">{taller.nombre}</h3>
                    <ArrowRight size={18} className="text-bastardo-cream/40 group-hover:text-bastardo-amber transition-colors transform group-hover:translate-x-1 duration-200" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}
