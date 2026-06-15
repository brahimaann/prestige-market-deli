export function BorderBeam() {
  return (
    <div className="absolute inset-0 rounded-[inherit] border border-white/5 pointer-events-none overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" fill="none">
        <rect 
          width="100%" 
          height="100%" 
          rx="12" 
          stroke="url(#beam-gradient)" 
          strokeWidth="2" 
          strokeDasharray="100 250"
          style={{
            animation: "beam-spin 8s linear infinite",
          }}
        />
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#4D6D3A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <style>{`
        @keyframes beam-spin {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -350; }
        }
      `}</style>
    </div>
  );
}
