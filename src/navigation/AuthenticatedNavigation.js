import React, { Fragment } from "react";
import { connect } from "react-redux";
import auth from "reducers/util/auth";
import { LogOutIcon } from "components/Icon";
import { Link } from "react-router-dom";
import Brand from "components/Brand";
import UserImage from "./UserImage";

const NavigationLink = ({ name, icon, pathname, isActive, isMobile }) => {
  let linkClassName = isMobile === true ? "is-mobile is-hidden-tablet is-hidden-desktop" : isMobile === false ? "is-hidden-mobile" : "";
  return (
    <li className={isActive ? "is-active" : ""}>
      <Link to={pathname} className={linkClassName}>
        {name}
      </Link>
    </li>
  );
};

let AuthenticatedNavigation = ({ links, contributions }) => (
  <Fragment>
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/contribution/my" style={{ paddingTop: "7px" }}>
              <Brand/>
            </Link>
            <a className="navbar-burger burger is-active" onClick={auth.logout}>
              <span/>
              <span/>
              <span/>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
                <span className="navbar-item">
                  <a onClick={auth.logout} className="button is-primary is-inverted is-outlined">
                    <LogOutIcon>Log Out</LogOutIcon>
                  </a>
                </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="hero-body">
      <div className="container">
        <nav className="level">
          <div className="level-item is-pulled-left">
            <UserImage/>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Contributions</p>
              <p className="title">{contributions}</p>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div className="hero-foot">
      <div className="container">
        <nav className="tabs is-boxed">
          <ul>
            {links.map((link, i) => <NavigationLink key={i} {...link}/>)}
          </ul>
        </nav>
      </div>
    </div>
  </Fragment>
);

const mapStateToProps = ({ navigation: { links }, statistic: { contribution: { my } } }) => {
  return {
    links,
    contributions: my.contributions || 0
  };
};

AuthenticatedNavigation =  connect(mapStateToProps)(AuthenticatedNavigation);

export default AuthenticatedNavigation;