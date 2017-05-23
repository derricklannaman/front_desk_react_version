import React from "react";

export class SidePanel extends React.Component {
  render() {
    return(
      <div className="mdl-layout__drawer red">
        <span className="mdl-layout-title app-brand">FRONTDESK</span>
        <nav className="mdl-navigation">
          <div className="patient-profile picture"></div>
          <div className="summary">
            <div className="patient-profile age weight" ></div>

            </div>
          <div className="patient-profile height">Height </div>
          <div className="patient-profile next-visit">Next Visit</div>
          <div className="patient-profile last-visit">Last Visit</div>
        </nav>
      </div>
    );
  }
}