import React from "react";
import { StyledContactsPageContainer } from "../styles/StyledContactsPageContainer";
import { StyledContactFormTitleWrapper } from "../styles/StyledContactFormTitleWrapper";
import { StyledContactFormTitlePrimary } from "../styles/StyledContactFormTitlePrimary";
import { StyledContactFormTitleSecondary } from "../styles/StyledContactFormTitleSecondary";
import { StyledContactFormWrapper } from "../styles/StyledContactFormWrapper";
import { StyledContactsMapContainer } from "../styles/StyledContactsMapContainer";
import { StyledContactsLocation } from "../styles/StyledContactsLocation";
import { StyledContactsLocationTitle } from "../styles/StyledContactsLocationTitle";
import { StyledContactsMap } from "../styles/StyledContactsMap";
import ContactForm from "../containers/ContactForm";
import { StyledRentPageDocsIcon } from "../styles/StyledRentPageDocsIcon";
import { StyledContactsPhones } from "../styles/StyledContactsPhones";
import phones from "../libs/phones.json";

export const Contacts = () => {
  return (
    <React.Fragment>
      <StyledContactsPageContainer>
        <StyledContactFormWrapper>
          <StyledContactFormTitleWrapper>
            <StyledContactFormTitlePrimary>
              Хотите подключиться?
            </StyledContactFormTitlePrimary>
            <StyledContactFormTitleSecondary>
              Просто оставьте заявку.
            </StyledContactFormTitleSecondary>
            <ContactForm />
          </StyledContactFormTitleWrapper>
        </StyledContactFormWrapper>
      </StyledContactsPageContainer>
      <StyledContactsMapContainer>
        <StyledContactsLocation>
          <StyledContactsLocationTitle>
            Наши контакты:
          </StyledContactsLocationTitle>
          <StyledRentPageDocsIcon primary>&#9906;</StyledRentPageDocsIcon>
          проспект Сейфуллина 284, 25 кабинет <br></br>
          {phones.map(phone => (
            <React.Fragment>
              <StyledRentPageDocsIcon primary>&#9990;</StyledRentPageDocsIcon>
              <StyledContactsPhones>{phone.phone}</StyledContactsPhones>
              <br></br>
            </React.Fragment>
          ))}
        </StyledContactsLocation>
        <StyledContactsMap>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac2927ce9a527a612b7079784d6c70e6d192c23f12bcb18cf97e1e8d167308f62&amp;source=constructor"
            width="100%"
            height="400"
            frameborder="0"
          />
        </StyledContactsMap>
      </StyledContactsMapContainer>
    </React.Fragment>
  );
};
