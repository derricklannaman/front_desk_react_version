import React from "react";

export class FormInput extends React.Component {
  render() {
    return(
      <div className="input-group">
        <label htmlFor="weight">{this.props.labelTitle}</label>
        <input type="text" name="weight"
               value={this.props.weight}
               className="form-control"
               onChange={(event) => this.props.changeHandler(event)}
        /><br/>
      </div>
    );
  }
}