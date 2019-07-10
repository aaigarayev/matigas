import React from "react";
import { StyledContactsPageContainer } from "../styles/StyledContactsPageContainer";
import { StyledContactFormTitleWrapper } from "../styles/StyledContactFormTitleWrapper";
import { StyledContactFormTitlePrimary } from "../styles/StyledContactFormTitlePrimary";
import { StyledContactFormTitleSecondary } from "../styles/StyledContactFormTitleSecondary";
import { StyledContactFormWrapper } from "../styles/StyledContactFormWrapper";
import ContactForm from "../containers/ContactForm";

export const Contacts = () => {
  return (
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
  );
};
