import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroShape = () => {
  useEffect(() => {
    gsap.to('#shape-path', {
      duration: 6,
      attr: { d: 'M0,90 C25,70 55,50 95,10 L100,100 Z' },
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6ec4" stopOpacity="1" />
          <stop offset="100%" stopColor="#7873f5" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        id="shape-path"
        d="M0,100 C20,80 40,60 100,0 L100,100 Z"
        fill="url(#gradient)"
      />
    </svg>
  );
};

export default HeroShape;
