interface RakeProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function Rake({ className = "", size = 24, strokeWidth = 2 }: RakeProps) {
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
      <line x1="5" y1="5" x2="15" y2="15" />
      {/* Rake head horizontal */}
      <line x1="14" y1="18" x2="20" y2="18" />
      {/* Rake tines */}
      <line x1="15" y1="18" x2="15" y2="21" />
      <line x1="17" y1="18" x2="17" y2="21" />
      <line x1="19" y1="18" x2="19" y2="21" />
      {/* Connection */}
      <line x1="15" y1="15" x2="17" y2="17" />
      <line x1="17" y1="17" x2="17" y2="18" />
      {/* Grip */}
      <circle cx="9" cy="9" r="1" fill="currentColor" />
    </svg>
  );
}
