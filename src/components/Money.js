import React, { Component } from 'react';
import PropTypes from "prop-types";
import { USDIcon } from "components/Icon";

export default class Money extends Component {
    static usd(amount) {
        return (
          <USDIcon>{amount}</USDIcon>
        )
    }
    static currency(currency, amount) {
        return (
            <span className="content">
                <span className="icon">
                    {currency}
                </span>
                <span className="icon">
                    {amount}
                </span>
            </span>
        )
    }
    render() {
        if (this.props.currency === "USD")
            return Money.usd(this.props.amount);
        else
            return Money.currency(this.props.amount);
    }
}

Money.propTypes = {
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
};