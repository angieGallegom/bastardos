import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTallerBySlug } from '@/lib/talleres-data';
import { TallerTemplate } from '@/components/taller/TallerTemplate';

const taller = getTallerBySlug('cocteles');

export const metadata: Metadata = {
  title: 'Taller de Coctelería en Bogotá | Mixología con Grupo Bastardo',
  description:
    'Taller de coctelería y mixología en Bogotá para grupos. 2.5 horas de técnica, sabor y narrativa en cada vaso. Máx. 10 personas. Reserva tu experiencia.',
  keywords: ['taller de coctelería en Bogotá', 'clases de mixología Bogotá', 'curso de cócteles Bogotá'],
  openGraph: {
    title: 'Taller de Coctelería en Bogotá | Grupo Bastardo',
    description: 'Mixología sensorial y creativa. Grupos de hasta 10 personas en Bogotá.',
  },
};

export default function CoctelessPage() {
  if (!taller) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: taller.nombre,
            description: taller.descripcionCorta,
            organizer: { '@type': 'Organization', name: 'Grupo Bastardo', url: 'https://grupobastardo.co' },
            location: { '@type': 'Place', name: 'BasTARDO.', address: { '@type': 'PostalAddress', addressLocality: 'Bogotá', addressCountry: 'CO' } },
            offers: { '@type': 'Offer', price: taller.precioNum, priceCurrency: 'COP', availability: 'https://schema.org/InStock', url: 'https://grupobastardo.co/talleres/cocteles' },
          }),
        }}
      />
      <TallerTemplate taller={taller} />
    </>
  );
}
