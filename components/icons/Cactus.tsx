interface CactusProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function Cactus({ className = "", size = 24, strokeWidth = 2 }: CactusProps) {
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
      {/* Main trunk */}
      <path d="M12 4 L12 20" />
      {/* Base */}
      <path d="M10 20 L14 20" />
      {/* Left arm */}
      <path d="M8 10 L8 14 C8 14 8 15 9 15 L12 15" />
      {/* Right arm */}
      <path d="M16 8 L16 12 C16 12 16 13 15 13 L12 13" />
      {/* Spikes on trunk */}
      <circle cx="11" cy="7" r="0.5" fill="currentColor" />
      <circle cx="13" cy="9" r="0.5" fill="currentColor" />
      <circle cx="11" cy="12" r="0.5" fill="currentColor" />
      <circle cx="13" cy="16" r="0.5" fill="currentColor" />
      {/* Spikes on left arm */}
      <circle cx="7" cy="11" r="0.5" fill="currentColor" />
      <circle cx="7" cy="13" r="0.5" fill="currentColor" />
      {/* Spikes on right arm */}
      <circle cx="17" cy="9" r="0.5" fill="currentColor" />
      <circle cx="17" cy="11" r="0.5" fill="currentColor" />
    </svg>
  );
}
