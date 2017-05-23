import React from "react";
import { Link } from "react-router";
import { SidePanel } from "./SidePanel";

export const TopNavigation = (props) => {
  return(
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
                mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="organization-title"></span>
          <span className="platform-title"> Patient Empowerment Platform</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <span><Link className="mdl-navigation__link top-nav" to={"/home"} >Dashboard</Link></span>
            <span><Link className="mdl-navigation__link top-nav" to={"/user/10"} >User</Link></span>
            <span><Link className="mdl-navigation__link top-nav" to={"/prescriptions"} >Prescriptions</Link></span>
            <span><Link className="mdl-navigation__link top-nav" to={"/goals"} >Goals</Link></span>
            <span><Link className="mdl-navigation__link top-nav" to={"/profile/10"} >Profile</Link></span>
            <span><Link className="mdl-navigation__link top-nav" to={"/bmi-calculator"} >BMI Calculator</Link></span>
            <span><Link className="mdl-navigation__link top-nav" to={"#"} >Sign Out</Link></span>
          </nav>
        </div>
      </header>

    <SidePanel/>
    </div>
  );
}