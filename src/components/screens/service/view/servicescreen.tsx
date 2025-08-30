import React from "react";
import ServiceHeroSection from "../sections/heroservice";
import ServiceList from "../sections/servicelist";
import Methodologies from "../sections/methodologies";
import WhyChooseUs from "../sections/whychooseus";
import Industries from "../sections/industries";
import TechStack from "../sections/techstack";
import CtaBanner from "../sections/cta";
export default function ServiceScreen() {
  return (
    <>
      <ServiceHeroSection />
    <ServiceList />
      <Methodologies />
      <WhyChooseUs />
      <Industries />
      <TechStack />
      <CtaBanner />

    </>
  );
}
