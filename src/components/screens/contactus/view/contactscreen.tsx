import React from "react";
import Details from "../sections/details";
import WhatHappens from "../sections/whathappens";

export default function ContractScreen() {
  return (
    <>
      <Details />
      <WhatHappens />
      {/* Later you can add other sections like this */}
      {/* <OtherComponent /> */}
    </>
  );
}
