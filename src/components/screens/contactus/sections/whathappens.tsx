"use client";

import React, { useEffect } from "react";
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
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
      offset: 120, // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F3F4F6] to-[#E5E7EB] py-20 px-6 flex justify-center rounded-3xl shadow-lg">
      <div className="relative w-full max-w-5xl">
        {/* Steps Container */}
        <div className="flex flex-col items-center space-y-20">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative flex items-center w-full ${
                step.id === 4
                  ? "flex-col justify-center"
                  : index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
              data-aos={
                step.id === 4
                  ? "zoom-in-up"
                  : index % 2 === 0
                  ? "fade-right"
                  : "fade-left"
              }
            >
              {/* LEFT box for odd steps */}
              {index % 2 === 0 && step.id !== 4 && (
                <div className="w-[45%] bg-white text-gray-800 rounded-2xl shadow-md p-6 border border-gray-200">
                  {step.text}
                </div>
              )}

              {/* Timeline with number + dashed line */}
              {step.id !== 4 && (
                <div className="flex flex-col items-center mx-6 relative">
                  {/* Circle number */}
                  <div
                    className="w-12 h-12 rounded-full bg-[#1E3A8A] border-2 border-[#38BDF8] 
                    flex items-center justify-center text-white font-bold z-10"
                  >
                    {step.id}
                  </div>

                  {/* Dashed line connecting to next number */}
                  {step.id !== steps.length && (
                    <div className="w-0.5 flex-grow border-l-2 border-dashed border-[#2563EB]"></div>
                  )}
                </div>
              )}

              {/* RIGHT box for even steps */}
              {index % 2 !== 0 && step.id !== 4 && (
                <div className="w-[45%] bg-white text-gray-800 rounded-2xl shadow-md p-6 border border-gray-200">
                  {step.text}
                </div>
              )}

              {/* LAST STEP (number above, then box below, with connecting dashed line) */}
              {step.id === 4 && (
                <div className="flex flex-col items-center">
                  {/* Number on top */}
                  <div className="w-12 h-12 rounded-full bg-[#1E3A8A] border-2 border-[#38BDF8] flex items-center justify-center text-white font-bold mb-4">
                    4
                  </div>

                  {/* Dashed line from number to box */}
                  <div className="w-0.5 h-8 border-l-2 border-dashed border-[#2563EB] mb-4"></div>

                  {/* Big centered box */}
                  <div className="w-[75%] bg-white text-gray-800 rounded-2xl shadow-xl p-10 border border-gray-200 text-lg">
                    {step.text}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
