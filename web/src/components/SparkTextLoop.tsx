"use client";

import { useEffect, useState } from "react";

interface SparkTextLoopProps {
  text?: string;
  className?: string;
  letterDelayMs?: number;
  pauseDurationMs?: number;
}

export default function SparkTextLoop({
  text = "INDUSTRIAL ENERGY & HEATING SOLUTIONS",
  className = "",
  letterDelayMs = 60,
  pauseDurationMs = 2800,
}: SparkTextLoopProps) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (visibleCount < text.length) {
      timeoutId = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, letterDelayMs);
    } else {
      // Completed full text reveal — hold and reset loop
      timeoutId = setTimeout(() => {
        setVisibleCount(0);
      }, pauseDurationMs);
    }

    return () => clearTimeout(timeoutId);
  }, [visibleCount, text.length, letterDelayMs, pauseDurationMs]);

  return (
    <span className={`inline-flex items-center flex-wrap font-mono relative select-none ${className}`}>
      {text.split("").map((char, index) => {
        const isVisible = index < visibleCount;
        const isSparkActive = index === visibleCount - 1 && char !== " ";

        return (
          <span
            key={index}
            className={`relative transition-all duration-150 whitespace-pre ${
              isVisible
                ? isSparkActive
                  ? "text-[#FFD700] scale-125 z-20"
                  : "text-[#FF6B00] scale-100 z-10"
                : "opacity-0 scale-90"
            }`}
            style={{
              textShadow: isSparkActive
                ? "0 0 12px #FF6B00, 0 0 25px #FFD700, 0 0 35px #FFFFFF, 0 0 50px #FF4500"
                : isVisible
                ? "0 0 8px rgba(255, 107, 0, 0.4)"
                : "none",
            }}
          >
            {char}

            {/* Spark Flare & Particles when Character is Applied */}
            {isSparkActive && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none z-30">
                {/* Core Spark Flare */}
                <span className="block w-3.5 h-3.5 bg-white rounded-full animate-ping shadow-[0_0_18px_#FFD700]" />
                <span className="block w-2.5 h-2.5 bg-[#FF6B00] rounded-full blur-[1px] absolute top-0.5 left-0.5" />

                {/* Micro Spark Particles */}
                <span className="absolute w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-spark-1" />
                <span className="absolute w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-spark-2" />
                <span className="absolute w-1.5 h-1.5 bg-white rounded-full animate-spark-3" />
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}
