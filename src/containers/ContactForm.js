import React from "react";
import {
  StyledContactFormInput,
  StyledContactFormWrapper
} from "../styles/StyledContactFormInput";

export default class ContactForm extends React.Component {
  state = {
    firstName: null,
    lastName: null,
    phone: null,
    year: null,
    formErrors: {
      firstName: "",
      lastName: "",
      phone: "",
      year: ""
    }
  };

  render() {
    return (
      <StyledContactFormWrapper>
        <StyledContactFormInput
          name="firstname"
          type="text"
          placeholder="Имя"
          required
        />
        <StyledContactFormInput
          name="lastname"
          type="text"
          placeholder="Фамилия"
          required
        />
        <StyledContactFormInput
          name="lastname"
          type="text"
          placeholder="Номер телефона"
          required
        />
        <StyledContactFormInput
          name="lastname"
          type="number"
          placeholder="Год выпуска авто"
          required
        />
      </StyledContactFormWrapper>
    );
  }
}
