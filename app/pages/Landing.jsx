import React, {Component} from "react";
import Footer from "../components/Footer";
import Hero from "../components/landing/Hero";
import Creator from "../components/landing/Creator";
import Contributor from "../components/landing/Contributor";
import HowItWorks from "../components/landing/HowItWorks";
import Contact from "../components/Contact";
import ComponentWrap from "../components/ComponentWrap";

export default class Landing extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <Contributor/>
                <Creator/>
                <HowItWorks/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}
