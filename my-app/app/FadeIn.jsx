"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ className, children, duration = 1.8, delay = 0, y = 50 }) => {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    gsap.fromTo(
      el.current,
      { filter: "blur(12px)", autoAlpha: 0, y },
      {
        filter: "blur(0px)",
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.current,
          start: "top 80%", // animate when element enters viewport
          toggleActions: "play none none reverse", // fade out when leaving
        },
      }
    );
  }, [duration, delay, y]);

  return <div className={className} ref={el}>{children}</div>;
};

export default FadeIn;