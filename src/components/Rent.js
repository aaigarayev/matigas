import React from "react";
import { StyledRentPage } from "../styles/StyledRentPage";
import { StyledOtherPagesTitle } from "../styles/StyledOtherPagesTitle";
import { StyledRentPageCarsContainer } from "../styles/StyledRentPageCarsContainer";
import { StyledRentPageCarImg } from "../styles/StyledRentPageCarImg";
import { StyledRentPageCarTitle } from "../styles/StyledRentPageCarTitle";
import cars from "../libs/cars.json";

export const Rent = () => {
  return (
    <StyledRentPage>
      <StyledOtherPagesTitle>Аренда Авто</StyledOtherPagesTitle>
      {cars.map(car => (
        <StyledRentPageCarsContainer key={car.id}>
          <StyledRentPageCarTitle>{car.title}</StyledRentPageCarTitle>
          <StyledRentPageCarImg src={car.img} alt={car.title} />
        </StyledRentPageCarsContainer>
      ))}
    </StyledRentPage>
  );
};
