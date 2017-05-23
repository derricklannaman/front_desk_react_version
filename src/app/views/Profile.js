import React from "react";

export class Profiles extends React.Component {

  render() {
    return(
      <div>
        <h1>Profile page</h1>
        <p>User id: {this.props.params.id}</p>
      </div>
    );
  }
}