import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["DESIGN", "DEVELOP", "DEPLOY"];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);

  // Counter animation using requestAnimationFrame over 2500ms
  useEffect(() => {
    const duration = 2500; // ms
    const startTime = performance.now();

    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Calculate current value (from 0 to 100)
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        // Delay slightly for smooth transition on complete
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  // Concept words cycling every 800ms
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 800);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-16 select-none"
    >
      {/* Top-Left Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted tracking-[0.3em] font-body">
          ADARSH R • PORTFOLIO
        </span>
      </div>

      {/* Center Morphing Concept Words */}
      <div className="flex-1 flex items-center justify-center">
        <div className="h-16 relative flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[wordIndex]}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-text-primary text-center absolute font-body"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Layout Row */}
      <div className="flex items-end justify-between">
        {/* Decorative branding info or blank */}
        <div className="hidden md:block">
          <p className="text-xs text-muted tracking-widest font-light">© 2026</p>
        </div>

        {/* Bottom-Right Track Large dynamic counter */}
        <div className="text-7xl md:text-9xl font-display italic text-text-primary/10 tabular-nums select-none leading-none">
          {String(count).padStart(3, '0')}
        </div>
      </div>

      {/* Bottom border anchor layout progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-stroke/30">
        <div
          className="h-full accent-gradient transition-transform duration-75 ease-out origin-left"
          style={{ transform: `scaleX(${count / 100})` }}
        />
      </div>
    </motion.div>
  );
};
