import React from "react";
import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadTitle = styled.span`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
`

export const Load = styled.div`
  display: inline-block;
  animation: ${rotate} 1s linear infinite;
`

const Loading = () => (
  <LoadTitle>L<Load>o</Load>adin<Load>g</Load>...</LoadTitle>
);

export default Loading;