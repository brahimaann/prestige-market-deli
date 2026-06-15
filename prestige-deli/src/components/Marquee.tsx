import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export function Marquee({ children, direction = "left", pauseOnHover = true }: MarqueeProps) {
  return (
    <div className="overflow-hidden flex w-full relative select-none [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <div 
        className={`flex shrink-0 gap-6 py-4 justify-around [animation-play-state:running] ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        } ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {children}
      </div>
      <div 
        className={`flex shrink-0 gap-6 py-4 justify-around [animation-play-state:running] ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        } ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        aria-hidden="true"
      >
        {children}
      </div>
      <style>{`
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}
