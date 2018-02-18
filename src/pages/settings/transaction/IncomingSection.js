import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getIncomingTransactions } from "reducers/payment/payout/transaction.actions";
import PayoutTimeline from "components/timeline/PayoutTimeline";

function OutgoingSection({ transactions }) {
  return (
    <Fragment>
      <p className="title is-5 has-text-centered">Incoming Transactions</p>
      <PayoutTimeline transactions={transactions}/>
    </Fragment>
  );
}


const mapStateToProps = ({ payment: { payout: { transaction: { byUser: { my: { transactions = [] } = {}} } } } }) => {
  return { transactions };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getIncomingTransactions("my"));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutgoingSection);



