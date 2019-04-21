import styled from "styled-components";

export const StyledAboutPageConditionsDescription = styled.p`
  color: white;
  font-size: 18px;
  max-height: ${props => (props.primary ? "auto" : "0")};
  overflow: hidden;
  margin: ${props => (props.primary ? "10px 20px" : "0")};
  transition: all 0.5s ease-in-out;
  -moz-transition: max-height 0.5s ease-in-out;
  -webkit-transition: max-height 0.5s ease-in-out;
  -o-transition: max-height 0.5s ease-in-out;
  -ms-transition: max-height 0.5s ease-in-out;
`;
