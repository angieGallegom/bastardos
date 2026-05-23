import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTallerBySlug } from '@/lib/talleres-data';
import { TallerTemplate } from '@/components/taller/TallerTemplate';

const taller = getTallerBySlug('pastas');

export const metadata: Metadata = {
  title: 'Taller de Pasta Artesanal en Bogotá',
  description:
    'Aprende a hacer pasta fresca artesanal en Bogotá. Taller de 3 horas para grupos de hasta 12 personas. Incluye ingredientes, degustación y experiencia completa. Reserva tu cupo.',
  keywords: ['taller de pasta en Bogotá', 'clases de pasta artesanal Bogotá', 'curso cocina italiana Bogotá'],
  openGraph: {
    title: 'Taller de Pasta Artesanal en Bogotá | Grupo Bastardo',
    description: 'Aprende a hacer pasta fresca artesanal. Taller íntimo de 3 horas en Bogotá.',
  },
};

export default function PastasPage() {
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
            offers: { '@type': 'Offer', price: taller.precioNum, priceCurrency: 'COP', availability: 'https://schema.org/InStock', url: 'https://grupobastardo.co/talleres/pastas' },
          }),
        }}
      />
      <TallerTemplate taller={taller} />
    </>
  );
}
