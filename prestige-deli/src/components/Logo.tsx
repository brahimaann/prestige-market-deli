interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "w-12 h-12", light = false }: LogoProps) {
  // Set colors based on background variant
  const circleBg = "#4D6D3A"; // Olive green
  const lineColor = "rgba(255, 255, 255, 0.18)";
  const iconColor = "#ffffff";
  const badgeBg = light ? "#FAF8F5" : "#030A07";
  const badgeBorder = "#D4AF37"; // Gold border

  return (
    <svg className={className} viewBox="0 0 100 100">
      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill={circleBg} />
      
      {/* Quadrant split lines */}
      <line x1="50" y1="6" x2="50" y2="94" stroke={lineColor} strokeWidth="1.2" />
      <line x1="6" y1="50" x2="94" y2="50" stroke={lineColor} strokeWidth="1.2" />
      
      {/* Icon Quadrant 1: Coffee Cup (Top-Left) */}
      <path 
        d="M22,23 h10 v5 a5,5 0 0,1 -10,0 z M32,25 h2 a2,2 0 0,1 2,2 v0 a2,2 0 0,1 -2,2 h-2" 
        stroke={iconColor} 
        strokeWidth="1.2" 
        fill="none" 
        strokeLinecap="round" 
      />
      
      {/* Icon Quadrant 2: Shopping Bag (Top-Right) */}
      <path 
        d="M68,23 h10 v8 h-10 z M70,23 a3,3 0 0,1 6,0" 
        stroke={iconColor} 
        strokeWidth="1.2" 
        fill="none" 
        strokeLinecap="round" 
      />
      
      {/* Icon Quadrant 3: Bread / Croissant (Bottom-Left) */}
      <path 
        d="M19,77 Q26,67 33,77 Q26,73 19,77 Z" 
        stroke={iconColor} 
        strokeWidth="1.2" 
        fill="none" 
        strokeLinejoin="round" 
      />
      
      {/* Icon Quadrant 4: Sausage / Cheese (Bottom-Right) */}
      <path 
        d="M68,71 Q73,77 78,71" 
        stroke={iconColor} 
        strokeWidth="1.8" 
        fill="none" 
        strokeLinecap="round" 
      />

      {/* Center gold-plated badge banner */}
      <rect 
        x="18" 
        y="42" 
        width="64" 
        height="16" 
        rx="2.5" 
        fill={badgeBg} 
        stroke={badgeBorder} 
        strokeWidth="1.2" 
      />
      <text 
        x="50" 
        y="52.5" 
        fontFamily="'Plus Jakarta Sans', sans-serif" 
        fontWeight="950" 
        fontSize="7" 
        fill={badgeBorder} 
        textAnchor="middle" 
        dominantBaseline="middle" 
        letterSpacing="0.8"
      >
        PRESTIGE
      </text>
    </svg>
  );
}
