import React from "react";
import { browserHistory } from "react-router";

export class User extends React.Component {
  onNavigateHome() {
    browserHistory.push("/home");
  }

  render() {
    return (
      <div className="">
        <div>
          <h4 class="interactive">Real-time Interactive knowledge</h4>
          <iframe
            id="embedded-human"
            frameBorder="0"
            width="600"
            height="600"
            allowFullScreen="true"
            src="https://human.biodigital.com/widget?be=1IqR&bgstd=51,64,77,255,255,255&ui-annotations=true&ui-tools=true&dk=f7662d9e47c2ba2b408c11262ec11535a905f4d3">
          </iframe>
        </div>

      </div>

    );
  }
}