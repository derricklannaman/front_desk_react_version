import React from "react";
import { TopNavigation } from "./TopNavigation";


export class Root extends React.Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <div className="container mainContentWrapper">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}