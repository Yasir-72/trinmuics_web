"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

const panels = ["bg-[#F9E6CF]", "bg-[#F9E6CF]", "bg-[#F9E6CF]", "bg-[#F9E6CF]"];

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters = logoRef.current?.querySelectorAll("span");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (letters) {
      // Step 1: Animate letters in
      tl.fromTo(
        letters,
        { y: 50, opacity: 0, rotationX: 90, scale: 0.8, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.08,
        }
      );

      // Step 2: Subtle bounce pop
      tl.to(
        letters,
        { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 },
        "-=0.2"
      );

      // Step 3: Fade out the logo
      tl.to(
        logoRef.current,
        { opacity: 0, y: -30, duration: 0.8, ease: "power2.inOut" },
        "+=0.2"
      );
    }

    // Step 4: Panels animate after logo disappears
    tl.to(
      ".panel",
      {
        y: "-120%",
        rotate: -3,
        scale: 1.05,
        opacity: 0.85,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete,
          });
        },
      },
      "+=0.1"
    );
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden bg-white"
    >
      {/* Floating glows */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-[#00BFA6] opacity-20 blur-3xl top-16 left-16"></div>
      <div className="absolute w-[250px] h-[250px] rounded-full bg-[#F9E6CF] opacity-20 blur-3xl bottom-16 right-16"></div>

      {/* Logo */}
      <div
        ref={logoRef}
        className="relative z-10 text-6xl md:text-7xl font-extrabold text-[#00BFA6] drop-shadow-2xl flex space-x-1"
      >
        {"Trinmuics".split("").map((char, i) => (
          <span key={i} className="inline-block opacity-0">
            {char}
          </span>
        ))}
      </div>

      {/* Panels */}
      <div className="absolute inset-0 flex">
        {panels.map((color, i) => (
          <div
            key={i}
            className={`panel flex-1 ${color} mx-[2px] rounded-2xl`}
          />
        ))}
      </div>
    </div>
  );
}
