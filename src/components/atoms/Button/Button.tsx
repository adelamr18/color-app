import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ADD_BUTTON_WIDTH } from "../../../constants/Button";

const ButtonBody = styled.button<ButtonBodyProps>`
  font: inherit;
  padding: ${({ padding }) => padding};
  color: white;
  font-weight: bold;
  margin: 0.5rem 0;
  border-radius: 5px;
  text-align: center;
  margin: auto;
  width: ${({ width }) => width};
  border-color: transparent;
  cursor: pointer;
  &:hover,
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 710px) {
    width: ${({ allowMediaQuery, width }) => (allowMediaQuery ? ADD_BUTTON_WIDTH : width)};
  }
  text-align: center;
  background: ${({ background }) => background};
`;

interface ButtonBodyProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  background: string;
  padding: string;
  width: string;
  allowMediaQuery?: boolean;
}

interface ButtonProps {
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  background: string;
  padding: string;
  width: string;
  allowMediaQuery?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ buttonText, onClick, background, padding, width, allowMediaQuery }) => {
  return (
    <ButtonBody allowMediaQuery={allowMediaQuery} width={width} padding={padding} background={background} onClick={onClick}>
      {buttonText}
    </ButtonBody>
  );
};

export default Button;
