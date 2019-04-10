import styled from "styled-components";

export const StyledNavigation = styled.div`
  display: inline-block;
  width: 640px;
  padding: 15px 0;
  z-index: 100;
  margin-right: 10px;
  float: right;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    top: 60px;
    height: 100vh;
    background-color: #fff;
    margin: 0;
    padding: 0;
    width: auto;
    transition: transform 0.5s ease-in;
    transform: ${props =>
      props.isActive ? "translateX(0%)" : "translateX(100%)"};
  }
`;
