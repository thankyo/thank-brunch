import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import ProfileMenu from "../components/ProfileMenu";
import PaymentTransaction from "../components/PaymentTransaction";
import Braintree from "../components/payment/Braintree";


export default class Payments extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="container profile">
                    <Profile id={this.props.params.id}/>
                    <ProfileMenu/>
                    <Braintree/>
                    <div className="section">
                        <PaymentTransaction id={this.props.params.id}/>
                    </div>
                </div>
            </div>
        );
    }
}

