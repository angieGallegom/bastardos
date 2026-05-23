'use client';

import { useState } from 'react';
import { Nav } from '@/components/ui/Nav';
import { BookingModal } from '@/components/ui/BookingModal';
import { FloatingCTA } from '@/components/ui/FloatingCTA';
import { GrainOverlay } from '@/components/effects/GrainOverlay';
import { SpotlightCursor } from '@/components/effects/SpotlightCursor';
import { PageLoader } from '@/components/effects/PageLoader';
import { Hero } from '@/components/home/Hero';
import { WorkshopsGrid } from '@/components/home/WorkshopsGrid';
import { OtrosServicios } from '@/components/home/OtrosServicios';
import { Manifesto } from '@/components/home/Manifesto';
import { Footer } from '@/components/home/Footer';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultTaller, setDefaultTaller] = useState<string | undefined>();

  const openModal = (slug?: string) => {
    setDefaultTaller(slug);
    setModalOpen(true);
  };

  return (
    <>
      <PageLoader />
      <GrainOverlay />
      <SpotlightCursor />

      <Nav onReservaClick={() => openModal()} />
      <FloatingCTA onClick={() => openModal()} />

      <main>
        <Hero onReservaClick={() => openModal()} />
        <WorkshopsGrid onReservaClick={openModal} />
        <OtrosServicios />
        <Manifesto />
      </main>

      <Footer />

      <BookingModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setDefaultTaller(undefined); }}
        defaultTaller={defaultTaller}
      />
    </>
  );
}
