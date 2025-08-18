import React from "react";
import Homescreen from "@/components/screens/home/view/homescreen";
import HeroSection from "@/components/screens/home/sections/heroscection";
import ServiceSection from "@/components/screens/home/sections/servicesection";
import WhyChooseUs from "@/components/screens/home/sections/whysection";
import HowItWorks from "@/components/screens/home/sections/howsection";
export default function Page() {
  return (
    <>
      <Homescreen />
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs />
      <HowItWorks />
    </>
  );
}
