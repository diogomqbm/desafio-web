import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 2rem;
  border: none;
  box-shadow: 0 2px 2px #f9f9f9;
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    transform: translateY(2px);
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
};

export default Button;