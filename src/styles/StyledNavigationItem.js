import styled from "styled-components";

export const StyledNavigationItem = styled.a`
  display: inline-block;
  text-decoration: none;
  width: 175px;
  color: #282b2b;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1.1px;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    color: #00838f;
  }
  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
    margin: 0;
    right: 0;
    transition-delay: 0.5s;
    padding: ${props => (props.primary ? "8vh 20px 10vh" : "8vh 20px 8vh")};
  }
`;
