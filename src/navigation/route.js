import React, { Component } from "react";
import Async from 'react-code-splitting';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import FacebookAuthPage from "../pages/landing/FacebookAuthPage";
import LandingPageDefault from "../pages/landing/LandingPage";
import NotFound from "./NotFound";

import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navigation from "./Navigation";

import SignUpPage from "../pages/auth/SignUpPage";

const TermsOfUse = (props) => <Async load={import('../pages/legal/TermsOfUsePage')} componentProps={props}/>;
const PrivacyPolicy = (props) => <Async load={import('../pages/legal/PrivacyPolicyPage')} componentProps={props}/>;
const RoadMap = (props) => <Async load={import('../pages/roadmap/RoadMapPage')} componentProps={props}/>;

const SupporterDashboard = (props) => <Async load={import("../pages/supporter/SupporterDashboardPage")}
                                             componentProps={props}/>;
const CreatorDashboard = (props) => <Async load={import("../pages/creator/CreatorDashboardPage")}
                                           componentProps={props}/>;

const LINKS = [
  { pathname: "/supporter/my", name: "Supporter", icon: "fa fa-user-circle-o" },
  { pathname: "/creator/my", name: "Creator", icon: "fa fa-paint-brush" }
];

export default class MainApp extends Component {
  render() {
    return (
      <div>
        <Helmet>
        </Helmet>
        <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
          <div>
            <Switch>
              <Route path="/supporter">
                <Navigation links={LINKS}/>
              </Route>
              <Route path="/creator">
                <Navigation links={LINKS}/>
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/" component={LandingPageDefault}/>

              <Route exact path="/auth" component={SignUpPage}/>
              <Route path="/auth/facebook" component={FacebookAuthPage}/>

              <Route path="/legal/terms" component={TermsOfUse}/>
              <Route path="/legal/privacy" component={PrivacyPolicy}/>
              <Route path="/roadmap" component={RoadMap}/>

              <Route path="/creator/:id" component={CreatorDashboard}/>

              <Route path="/supporter/:id" component={SupporterDashboard}/>

              <Route component={NotFound}/>
            </Switch>
            <Switch>
              <Route exact path="/">
                <Footer/>
              </Route>
              <Route path="/legal">
                <Footer/>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}