import React from "react";
import HeroSection from "../sections/heroscection";
import ServiceSection from "../sections/servicesection";
import WhyChooseUs from "../sections/whysection";
import HowItWorks from "../sections/howsection";

export default function Homescreen() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs />
      <HowItWorks />
    </>
  );
}
