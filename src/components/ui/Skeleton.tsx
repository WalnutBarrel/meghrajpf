export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div 
      className={`animate-shimmer bg-surface-elevated rounded-xl ${className}`}
      aria-hidden="true"
    />
  );
}
