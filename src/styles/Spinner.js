import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid #f3f3f3;
  border-top: 3px solid black;
  border-radius: 100%;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 40vh auto;
  animation: ${spin} 1s infinite linear;
`;
