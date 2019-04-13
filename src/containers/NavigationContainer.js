import React from "react";
import { Navigation } from "../components/Navigation";

export default class NavigationContainer extends React.Component {
  state = {
    isActive: false
  };

  // Show / Hide burger menu
  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <Navigation
        handleClick={this.handleClick}
        isActive={this.state.isActive}
      />
    );
  }
}
