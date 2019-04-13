// Those two dependencies needs to be imported here in order to make the app work on IE11
import "babel-polyfill";
import "core-js";

import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rent from "./pages/Rent";
import Contacts from "./pages/Contacts";
import Error from "./components/Error";
import NavigationContainer from "./containers/NavigationContainer";

const App = () => (
  <Router>
    <NavigationContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/rent" component={Rent} />
      <Route path="/contacts" component={Contacts} />
      <Route component={Error} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById("app"));
