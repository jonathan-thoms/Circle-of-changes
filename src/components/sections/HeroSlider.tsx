'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  HeartHandshake,
  Trophy,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Pause,
  Play,
} from 'lucide-react';

export interface HeroSlide {
  id: string;
  image?: string;
  badge: {
    text: string;
    icon: string;
    textClass?: string;
  };
  title: string;
  titleHighlight: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
  statBadge?: {
    value: string;
    label: string;
  };
}

interface HeroSliderProps {
  slides: HeroSlide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const slideDuration = 7000;
  const intervalStep = 100;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const renderIcon = (iconName: string, className: string = 'w-4 h-4') => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'HeartHandshake':
        return <HeartHandshake className={className} />;
      case 'Trophy':
        return <Trophy className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (intervalStep / slideDuration) * 100;
      });
    }, intervalStep);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, slideDuration]);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative min-h-[600px] lg:min-h-[720px] flex items-end pb-16 lg:pb-24 overflow-hidden bg-deep-ocean select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured Environmental Initiatives"
    >
      {/* Full-Bleed Background Images with Smooth Cross-Fade */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {slide.image && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          )}
          {/* Natural Editorial Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/95 via-deep-ocean/70 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-ocean/90 via-deep-ocean/55 to-transparent" />
        </div>
      ))}

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl text-white space-y-6">
          
          {/* Neo-Brutalist Boxed Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/40 border-1.5 border-white/70 backdrop-blur-md shadow-neo-sm text-xs font-mono font-bold uppercase tracking-wider text-sky-renewal">
            <span className="w-2 h-2 rounded-full bg-teal-green animate-pulse" />
            <span>{currentSlide.badge.text}</span>
          </div>

          {/* Bold Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-poppins text-white leading-[1.12] tracking-tight">
            {currentSlide.title}{' '}
            <span className="text-sky-renewal underline decoration-teal-green decoration-4 underline-offset-8">
              {currentSlide.titleHighlight}
            </span>
          </h1>

          {/* Clean, Concise 1-2 sentence description */}
          <p className="text-base sm:text-lg text-sand-beige/95 font-normal leading-relaxed max-w-2xl">
            {currentSlide.description}
          </p>

          {/* Neo-Brutalist Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href={currentSlide.primaryCta.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-bold uppercase tracking-wider text-deep-ocean bg-sand-beige border-2 border-white shadow-neo-white hover:shadow-neo-white-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150"
            >
              <span>{currentSlide.primaryCta.text}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={currentSlide.secondaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded text-sm font-semibold text-white bg-black/30 hover:bg-white hover:text-deep-ocean border-2 border-white/80 shadow-neo-sm hover:shadow-neo-white hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150"
            >
              <span>{currentSlide.secondaryCta.text}</span>
              <span>→</span>
            </Link>
          </div>

        </div>

        {/* Minimal Slide Control Strip */}
        <div className="pt-12 sm:pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t-2 border-white/20 mt-12">
          
          {/* Slide Indicator Numbers */}
          <div className="flex items-center space-x-6">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`group text-left transition-colors duration-150 focus:outline-none cursor-pointer ${
                    isActive ? 'text-white font-bold' : 'text-sand-beige/50 hover:text-white'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className="text-xs font-mono font-bold tracking-widest">
                    [0{idx + 1}]
                  </div>
                  <div
                    className={`h-1 mt-1 transition-all duration-200 ${
                      isActive ? 'w-12 bg-sky-renewal' : 'w-6 bg-white/20 group-hover:bg-white/50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Progress Bar & Neo-Brutalist Boxed Arrows */}
          <div className="flex items-center gap-4 text-white">
            <div className="w-24 h-1 bg-white/20 rounded-none overflow-hidden">
              <div
                className="h-full bg-sky-renewal transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 border border-white/40 rounded hover:border-white text-sand-beige/80 hover:text-white transition active:scale-95 focus:outline-none cursor-pointer"
              aria-label={isPaused ? 'Resume auto-slide' : 'Pause auto-slide'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            <div className="flex items-center gap-1.5 border-l border-white/30 pl-3">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2 border border-white/40 rounded hover:border-white text-sand-beige/80 hover:text-white shadow-neo-sm hover:shadow-neo-white transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus:outline-none cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2 border border-white/40 rounded hover:border-white text-sand-beige/80 hover:text-white shadow-neo-sm hover:shadow-neo-white transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus:outline-none cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
