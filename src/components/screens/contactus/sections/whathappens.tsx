"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    id: 1,
    text: (
      <>
        You’ll get consulted on your particular inquiry professionally.{" "}
        <span className="font-semibold text-[#2563EB]">Diana</span> works
        swiftly within Busdev, so all of your questions related to tech stack,
        business,{" "}
        <span className="bg-[#38BDF8]/30 text-black px-1 rounded">
          “is it even possible to engineer?”
        </span>{" "}
        type of issues will be answered in great detail, or addressed to the
        right people.
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        Smooth RFX communication.{" "}
        <span className="bg-[#38BDF8]/30 text-black px-1 rounded">
          Our proposal will not make you wait for years
        </span>
        , we create proposals in a 96-hour timeframe, making sure your product
        went through multiple discussions and advice within Product Designers,
        Tech Leads, and Delivery Director.{" "}
        <span className="font-semibold">Max</span> and{" "}
        <span className="font-semibold">Andrew</span> got that covered!
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="font-semibold text-[#2563EB]">Viktoriia</span> has a
        secret naming “Product Delivery Mastermind”. She can supervise, manage
        and facilitate products in the most complicated engineering form.
        Basically, she can prove,{" "}
        <span className="bg-[#38BDF8]/30 text-black px-1 rounded">
          your complex product is not complex for us at all.
        </span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        Finally, your product roadmap is ready 🚀. This stage involves{" "}
        <span className="bg-[#38BDF8]/30 text-black px-1 rounded">
          full alignment of business goals, timelines, and delivery milestones
        </span>
        , ensuring that your journey ahead is crystal clear and future-proof.
      </>
    ),
  },
];

export default function WhatHappens() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F3F4F6] to-[#E5E7EB] py-20 px-4 sm:px-6 flex justify-center rounded-3xl shadow-lg">
      <div className="relative w-full max-w-5xl">
        {/* Steps Container */}
        <div className="flex flex-col items-center space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative flex flex-col items-center w-full`}
              data-aos={isMobile ? "fade-up" : index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Number always centered */}
              <div className="w-12 h-12 rounded-full bg-[#1E3A8A] border-2 border-[#38BDF8] flex items-center justify-center text-white font-bold mb-4">
                {step.id}
              </div>

              {/* Box */}
              <div
                className={`
                  bg-white text-gray-800 rounded-2xl shadow-md p-6 border border-gray-200
                  ${isMobile ? "w-full text-center" : "w-[45%]"}
                  ${!isMobile && index % 2 === 0 ? "self-start" : ""}
                  ${!isMobile && index % 2 !== 0 ? "self-end" : ""}
                `}
              >
                {step.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
