import styled from "styled-components";

export const StyledAboutPageConditionsButtonContainer = styled.button`
  background: transparent;
  border: none;
  width: 95%;
`;

export const StyledAboutPageConditionsButton = styled.div`
  background-image: url("http://matigas.kz/arrow.svg");
  height: 20px;
  width: 20px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.5s;
  transform: ${props => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
}
`;
