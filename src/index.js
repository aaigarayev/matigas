// Those two dependencies needs to be imported here in order to make the app work on IE11
import "babel-polyfill";
import "core-js";

import React from "react";
import { render } from "react-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rent from "./pages/Rent";
import Contacts from "./pages/Contacts";
import NavigationContainer from "./containers/NavigationContainer";

const App = () => (
  <React.Fragment>
    <NavigationContainer />
    <Home />
    <About />
    <Rent />
    <Contacts />
  </React.Fragment>
);

render(<App />, document.getElementById("app"));
