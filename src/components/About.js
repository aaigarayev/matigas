import React from "react";
import { StyledAboutPage } from "../styles/StyledAboutPage";
import { StyledAboutPageConditions } from "../styles/StyledAboutPageConditions";
import { StyledAboutPageConditionsItem } from "../styles/StyledAboutPageConditionsItem";
import { StyledAboutPageConditionsIcon } from "../styles/StyledAboutPageConditionsIcon";
import { StyledAboutPageConditionsTitle } from "../styles/StyledAboutPageConditionsTitle";
import { StyledOtherPagesTitle } from "../styles/StyledOtherPagesTitle";
import Accordion from "../containers/Accordion";
import conditions from "../libs/conditions.json";

export const About = () => {
  return (
    <StyledAboutPage>
      <StyledOtherPagesTitle>Условия</StyledOtherPagesTitle>
      <StyledAboutPageConditions>
        {conditions.map(each => (
          <StyledAboutPageConditionsItem key={each.id}>
            <StyledAboutPageConditionsIcon src={each.img} alt="no" />

            <StyledAboutPageConditionsTitle>
              {each.title}
            </StyledAboutPageConditionsTitle>
            <Accordion>{each.description}</Accordion>
          </StyledAboutPageConditionsItem>
        ))}
      </StyledAboutPageConditions>
    </StyledAboutPage>
  );
};
