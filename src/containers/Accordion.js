import React from "react";
import { StyledAboutPageConditionsDescription } from "../styles/StyledAboutPageConditionsDescription";
import {
  StyledAboutPageConditionsButtonContainer,
  StyledAboutPageConditionsButton
} from "../styles/StyledAboutPageConditionsButtonContainer";

// Accordion for show/hide text with fading effect
export default class Accordion extends React.Component {
  state = {
    isOpen: false
  };

  // Changing the state once button is clicked.
  handleClickForHeightChange = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <React.Fragment>
        <StyledAboutPageConditionsDescription
          primary={this.state.isOpen ? true : false}
          // Using refs in order to access the maxHeight property and manipulate it using this.refs below.
          ref="descr"
          style={
            this.state.isOpen
              ? { maxHeight: this.refs.descr.scrollHeight + "px" }
              : { maxHeight: "0px" }
          }
        >
          {this.props.children}
        </StyledAboutPageConditionsDescription>
        <StyledAboutPageConditionsButtonContainer
          onClick={this.handleClickForHeightChange}
        >
          <StyledAboutPageConditionsButton isOpen={this.state.isOpen} />
        </StyledAboutPageConditionsButtonContainer>
      </React.Fragment>
    );
  }
}
