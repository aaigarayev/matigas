import React, { Component } from "react";
import { Navigation } from "../components/Navigation";

export default class NavigationContainer extends Component {
  state = {
    isActive: false,
    allowClicks: true
  };

  // Show / Hide burger menu
  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive,
      allowClicks: false
    });
    // Prevent clicks until the animation will finish
    setTimeout(() => {
      this.setState({
        allowClicks: true
      });
    }, 1000);
  };

  render() {
    return (
      <Navigation
        handleClick={this.state.allowClicks ? this.handleClick : null}
        isActive={this.state.isActive}
      />
    );
  }
}
