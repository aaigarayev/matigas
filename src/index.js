/**
 * Application entrypoint
 */

import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rent from "./pages/Rent";
import Contacts from "./pages/Contacts";
import Error from "./components/Error";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/rent" component={Rent} />
      <Route path="/contacts" component={Contacts} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
