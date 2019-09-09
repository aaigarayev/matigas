import styled from "styled-components";

export const StyledContactsLocation = styled.div`
  height: 100%;
  vertical-align: top;
  width: 30%;
  display: inline-block;
  color: white;
  font-size: 18px;
  letter-spacing: 0.05em;
  margin: 0 10%;
  @media screen and (max-width: 1160px) {
    width: 46%;
    margin: 0 2%;
  }
  @media screen and (max-width: 768px) {
    display: block;
    width: 98%;
    margin: 0 2%;
    text-align: center;
    height: auto;
  }
`;
