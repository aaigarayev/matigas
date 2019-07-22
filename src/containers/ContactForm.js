import React from "react";
import {
  StyledContactFormInput,
  StyledContactFormWrapper,
  StyledContactFormError
} from "../styles/StyledContactFormInput";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  year: "",
  firstNameError: "",
  lastNameError: "",
  phoneError: "",
  yearError: ""
};

export default class ContactForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let phoneError = "";
    let yearError = "";

    if (!this.state.firstName) {
      firstNameError = "Введите имя";
    }

    if (!this.state.lastName) {
      firstNameError = "Введите фамилию";
    }

    // validating a format
    if (!this.state.phone.includes("+7")) {
      phoneError = "Введите номер по формату +7ХХХХХХХХХ";
    }

    if (phoneError || firstNameError || lastNameError) {
      this.setState({ phoneError, firstNameError, lastNameError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <StyledContactFormWrapper onSubmit={this.handleSubmit}>
        <StyledContactFormInput
          name="firstname"
          type="text"
          placeholder="Имя"
          value={this.state.firstname}
          onChange={this.handleChange}
        />
        <StyledContactFormError>
          {this.state.firstNameError}
        </StyledContactFormError>
        <StyledContactFormInput
          name="lastname"
          type="text"
          placeholder="Фамилия"
          value={this.state.lastname}
          onChange={this.handleChange}
        />
        <StyledContactFormError>
          {this.state.lastNameError}
        </StyledContactFormError>
        <StyledContactFormInput
          name="phone"
          type="text"
          placeholder="Номер телефона"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <StyledContactFormError>{this.state.phoneError}</StyledContactFormError>
        <StyledContactFormInput
          name="year"
          type="number"
          placeholder="Год выпуска авто"
          value={this.state.year}
          onChange={this.handleChange}
        />
        <StyledContactFormError>{this.state.yearError}</StyledContactFormError>
        <button type="submit">Submit</button>
      </StyledContactFormWrapper>
    );
  }
}
