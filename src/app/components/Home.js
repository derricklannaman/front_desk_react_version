import React from "react";
import { browserHistory } from "react-router";

export class Home extends React.Component {
  onNavigateUser() {
    browserHistory.push("/user/10");
  }

  onNavigateCalculator() {
    browserHistory.push("/bmi-calculator");
  }

  render() {
    return(
        <div>
          <h1 className="text-center">Dashboard</h1>
          <div className="demo-charts mdl-cell mdl-cell--12-col mdl-grid">
            {/* Calculator */}
            <button onClick={this.onNavigateCalculator} viewBox="0 0 1 1" className="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop action-panel">
              <div className="inner-action-panel">
                <h4 className="inner-action-name">BMI Calculator</h4>
                <i className="fa fa-calculator" aria-hidden="true"></i>
              </div>
            </button>
            {/* Body View */}
            <button onClick={this.onNavigateUser} viewBox="0 0 1 1" className="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop action-panel">
              <div className="inner-action-panel">
                <h4 className="inner-action-name">Body View</h4>
                <i className="fa fa-medkit dashboard" aria-hidden="true"></i>
              </div>
            </button>

          </div>
        </div>
    );
  }
}

