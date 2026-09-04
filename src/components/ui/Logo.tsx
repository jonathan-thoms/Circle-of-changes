'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'color' | 'white' | 'subbrand-sammie';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onDark?: boolean;
  ariaLabel?: string;
}

export default function Logo({
  variant = 'color',
  className = '',
  size = 'md',
  href = '/',
  onDark = false,
  ariaLabel,
}: LogoProps) {
  const isWhite = variant === 'white' || onDark;
  const isSammie = variant === 'subbrand-sammie';

  const defaultLabel = isSammie
    ? "Sammie's Circles of Change Initiative"
    : 'Circles of Change Homepage';

  // Responsive height configurations
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  }[size];

  // Sammie's dedicated sub-brand variant
  if (isSammie) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02] focus:outline-none rounded-lg ${className}`}
        aria-label={ariaLabel || defaultLabel}
      >
        <img
          src="/images/sammies-logo-horizontal.png"
          alt="Sammie's Circles of Change"
          className={`${heightClasses} w-auto object-contain`}
        />
      </Link>
    );
  }

  // Primary Circles of Change brand logo
  return (
    <Link
      href={href}
      className={`inline-flex items-center group transition-transform duration-200 hover:scale-[1.02] focus:outline-none rounded-lg ${className}`}
      aria-label={ariaLabel || defaultLabel}
    >
      <img
        src={isWhite ? '/images/logo-light.png' : '/images/logo-dark.png'}
        alt="Circles of Change"
        className={`${heightClasses} w-auto object-contain transition-all duration-300 ${
          isWhite ? 'brightness-0 invert drop-shadow-sm' : ''
        }`}
      />
    </Link>
  );
}
