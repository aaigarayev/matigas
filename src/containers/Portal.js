import React from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

export default class Portal extends React.Component {
  constructor() {
    super();
    this.el = document.createElement("div");
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
    document.body.style.position = "fixed";
  };

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
    document.body.style.position = "relative";
  };

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
