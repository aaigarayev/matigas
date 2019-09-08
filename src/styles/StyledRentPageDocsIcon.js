import styled from "styled-components";

export const StyledRentPageDocsIcon = styled.span`
  color: ${props => (props.primary ? "#ffffff;" : "#00838f")};
  width: ${props => (props.primary ? "30px;" : "20px")};
  height: ${props => (props.primary ? "30px;" : "20px")};
  ${props => (props.primary ? "font-size: 26px; padding:2px;" : "")};
`;
