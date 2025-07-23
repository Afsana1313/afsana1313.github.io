// app/components/CustomCursor.tsx
"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/5 shadow-[0_0_150px_4px_rgba(0,0,0,0.1)]  transition-transform duration-75"
    />
  );
};

export default CustomCursor;
