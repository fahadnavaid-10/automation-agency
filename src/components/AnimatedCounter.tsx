'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000, className = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: ease-out-expo
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
