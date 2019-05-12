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
    console.log(this.refs.descr.scrollHeight);
  };

  render() {
    const styles = () => {
      if (this.state.isOpen) {
        return {
          maxHeight: this.refs.descr.scrollHeight + "px"
        };
      } else {
        return {
          maxHeight: "0px"
        };
      }
    };
    return (
      <React.Fragment>
        <StyledAboutPageConditionsDescription
          primary={this.state.isOpen ? true : false}
          ref="descr"
          style={
            this.state.isOpen
              ? { maxHeight: this.refs.descr.scrollHeight + "px" }
              : { maxHeight: "0px" }
          }
        >
          {this.props.children}
        </StyledAboutPageConditionsDescription>
        <button onClick={this.handleClick} />
      </React.Fragment>
    );
  }
}
