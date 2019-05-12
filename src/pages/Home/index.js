import React from "react";
import { StyledMainPageBG } from "../../styles/StyledMainPageBG";
import { StyledMainPageTitleContainer } from "../../styles/StyledMainPageTitleContainer";
import {
  StyledMainPageTitle,
  StyledMainPageSubTitle
} from "../../styles/StyledMainPageTitle";
import {
  StyledMainPageButton,
  StyledMainPageButtonDescr
} from "../../styles/StyledMainPageButton";

export default class Home extends React.Component {
  render() {
    return (
      <StyledMainPageBG>
        <StyledMainPageTitleContainer>
          <StyledMainPageTitle>Таксопарк MATIGAS</StyledMainPageTitle>
          <StyledMainPageSubTitle>
            С нами вы сможете зарабатывать от 250000тг.
          </StyledMainPageSubTitle>
          <StyledMainPageSubTitle>
            Оффициальный партнер UBER и Яндекс Такси
          </StyledMainPageSubTitle>
          <StyledMainPageSubTitle>
            Самая маленькая комиссия в Казахстане (от 2.7%)
          </StyledMainPageSubTitle>
          <StyledMainPageButton>
            <StyledMainPageButtonDescr>Подключиться</StyledMainPageButtonDescr>
          </StyledMainPageButton>
        </StyledMainPageTitleContainer>
      </StyledMainPageBG>
    );
  }
}
