"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, end, duration, start]);

  return { count, ref };
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  color,
}: {
  value: number;
  suffix?: string;
  label: string;
  color: string;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-5xl font-black mb-2 transition-transform duration-300 group-hover:scale-105" style={{ color }}>
        {count}{suffix}
      </div>
      <div className="text-slate-500 text-sm font-medium">{label}</div>
    </div>
  );
}
