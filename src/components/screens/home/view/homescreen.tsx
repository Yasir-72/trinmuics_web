import React from "react";
import HeroSection from "../sections/heroscection";
import ServiceSection from "../sections/servicesection";
import WhyChooseUs from "../sections/whysection";
import HowItWorks from "../sections/howsection";
import ClientSection from "../sections/clientscroll";
import CaseStudyCard from "../sections/casestudy";
export default function Homescreen() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs />
      <HowItWorks />
      <ClientSection />
      <CaseStudyCard />
    </>
  );
}
