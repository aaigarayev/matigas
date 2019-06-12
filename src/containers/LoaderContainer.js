import React from "react";
import { Loader } from "../components/Loader";

export default class LoaderContainer extends React.Component {
  state = {
    isLoaded: false
  };

  componentDidMount = () => {
    window.addEventListener("load", () => {
      this.setState({
        isLoaded: false
      });
    });
  };

  render() {
    return <React.Fragment>{this.state.isLoaded && <Loader />}</React.Fragment>;
  }
}
