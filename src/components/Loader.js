import React from "react";
import Portal from "../containers/Portal";
import { StyledLoaderContainer } from "../styles/StyledLoaderContainer";
import { Spinner } from "../styles/Spinner";

export const Loader = () => {
  return (
    <Portal>
      <StyledLoaderContainer>
        <Spinner />
      </StyledLoaderContainer>
    </Portal>
  );
};
