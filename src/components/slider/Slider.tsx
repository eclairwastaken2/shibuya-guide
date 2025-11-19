import { motion, useMotionValue, animate } from "framer-motion";
import React, { useState, useEffect } from "react";

interface SliderProps {
  children: React.ReactNode;
  onSlideChange?: (index: number) => void;
}

export default function Slider({ children, onSlideChange }: SliderProps) {
  const slides = React.Children.toArray(children);
  const width = typeof window !== "undefined" ? window.innerWidth : 1920;

  const x = useMotionValue(0)
  const [index, setIndex] = useState(0);
  const wrapIndex = (i: number) =>
    (i + slides.length) % slides.length;

  const onDragEnd = (_e: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -500) {
      setIndex((i) => {
        const next = wrapIndex(i + 1); 
        onSlideChange?.(next)
        return next
      });
    } else if (offset > 50 || velocity > 500) {
        setIndex((i) => {
            const next = wrapIndex(i - 1); 
            onSlideChange?.(next)
            return next; 
        });
    }
  };

  useEffect(() => {
    animate(x, -index * width, { duration: 0.4 });
  }, [index]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Track: contains ALL slides */}
      <motion.div
        drag="x"
        onDragEnd={onDragEnd}
        dragConstraints={{ left: -Infinity, right: Infinity }}
        style={{ x }}
        className="flex flex-row w-max h-full"
      >
        {/* Duplicate slides for infinite loop */}
        {[...slides].map((slide, i) => (
          <div
            key={i}
            className="w-screen h-full flex-shrink-0"
          >
            {slide}
          </div>
        ))}
      </motion.div>
    </div>
  );
}