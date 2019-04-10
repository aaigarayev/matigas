import styled from "styled-components";

export const StyledBurger = styled.div`
  display: none;
  float: right;
  cursor: pointer;
  padding: 10px 10px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const StyledLine1 = styled.div`
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 5px;
`;

export const StyledLine2 = styled.div`
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 5px;
`;

export const StyledLine3 = styled.div`
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 5px;
`;
