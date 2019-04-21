import React from "react";
import PropTypes from "prop-types";
import { StyledAboutPageConditionsDescription } from "../styles/StyledAboutPageConditionsDescription";

export default class Accordion extends React.Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <React.Fragment>
        <StyledAboutPageConditionsDescription
          primary={this.state.isOpen ? true : false}
        >
          {this.props.children}
        </StyledAboutPageConditionsDescription>
        <button onClick={this.handleClick} />
      </React.Fragment>
    );
  }
}
