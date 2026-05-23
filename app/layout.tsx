import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://grupobastardo.co'),
  title: {
    default: 'BasTARDO. | Centro de Experiencias Gastronómicas en Bogotá',
    template: '%s | Grupo Bastardo',
  },
  description:
    'Talleres de cocina artesanal, sushi y coctelería en Bogotá. Experiencias gastronómicas íntimas para grupos de hasta 12 personas. Reserva tu cupo.',
  keywords: ['talleres de cocina Bogotá', 'experiencias gastronómicas Bogotá', 'grupo bastardo', 'centro gastronómico Bogotá'],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'BasTARDO. · Grupo Bastardo',
    title: 'BasTARDO. | Centro de Experiencias Gastronómicas en Bogotá',
    description: 'Talleres gastronómicos íntimos en Bogotá. Pasta, sushi y coctelería. Grupos de hasta 12 personas.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-bastardo-deep text-bastardo-cream antialiased">
        {children}
      </body>
    </html>
  );
}
