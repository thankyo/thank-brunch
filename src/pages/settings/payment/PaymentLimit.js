import React, { Component } from "react";
import { connect } from "react-redux";
import { decrease, getLimit, increase } from "../../../reducers/payment/limit.actions";
import MoneyToCoffeeIcon from "../../../common/payment/MoneyToCoffeeIcon";
import { Icon } from "../../../common/Icon";
import Loading from "../../../common/Loading";

class PaymentLimit extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }
  componentWillMount() {
    let { limit: {  amount } } = this.props;
    if (amount !== 0) {
      this.setState({ loading: false })
    } else {
      this.props.getLimit().then(() => this.setState({ loading: false }));
    }
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="has-text-centered">
          <p className="title is-5">Monthly Limit</p>
          <Loading />
        </div>
      )
    }

    let { limit, decrease, increase, fill } = this.props;
    let { amount, currency } = limit;
    let cups = amount / 5;
    return (
      <div className="has-text-centered">
        <p className="title is-5">Monthly Limit</p>
        <MoneyToCoffeeIcon amount={amount} fill={fill} className="has-text-success"/>
        <div>
          <p className="title limit-cups">
            <span>{cups} cup{cups > 1 && "s"} of coffee</span>
          </p>
          <p className="limit-count-block">
            <a className="limit-button" disabled={cups === 1} onClick={() => decrease(limit)}>
              <Icon className="fa fa-minus-circle"/>
            </a>
            <span className="limit-count">
            &nbsp;<b>{amount}.0</b>&nbsp;
              <span>{currency}</span>
          </span>
            <a className="limit-button" onClick={() => increase(limit)}>
              <Icon className="fa fa-plus-circle"/>
            </a>
          </p>
        </div>
        <p className="limit-text subtitle is-6">we'll <b className="is-danger">never</b> charge you more, than that</p>
      </div>
    );
  }
}


const mapStateToProps = ({ payment: { limit } }) => {
  return { limit };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLimit: () => dispatch(getLimit()),
    increase: (limit) => dispatch(increase(limit)),
    decrease: (limit) => dispatch(decrease(limit))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentLimit);



