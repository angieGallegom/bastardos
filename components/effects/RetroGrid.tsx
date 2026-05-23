export function RetroGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`retro-grid pointer-events-none ${className}`} aria-hidden="true">
      <div className="retro-grid-inner" />
      <div className="absolute inset-0 bg-gradient-to-t from-bastardo-deep via-transparent to-transparent" />
    </div>
  );
}
