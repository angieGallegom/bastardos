'use client';

import { useState } from 'react';
import { type Taller, getOtrosTalleres } from '@/lib/talleres-data';
import { Nav } from '@/components/ui/Nav';
import { BookingModal } from '@/components/ui/BookingModal';
import { FloatingCTA } from '@/components/ui/FloatingCTA';
import { GrainOverlay } from '@/components/effects/GrainOverlay';
import { SpotlightCursor } from '@/components/effects/SpotlightCursor';
import { TallerHero } from './TallerHero';
import { TallerConcepto } from './TallerConcepto';
import { TallerFicha } from './TallerFicha';
import { TallerFechas } from './TallerFechas';
import { TallerCrossSell } from './TallerCrossSell';
import { Footer } from '@/components/home/Footer';

type Props = {
  taller: Taller;
};

export function TallerTemplate({ taller }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultFechaId, setDefaultFechaId] = useState<string | undefined>();
  const otrosTalleres = getOtrosTalleres(taller.slug);

  const openModal = (fechaId?: string) => {
    setDefaultFechaId(fechaId);
    setModalOpen(true);
  };

  return (
    <>
      <GrainOverlay />
      <SpotlightCursor />
      <Nav onReservaClick={() => openModal()} />
      <FloatingCTA onClick={() => openModal()} />

      <main>
        <TallerHero taller={taller} onReservaClick={() => openModal()} />
        <TallerConcepto taller={taller} onReservaClick={() => openModal()} />
        <TallerFicha taller={taller} onReservaClick={() => openModal()} />
        <TallerFechas taller={taller} onReservaClick={openModal} />
        <TallerCrossSell talleres={otrosTalleres} />
      </main>

      <Footer />

      <BookingModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setDefaultFechaId(undefined); }}
        defaultTaller={taller.slug}
        defaultFechaId={defaultFechaId}
      />
    </>
  );
}
