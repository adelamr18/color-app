import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { CARD_WIDTH_BIG_SCREEN, CARD_WIDTH_SMALL_SCREEN } from "../../../constants/Card";

const CardBody = styled.div<CardBodyProps>`
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};

  @media screen and (max-width: 1200px) {
    width: ${({ allowMediaQuery, width }) => (allowMediaQuery ? CARD_WIDTH_BIG_SCREEN : width)};
  }

  @media screen and (max-width: 710px) {
    width: ${({ allowMediaQuery, width }) => (allowMediaQuery ? CARD_WIDTH_SMALL_SCREEN : width)};
  }
`;

interface CardProps {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  allowMediaQuery?: boolean;
}

interface CardBodyProps {
  width?: string;
  height?: string;
  margin?: string;
  allowMediaQuery?: boolean;
}

const Card: FunctionComponent<CardProps> = ({ children, width, height, margin, allowMediaQuery }) => {
  return (
    <CardBody allowMediaQuery={allowMediaQuery} margin={margin} height={height} width={width}>
      {children}
    </CardBody>
  );
};

export default Card;
