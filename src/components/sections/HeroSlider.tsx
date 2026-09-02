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
          {/* Subtle Dark Editorial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/95 via-deep-ocean/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-ocean/90 via-deep-ocean/50 to-transparent" />
        </div>
      ))}

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl text-white space-y-6">
          
          {/* Minimal Eyebrow Tag */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-renewal">
            <span className="w-2 h-2 rounded-full bg-teal-green" />
            <span>{currentSlide.badge.text}</span>
          </div>

          {/* Bold Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-poppins text-white leading-[1.15] tracking-tight">
            {currentSlide.title}{' '}
            <span className="text-sky-renewal">{currentSlide.titleHighlight}</span>
          </h1>

          {/* Clean, Concise 1-2 sentence description */}
          <p className="text-base sm:text-xl text-sand-beige/90 font-normal leading-relaxed max-w-2xl">
            {currentSlide.description}
          </p>

          {/* Clean Minimalist Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href={currentSlide.primaryCta.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-deep-ocean bg-sand-beige hover:bg-white transition-colors duration-200 shadow-sm"
            >
              <span>{currentSlide.primaryCta.text}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={currentSlide.secondaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white hover:text-sky-renewal transition-colors duration-200"
            >
              <span>{currentSlide.secondaryCta.text}</span>
              <span className="text-sky-renewal">→</span>
            </Link>
          </div>

        </div>

        {/* Minimal Slide Control Strip */}
        <div className="pt-12 sm:pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/20 mt-12">
          
          {/* Slide Indicator Numbers */}
          <div className="flex items-center space-x-6">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`group text-left transition-colors duration-200 focus:outline-none cursor-pointer ${
                    isActive ? 'text-white' : 'text-sand-beige/50 hover:text-white'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className="text-xs font-semibold tracking-wider font-poppins">
                    0{idx + 1}
                  </div>
                  <div
                    className={`h-0.5 mt-1 transition-all duration-300 ${
                      isActive ? 'w-12 bg-sky-renewal' : 'w-6 bg-white/20 group-hover:bg-white/40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Progress Bar & Arrows */}
          <div className="flex items-center gap-4 text-white">
            <div className="w-24 h-0.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-renewal transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 text-sand-beige/70 hover:text-white transition focus:outline-none cursor-pointer"
              aria-label={isPaused ? 'Resume auto-slide' : 'Pause auto-slide'}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>

            <div className="flex items-center gap-1 border-l border-white/20 pl-3">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2 text-sand-beige/70 hover:text-white transition focus:outline-none cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2 text-sand-beige/70 hover:text-white transition focus:outline-none cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
