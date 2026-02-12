interface PottedPlantProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function PottedPlant({ className = "", size = 24, strokeWidth = 2 }: PottedPlantProps) {
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
      {/* Pot */}
      <path d="M8 15 L7 20 L17 20 L16 15 Z" fill="currentColor" opacity="0.2" />
      <path d="M8 15 L7 20 L17 20 L16 15 Z" />
      {/* Pot rim */}
      <line x1="7" y1="15" x2="17" y2="15" />

      {/* Center stem */}
      <path d="M12 15 L12 8" />

      {/* Left leaf */}
      <path d="M12 10 C12 10, 9 9, 8 7 C7 5, 8 4, 10 5 C11 6, 12 8, 12 10" fill="currentColor" opacity="0.3" />
      <path d="M12 10 C12 10, 9 9, 8 7 C7 5, 8 4, 10 5 C11 6, 12 8, 12 10" />

      {/* Right leaf */}
      <path d="M12 10 C12 10, 15 9, 16 7 C17 5, 16 4, 14 5 C13 6, 12 8, 12 10" fill="currentColor" opacity="0.3" />
      <path d="M12 10 C12 10, 15 9, 16 7 C17 5, 16 4, 14 5 C13 6, 12 8, 12 10" />

      {/* Top leaves */}
      <path d="M12 8 C12 8, 10 7, 9.5 5.5 C9 4, 10 3, 11 4 C11.5 5, 12 6.5, 12 8" fill="currentColor" opacity="0.3" />
      <path d="M12 8 C12 8, 10 7, 9.5 5.5 C9 4, 10 3, 11 4 C11.5 5, 12 6.5, 12 8" />

      <path d="M12 8 C12 8, 14 7, 14.5 5.5 C15 4, 14 3, 13 4 C12.5 5, 12 6.5, 12 8" fill="currentColor" opacity="0.3" />
      <path d="M12 8 C12 8, 14 7, 14.5 5.5 C15 4, 14 3, 13 4 C12.5 5, 12 6.5, 12 8" />
    </svg>
  );
}
