export default function TeapotIcon({ className = 'btn__icon' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M4 14h16c2 0 3-1 3-3V8H4v6z" />
      <path d="M4 14v4h16v-4" />
      <path d="M8 8V5c0-1 1-2 2-2h4c1 0 2 1 2 2v3" />
      <path d="M23 10c2 0 4 1 5 3" />
      <ellipse cx="12" cy="18" rx="10" ry="1.5" opacity="0.3" />
    </svg>
  );
}
