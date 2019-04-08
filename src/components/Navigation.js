import React from "react";
import { StyledNavigationContainer } from "../styles/StyledNavigationContainer";
import { StyledNavigationItem } from "../styles/StyledNavigationItem";
import { StyledNavigation } from "../styles/StyledNavigation";

export const Navigation = () => {
  return (
    <StyledNavigationContainer>
      <StyledNavigation>
        <StyledNavigationItem to="/">Главная</StyledNavigationItem>
        <StyledNavigationItem to="/about">О нас</StyledNavigationItem>
        <StyledNavigationItem to="/rent">Аренда авто</StyledNavigationItem>
        <StyledNavigationItem to="/contacts">Контакты</StyledNavigationItem>
      </StyledNavigation>
    </StyledNavigationContainer>
  );
};
