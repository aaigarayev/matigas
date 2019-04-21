import styled from "styled-components";

export const StyledAboutPageConditionsItem = styled.div`
  display: inline-block;
  width: 30%;
  -ms-align-self: start;
  -webkit-align-self: start;
  margin-bottom: 50px;
  text-align: center;
  background-color: #00838f;
  color: white;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  border-radius: 20px;
  @media screen and (max-width: 1000px) {
    width: 44%;
  }
  @media screen and (max-width: 768px) {
    display: block;
    width: 94%;
    margin: 30px 3%;
  }
`;
