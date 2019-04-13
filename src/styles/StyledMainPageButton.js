import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMainPageButton = styled.button`
  display: block;
  font-size: 20px;
  background-color: #00838f;
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 1px;
  transition: transform 0.3s;
  color: white;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledMainPageButtonDescr = styled(Link)`
  text-decoration: none;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
