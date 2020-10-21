import React from "react";

//import styles and assets
import styled from "styled-components";

const Button = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.button`
  border-radius: 25px;
  padding: 1em;
  background-color: red;
  outline: transparent;
  border: transparent;
  cursor: pointer;
`;

export default Button;
