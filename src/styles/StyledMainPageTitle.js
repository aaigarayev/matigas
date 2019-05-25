import styled from "styled-components";

export const StyledMainPageTitle = styled.h1`
  color: white;
  font-size: 50px;
  line-height: 100px;
  margin: auto;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const StyledMainPageSubTitle = styled.h2`
  color: white;
  text-align: center;
  margin: auto;
  font-size: 30px;
  ${props => (!props.primary ? "margin-bottom: 25px;" : "")};
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
