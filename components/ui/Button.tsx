'use client';

import { ReactNode, useRef } from 'react';
import { clsx } from 'clsx';

type ButtonProps = {
  children: ReactNode;
  variant?: 'amber' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

export function Button({
  children,
  variant = 'amber',
  size = 'md',
  onClick,
  href,
  className = '',
  fullWidth = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  const base = clsx(
    'inline-flex items-center justify-center gap-2 font-sans font-bold uppercase tracking-[2px] text-[13px] transition-all duration-300 cursor-pointer select-none',
    fullWidth && 'w-full',
    size === 'sm' && 'px-6 py-3',
    size === 'md' && 'px-10 py-4',
    size === 'lg' && 'px-14 py-5 text-[14px]',
    disabled && 'opacity-50 cursor-not-allowed',
    variant === 'amber' && 'btn-amber',
    variant === 'outline' && 'border border-bastardo-amber text-bastardo-amber hover:bg-bastardo-amber hover:text-bastardo-deep',
    variant === 'ghost' && 'text-bastardo-cream/70 hover:text-bastardo-cream',
    variant === 'whatsapp' && 'btn-whatsapp',
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        onMouseMove={handleMouseMove as any}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
