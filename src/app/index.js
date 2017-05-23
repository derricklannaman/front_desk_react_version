import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { Calculator } from "./components/Calculator";
import { Prescription } from "./views/Prescription";
import { Goals } from "./views/Goals";
import { Profiles } from "./views/Profile";
import { BmiCalculator } from "./views/Bmi";

class App extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path={"/"} component={Root} >
          <IndexRoute component={Home} />
          <Route path={"user/:id"} component={User} />
          <Route path={"home"} component={Home} />
          <Route path={"prescriptions"} component={Prescription} />
          <Route path={"goals"} component={Goals} />
          <Route path={"bmi-calculator"} component={Calculator} />
          <Route path={"profile/:id"} component={Profiles} />
        </Route>
      </Router>
    );
  }
}

render(<App/>, document.getElementById("app"));
