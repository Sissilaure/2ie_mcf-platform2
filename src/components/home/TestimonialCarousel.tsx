"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  country: string;
  initial: string;
  color: string;
};

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[activeTestimonial];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-8 border border-slate-100 mb-6 min-h-[200px] transition-all duration-500">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#F5A623" className="text-amber-400" />
          ))}
        </div>
        <p className="text-lg text-slate-700 font-medium leading-relaxed mb-6 italic">"{current.text}"</p>
        <div className="flex items-center gap-4">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: current.color }}
          >
            {current.initial}
          </div>
          <div>
            <div className="font-bold text-slate-900">{current.name}</div>
            <div className="text-slate-500 text-sm">{current.role}</div>
          </div>
          <div className="ml-auto px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold">
            {current.country}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveTestimonial(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeTestimonial ? "w-6 h-2 bg-[#1565C0]" : "w-2 h-2 bg-slate-200 hover:bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
