import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTallerBySlug } from '@/lib/talleres-data';
import { TallerTemplate } from '@/components/taller/TallerTemplate';

const taller = getTallerBySlug('sushi');

export const metadata: Metadata = {
  title: 'Taller de Sushi en Bogotá | Aprende con Grupo Bastardo',
  description:
    'Taller de sushi en Bogotá para principiantes y entusiastas. 3.5 horas de técnica japonesa con ingredientes locales, en grupos de hasta 12 personas. Reserva tu cupo.',
  keywords: ['taller de sushi en Bogotá', 'clases de sushi Bogotá', 'aprender a hacer sushi Bogotá'],
  openGraph: {
    title: 'Taller de Sushi en Bogotá | Grupo Bastardo',
    description: 'Técnica japonesa con ingredientes locales. Grupos de hasta 12 personas.',
  },
};

export default function SushiPage() {
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
            offers: { '@type': 'Offer', price: taller.precioNum, priceCurrency: 'COP', availability: 'https://schema.org/InStock', url: 'https://grupobastardo.co/talleres/sushi' },
          }),
        }}
      />
      <TallerTemplate taller={taller} />
    </>
  );
}
