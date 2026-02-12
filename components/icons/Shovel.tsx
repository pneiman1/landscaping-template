interface ShovelProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function Shovel({ className = "", size = 24, strokeWidth = 2 }: ShovelProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Handle */}
      <line x1="4" y1="4" x2="16" y2="16" />
      {/* Blade top */}
      <path d="M16 16 L18 18 L20 16 L18 14 Z" fill="currentColor" opacity="0.3" />
      {/* Blade outline */}
      <path d="M16 16 L18 18 L20 16 L18 14 Z" />
      {/* Grip */}
      <circle cx="8" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}
