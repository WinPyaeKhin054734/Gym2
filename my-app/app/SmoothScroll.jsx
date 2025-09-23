'use client';

import { useEffect, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
    //   easing: (t) => 1 - Math.pow(2, -10 * t), // smooth expo ease-out
      smoothWheel: true,
      smoothTouch: false,
      direction: 'vertical',
      gestureOrientation: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenis.start();

    // Optional: keep only if other libs rely on native scroll events
    // lenis.on('scroll', () => {
    //   window.dispatchEvent(new Event('scroll'));
    // });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}