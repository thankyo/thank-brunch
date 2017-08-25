import React, { Component } from "react";
import Navigation from "../../navigation/Navigation";
import ComponentWrap from "../components/ComponentWrap";
import Profile from "../components/Profile";
import IntegrationContent from "../components/integration/IntegrationContent";
import EarnedThisMonth from "../components/payment/EarnedThisMonth";
import PayoutAccount from "../components/payment/PayoutAccount";

export default class CreatorDashboardPage extends Component {
  render() {
    let { params: { id } } = this.props;
    return (
      <div>
        <Navigation/>
        <ComponentWrap>
          <div className="columns">
            <div className="column is-one-quarter">
              <Profile id={id}/>
            </div>
            <div className="column is-two-quarter">
              <IntegrationContent id={id}/>
            </div>
            <div className="column is-one-quarter">
              <article className="message is-info">
                <div className="message-body">
                  <EarnedThisMonth/>
                </div>
              </article>
              <PayoutAccount id={id}/>
            </div>
          </div>
        </ComponentWrap>
      </div>
    );
  }
}