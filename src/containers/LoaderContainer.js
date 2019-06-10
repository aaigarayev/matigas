import React from "react";
import { Loader } from "../components/Loader";

export default class LoaderContainer extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount = () => {
    window.addEventListener("load", () => {
      this.setState({
        isLoading: false
      });
    });
  };

  render() {
    return (
      <React.Fragment>{this.state.isLoading && <Loader />}</React.Fragment>
    );
  }
}
