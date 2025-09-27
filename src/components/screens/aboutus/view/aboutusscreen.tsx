import React from "react";
import { OurIntroduction } from "../section/ourintroduction";
import { WhatWeDo } from "../section/whatwedo";
import { AdvantageTrinumics } from "../section/adavntagetrinumics";
import { OurPeopleAndCulture } from "../section/ourteam";
import TrinumicsWhoWeAre from "../section/whoweare";

export default function AboutUsScreen() {
  return (
    <>
      <OurIntroduction />
      <TrinumicsWhoWeAre />
      <WhatWeDo />
      <AdvantageTrinumics />
      <OurPeopleAndCulture />
    </>
  );
}
