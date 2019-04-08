/**
 * Application entrypoint
 */

import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rent from "./pages/Rent";
import Contacts from "./pages/Contacts";
import Error from "./components/Error";
import { Navigation } from "./components/Navigation";

const App = () => (
  <Router>
    <Navigation />
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
