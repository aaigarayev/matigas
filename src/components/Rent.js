import React from "react";
import { StyledRentPage } from "../styles/StyledRentPage";
import { StyledOtherPagesTitle } from "../styles/StyledOtherPagesTitle";
import { StyledRentPageCarsContainer } from "../styles/StyledRentPageCarsContainer";
import { StyledRentPageCarImg } from "../styles/StyledRentPageCarImg";
import { StyledRentPageConditions } from "../styles/StyledRentPageConditions";
import { StyledRentPageDocsContainer } from "../styles/StyledRentPageDocsContainer";
import { StyledRentPageDocs } from "../styles/StyledRentPageDocs";
import { StyledRentPageDocsDescr } from "../styles/StyledRentPageDocsDescr";
import { StyledRentPageDocsIcon } from "../styles/StyledRentPageDocsIcon";
import cars from "../libs/cars.json";
import tenant from "../libs/tenant.json";
import guarantee from "../libs/guarantee.json";

export const Rent = () => {
  return (
    <StyledRentPage>
      <StyledOtherPagesTitle>Машины на выкуп</StyledOtherPagesTitle>
      {cars.map(car => (
        <StyledRentPageCarsContainer key={car.id}>
          <StyledRentPageCarImg src={car.img} alt={car.title} />
          <StyledRentPageConditions>
            Наличие узнавать по телефону.
          </StyledRentPageConditions>
          <StyledRentPageConditions>Условия:</StyledRentPageConditions>
          <StyledRentPageConditions>
            Цена от 6000 тг (на 2 года, цена зависит от машины!)
          </StyledRentPageConditions>
        </StyledRentPageCarsContainer>
      ))}
      <StyledRentPageDocsContainer>
        <StyledRentPageDocs>
          Для арендатора:
          {tenant.map(condition => (
            <div>
              <StyledRentPageDocsIcon>&#10003;</StyledRentPageDocsIcon>
              <StyledRentPageDocsDescr key={condition.id}>
                {condition.description}
              </StyledRentPageDocsDescr>
            </div>
          ))}
        </StyledRentPageDocs>
      </StyledRentPageDocsContainer>
      <StyledRentPageDocsContainer>
        <StyledRentPageDocs>
          Для гаранта:
          {guarantee.map(condition => (
            <div>
              <StyledRentPageDocsIcon>&#10003;</StyledRentPageDocsIcon>
              <StyledRentPageDocsDescr key={condition.id}>
                {condition.description}
              </StyledRentPageDocsDescr>
            </div>
          ))}
        </StyledRentPageDocs>
      </StyledRentPageDocsContainer>
    </StyledRentPage>
  );
};
