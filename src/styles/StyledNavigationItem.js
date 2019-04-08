import styled from "styled-components";
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
`;
