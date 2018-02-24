import React from "react";
import { connect } from "react-redux";

import { getPayouts, getPayoutsCSV } from "reducers/payment/payout/transaction.actions";
import EOMPayoutTimeline from "components/timeline/EOMPayoutTimeline";
import RefreshButton from "components/RefreshButton";

function PayoutSection({ payouts, getPayoutsCsv }) {
  return (
    <section className="section">
      <p className="title is-5 has-text-centered">Payouts</p>
      <div className="is-pulled-left">
        <RefreshButton submitting={false} className="is-info" onClick={getPayoutsCsv}>Download CSV</RefreshButton>
      </div>
      <EOMPayoutTimeline payouts={payouts}/>
    </section>
  );
}


const mapStateToProps = ({ payment: { payout: { transaction: { payout: { my: { payouts = [] } = {} } } } } }) => {
  return { payouts };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPayouts("my"));
  return {
    getPayoutsCsv: () => dispatch(getPayoutsCSV("my"))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayoutSection);