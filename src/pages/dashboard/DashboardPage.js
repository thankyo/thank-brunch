import React from "react";

import Profile from "components/Profile";

import Supported from "components/Projects/Project";
import Invite from "./Invite";
import ThankTransactions from "./PendingTransaction";

export default function supportDashboardPage({ id }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id={id}/>
        <Supported id={id}/>
      </div>
      <div className="column is-two-quarter">
        <Invite id={id}/>
        <ThankTransactions id={id}/>
      </div>
      <div className="column is-one-quarter">
      </div>
    </div>
  );
}
