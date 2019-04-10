import styled, { css, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigationItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  width: 160px;
  color: #282b2b;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1.1px;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    color: #00838f;
  }
  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
    margin: 0;
    right: 0;
    transition-delay: 0.5s;
    opacity: ${props => (props.props ? "1" : "0")};
    padding: ${props => (props.primary ? "9vh 20px 15vh" : "9vh 20px 9vh")};
    animation-name: ${props => (props.props ? fadeIn : "")};
    animation-duration: 0.5s;
    animation-delay: 0.5s;
  }
`;

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateX(100px);
}

to {
  opacity: 1;
  transform: translateX(0px);
}
`;
