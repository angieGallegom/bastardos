import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  variant?: 'white' | 'black';
  className?: string;
  compact?: boolean;
};

export function Logo({ variant = 'white', className = '', compact = false }: LogoProps) {
  const src = variant === 'white' ? '/images/logo-blanco.png' : '/images/logo-negro.png';
  const height = compact ? 40 : 52;

  return (
    <Link href="/" aria-label="BasTARDO. - Inicio" className={`inline-block ${className}`}>
      <Image
        src={src}
        alt="BasTARDO."
        height={height}
        width={compact ? 160 : 210}
        className="h-auto object-contain"
        style={{ height: `${height}px`, width: 'auto' }}
        priority
      />
    </Link>
  );
}
