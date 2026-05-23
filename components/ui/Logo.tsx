import Link from 'next/link';

type LogoProps = {
  variant?: 'white' | 'black';
  className?: string;
  compact?: boolean;
};

export function Logo({ variant = 'white', className = '', compact = false }: LogoProps) {
  const color = variant === 'white' ? '#F5EFE0' : '#111111';

  if (compact) {
    return (
      <Link href="/" aria-label="BasTARDO. - Inicio">
        <svg
          viewBox="0 0 200 60"
          className={`h-10 w-auto ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="4" y="42" fontFamily="'Brush Script MT', cursive" fontSize="38" fill={color} opacity="0.9">sbg</text>
          <rect x="74" y="6" width="122" height="46" stroke={color} strokeWidth="1.2" fill="none" />
          <text x="79" y="43" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" letterSpacing="1" fill={color}>TARDO.</text>
        </svg>
      </Link>
    );
  }

  return (
    <Link href="/" aria-label="BasTARDO. - Inicio">
      <svg
        viewBox="0 0 400 120"
        className={`w-56 h-auto ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="8" y="78" fontFamily="'Brush Script MT', cursive" fontSize="72" fill={color} opacity="0.9">sbg</text>
        <rect x="138" y="10" width="254" height="82" stroke={color} strokeWidth="1.5" fill="none" />
        <text x="150" y="76" fontFamily="Arial, sans-serif" fontSize="54" fontWeight="700" letterSpacing="2" fill={color}>TARDO.</text>
        <text x="138" y="108" fontFamily="Arial, sans-serif" fontSize="8" letterSpacing="2.5" fill={color} opacity="0.65">CENTRO DE EXPERIENCIAS GASTRONÓMICAS Y FORMATIVAS.</text>
      </svg>
    </Link>
  );
}
