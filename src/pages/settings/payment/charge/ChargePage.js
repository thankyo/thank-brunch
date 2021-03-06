import React, { Fragment } from "react";
import ChargeAccountSection from "./ChargeAccountSection";
import EOMChargeSection from "./EOMChargesSection";
import PaymentLimitSection from "./ChargeLimitSection";
import OutgoingSection from "./PendingChargesSection";

export default function ChargePage() {
  return (
    <Fragment>
      <ChargeAccountSection/>
      <PaymentLimitSection/>
      <OutgoingSection/>
      <EOMChargeSection/>
    </Fragment>
  )
}