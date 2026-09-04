'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'color' | 'white' | 'subbrand-sammie';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onDark?: boolean;
  ariaLabel?: string;
  imageLight?: string;
  imageDark?: string;
}

export default function Logo({
  variant = 'color',
  className = '',
  size = 'md',
  href = '/',
  onDark = false,
  ariaLabel,
  imageLight = '/images/logo-light.png',
  imageDark = '/images/logo-dark.png',
}: LogoProps) {
  // Sizing configurations
  const sizeClasses = {
    sm: { icon: 'w-7 h-7', title: 'text-lg', subtitle: 'text-[10px]', img: 'h-7' },
    md: { icon: 'w-9 h-9', title: 'text-xl', subtitle: 'text-xs', img: 'h-9' },
    lg: { icon: 'w-12 h-12', title: 'text-2xl', subtitle: 'text-sm', img: 'h-12' },
  }[size];

  const isWhite = variant === 'white' || onDark;
  const isSammie = variant === 'subbrand-sammie';

  // Gracefully detect if user has dropped custom image assets into public/images/
  const [lightImgLoaded, setLightImgLoaded] = useState(false);
  const [darkImgLoaded, setDarkImgLoaded] = useState(false);

  const defaultLabel = isSammie
    ? "Sammie's Circles of Change Initiative"
    : 'Circles of Change Homepage';

  const showCustomImage = !isSammie && (isWhite ? lightImgLoaded : darkImgLoaded);

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-green/50 rounded-lg ${className}`}
      aria-label={ariaLabel || defaultLabel}
    >
      {/* Background Preloaders for custom user logos (flicker-free detection) */}
      {!isSammie && (
        <>
          <img
            src={imageLight}
            alt=""
            className="hidden"
            onLoad={() => setLightImgLoaded(true)}
            onError={() => setLightImgLoaded(false)}
          />
          <img
            src={imageDark}
            alt=""
            className="hidden"
            onLoad={() => setDarkImgLoaded(true)}
            onError={() => setDarkImgLoaded(false)}
          />
        </>
      )}

      {/* Render user's custom logo image when available */}
      {showCustomImage ? (
        <img
          src={isWhite ? imageLight : imageDark}
          alt="Circles of Change"
          className={`${sizeClasses.img} w-auto object-contain transition-opacity duration-300`}
        />
      ) : (
        /* Built-in high-fidelity vector SVG & typography fallback */
        <div className="inline-flex items-center gap-2.5">
          {/* Brand SVG Mark: Three dynamic intertwined circular petals */}
          <div
            className={`relative flex-shrink-0 ${sizeClasses.icon}`}
            style={{
              width: size === 'sm' ? '28px' : size === 'lg' ? '48px' : '36px',
              height: size === 'sm' ? '28px' : size === 'lg' ? '48px' : '36px',
            }}
          >
            <svg
              viewBox="0 0 48 48"
              width={size === 'sm' ? 28 : size === 'lg' ? 48 : 36}
              height={size === 'sm' ? 28 : size === 'lg' ? 48 : 36}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-sm"
              style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }}
            >
              {isWhite && !isSammie ? (
                <>
                  {/* White monochrome version for dark/transparent backgrounds */}
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeDasharray="90 20"
                    strokeLinecap="round"
                    className="opacity-95"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="11"
                    stroke="#A3D9FF"
                    strokeWidth="3"
                    strokeDasharray="45 15"
                    strokeLinecap="round"
                  />
                  <circle cx="24" cy="24" r="4.5" fill="#FFD000" />
                </>
              ) : isSammie ? (
                <>
                  {/* Sammie's Sub-brand variant */}
                  <circle
                    cx="24"
                    cy="24"
                    r="19"
                    stroke={onDark ? '#FFFFFF' : '#114B5F'}
                    strokeWidth="3.5"
                    strokeDasharray="80 18"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="12"
                    stroke={onDark ? '#A3D9FF' : '#317B78'}
                    strokeWidth="3"
                  />
                  <path
                    d="M24 29.5s-6-4.2-6-7.8c0-2 1.6-3.7 3.5-3.7 1.4 0 2.2.8 2.5 1.4.3-.6 1.1-1.4 2.5-1.4 1.9 0 3.5 1.7 3.5 3.7 0 3.6-6 7.8-6 7.8z"
                    fill={onDark ? '#9FE7C1' : '#A3D9FF'}
                  />
                </>
              ) : (
                <>
                  {/* Primary Color Version on white background */}
                  <circle
                    cx="24"
                    cy="24"
                    r="19"
                    stroke="#114B5F"
                    strokeWidth="3.5"
                    strokeDasharray="75 25"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="13"
                    stroke="#317B78"
                    strokeWidth="3"
                    strokeDasharray="50 18"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="7"
                    stroke="#A3D9FF"
                    strokeWidth="2.5"
                    strokeDasharray="30 10"
                    strokeLinecap="round"
                  />
                  <circle cx="24" cy="24" r="3.5" fill="#1A7F5A" />
                </>
              )}
            </svg>
          </div>

          {/* Typography */}
          <div className="flex flex-col text-left">
            {isSammie ? (
              <>
                <span
                  className={`font-poppins font-bold tracking-tight leading-tight ${
                    onDark ? 'text-white' : 'text-deep-ocean'
                  } ${sizeClasses.title}`}
                >
                  Sammie&apos;s <span className={onDark ? 'text-sky-renewal' : 'text-teal-green'}>Circles</span>
                </span>
                <span
                  className={`font-poppins font-medium tracking-wide uppercase ${
                    onDark ? 'text-sand-beige/90' : 'text-teal-green'
                  } ${sizeClasses.subtitle}`}
                >
                  of Change Initiative
                </span>
              </>
            ) : (
              <>
                <span
                  className={`font-poppins font-bold tracking-tight leading-none ${
                    isWhite ? 'text-white drop-shadow-sm' : 'text-deep-ocean'
                  } ${sizeClasses.title}`}
                >
                  Circles<span className={isWhite ? 'text-earth-yellow' : 'text-teal-green'}>.</span>
                </span>
                <span
                  className={`font-poppins font-semibold tracking-wider uppercase ${
                    isWhite ? 'text-sand-beige/95' : 'text-teal-green'
                  } ${sizeClasses.subtitle}`}
                >
                  of Change
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}
