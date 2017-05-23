import React from "react";
import { Header } from "./buildCalculator/Header";
import { FormInput } from "./buildCalculator/FormInput";

export class Calculator extends React.Component {

  constructor(props) {
    super();
    this.state = {
      heightInFeet: 0,
      heightInInches: 0,
      weight: 0,
      calculatedResult: 0,
      calculatedFootHeight: 0
    };
  }

  onChangeHandleHeightInFeet(event) {
    this.setState({
      heightInFeet: event.target.value
    });
  }

  onChangeHandleHeightInInches(event) {
    this.setState({
      heightInInches: event.target.value
    });
  }

  onHandleWeightChange(event) {
    this.setState({
      weight: event.target.value
    });
  }

  onChangeCalculateBMI() {
    let weightInput = parseInt(this.state.weight);
    let convertHeightToInches = parseInt(this.state.heightInFeet * 12);
    let inches = parseInt(this.state.heightInInches);
    let totalInches = convertHeightToInches + inches ;

    this.setState({
      weight: weightInput,
      heightInFeet: this.state.heightInFeet,
      heightInInches: inches,
      calculatedResult: (this.state.weight / ( totalInches * totalInches ) ) * 703
    });
  }

  render() {
    return(
      <div className="calculator">
        <Header title="BMI Calculator"/>
        <div className="container calculatorBody">

          <FormInput
              labelTitle="Enter Weight"
              weight={this.state.weight}
              changeHandler={this.onHandleWeightChange.bind(this)}
          />
          <div className="input-group">
            <label htmlFor="heightInFeet">enter height in feet</label>
            <input type="text" name="heightInFeet"
                   value={this.state.heightInFeet}
                   className="form-control"
                   onChange={(event) => this.onChangeHandleHeightInFeet(event)}/><br/>
          </div>

          <div className="input-group">
            <label htmlFor="heightInInches">enter height in inches</label>
            <input type="text" name="heightInInches"
                   value={this.state.heightInInches}
                   className="form-control"
                   onChange={(event) => this.onChangeHandleHeightInInches(event)}/>
          </div>
          <br/>

          <div className="input-group">
            <button onClick={this.onChangeCalculateBMI.bind(this)}
                    className="btn btn-success form-control">Calculate BMI
            </button>
          </div>
        </div>

        <hr/>
        <div className="container">
          <div className="results-wrapper">
            <p>BMI Results:</p>
            <span className="results" >
              { Math.round(this.state.calculatedResult * 100) / 100 }
            </span>
            <p>
              You weigh {this.state.weight} and
              are {this.state.heightInFeet} feet
              and {this.state.heightInInches} inches tall
            </p>
          </div>
        </div>
      </div>
    );
  }
}