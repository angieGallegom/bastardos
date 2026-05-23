export function AuroraBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div
        className="aurora-blob w-[600px] h-[600px] bg-bastardo-amber/20 -top-40 -left-40"
        style={{ '--duration': '10s', '--tx': '60px', '--ty': '40px', '--scale': '1.15' } as React.CSSProperties}
      />
      <div
        className="aurora-blob w-[400px] h-[400px] bg-bastardo-rust/25 top-1/2 right-0"
        style={{ '--duration': '13s', '--tx': '-40px', '--ty': '-60px', '--scale': '0.9' } as React.CSSProperties}
      />
      <div
        className="aurora-blob w-[500px] h-[300px] bg-bastardo-amber-light/10 bottom-0 left-1/3"
        style={{ '--duration': '8s', '--tx': '30px', '--ty': '-30px', '--scale': '1.05' } as React.CSSProperties}
      />
    </div>
  );
}
