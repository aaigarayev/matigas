import React from "react";
import { StyledNavigationContainer } from "../styles/StyledNavigationContainer";
import { StyledNavigationItem } from "../styles/StyledNavigationItem";
import { StyledNavigation } from "../styles/StyledNavigation";
import { StyledNavigationLogo } from "../styles/StyledNavigationLogo";
import {
  StyledBurger,
  StyledLine1,
  StyledLine2,
  StyledLine3
} from "../styles/StyledBurger";

// Navigation menu Functional Component
export const Navigation = props => {
  return (
    <StyledNavigationContainer>
      <StyledNavigationLogo />
      <StyledBurger onClick={props.handleClick}>
        <StyledLine1 isActive={props.isActive} />
        <StyledLine2 isActive={props.isActive} />
        <StyledLine3 isActive={props.isActive} />
      </StyledBurger>
      <StyledNavigation isActive={props.isActive}>
        <StyledNavigationItem onClick={props.handleClick} to="/">
          Главная
        </StyledNavigationItem>
        <StyledNavigationItem onClick={props.handleClick} to="/about">
          Условия
        </StyledNavigationItem>
        <StyledNavigationItem onClick={props.handleClick} to="/rent">
          Машины на выкуп
        </StyledNavigationItem>
        <StyledNavigationItem
          onClick={props.handleClick}
          primary={true}
          to="/contacts"
        >
          Контакты
        </StyledNavigationItem>
      </StyledNavigation>
    </StyledNavigationContainer>
  );
};
