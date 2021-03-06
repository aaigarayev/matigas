import styled from "styled-components";

export const StyledContactFormInput = styled.input`
  width: 90%;
  margin: 10px auto;
  border: none;
  color: #000;
  font-weight: 400;
  padding: 40px 2px 10px 2px;
  background: transparent;
  letter-spacing: 1px;
  outline: none;
  height: 15px;
  -webkit-transition-property: -webkit-transform;
  transition-property: transform;
  font-size: 14px;
  box-shadow: 0px 2px #000;
  @media screen and (max-width: 780px) {
    width: 95%;
    box-shadow: none;
    border-bottom: 2px solid #000;
  }
`;

export const StyledContactFormWrapper = styled.form`
  margin: auto;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 95%;
`;

export const StyledContactFormError = styled.div`
  color: red;
  font-size: 16px;
`;

export const StyledContactFormButton = styled.button`
  color: #ffffff;
  font-size: 16px;
  padding: 10px 20px;
  background-color: #00838f;
  margin-top: 20px;
  transition: transform 0.3s;
  border-radius: 10px;
  &:hover {
    transform: scale(1.15);
  }
`;
