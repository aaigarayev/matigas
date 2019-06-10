// Those two dependencies needs to be imported here in order to make the app work on IE11
import "babel-polyfill";
import "core-js";

import React from "react";
import { render } from "react-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Rent } from "./components/Rent";
import { Contacts } from "./components/Contacts";
import LoaderContainer from "./containers/LoaderContainer";
import { StyledLine } from "./styles/StyledLine";
import NavigationContainer from "./containers/NavigationContainer";

const App = () => (
  <React.Fragment>
    <LoaderContainer />
    <NavigationContainer />
    <Home />
    <About />
    <StyledLine />
    <Rent />
    <Contacts />
  </React.Fragment>
);

render(<App />, document.getElementById("app"));
