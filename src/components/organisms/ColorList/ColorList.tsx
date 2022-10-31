import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Card from "../../atoms/Card/Card";
import { CARD_WIDTH, CARD_HEIGHT, CARD_MARGIN } from "../../../constants/ColorList";
import { IColor } from "../../../interfaces/IColor";
import { CARD, CARD_COLOR, CARD_HEX_COLOR } from "../../../constants/Card";
import Button from "../../atoms/Button/Button";
import {
  DEFAULT_BUTTON_PADDING,
  DEFAULT_BUTTON_WIDTH,
  UPDATE_BUTTON_COLOR,
  DELETE_BUTTON_COLOR,
  UPDATE_BUTTON_LABEL,
  DELETE_BUTTON_LABEL,
} from "../../../constants/Button";

const CardListContainer = styled.div`
  width: 80rem;
  margin: 2rem auto;
  max-width: 80%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const CardInnerContainer = styled.div``;
const CardLabel = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const LabelContainer = styled.div`
  display: flex;
`;
const AddedCardProperty = styled.div`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  color: red;
  margin-left: 5px;
`;
const ColorTitle = styled.div`
  display: block;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  border-bottom: 3px solid #ccc;
  padding-bottom: 0.5rem;
`;
const CardButtonsContainer = styled.div`
  display: flex;
`;

interface CardProps {
  children?: React.ReactNode;
  colors: IColor[];
  onColorDelete: (color: IColor) => void;
  onColorUpdate: (color: IColor) => void;
}

const ColorList: FunctionComponent<CardProps> = React.memo(({ colors, onColorDelete, onColorUpdate }) => {
  const onUpdateColor = (color: IColor) => {
    onColorUpdate(color);
  };

  const onDeleteColor = (color: IColor) => {
    onColorDelete(color);
  };
  return (
    <CardListContainer>
      {colors?.map((color: IColor) => {
        return (
          <Card key={color.id} allowMediaQuery={true} width={CARD_WIDTH} margin={CARD_MARGIN} height={CARD_HEIGHT}>
            <CardInnerContainer>
              <ColorTitle>
                {CARD} {color.id}
              </ColorTitle>
              <LabelContainer>
                <CardLabel>{CARD_COLOR} </CardLabel>
                <AddedCardProperty>{color.colorName}</AddedCardProperty>
              </LabelContainer>
              <LabelContainer>
                <CardLabel>{CARD_HEX_COLOR} </CardLabel>
                <AddedCardProperty>{color.hexValue}</AddedCardProperty>
              </LabelContainer>
              <CardButtonsContainer>
                <Button
                  allowMediaQuery={true}
                  width={DEFAULT_BUTTON_WIDTH}
                  padding={DEFAULT_BUTTON_PADDING}
                  background={UPDATE_BUTTON_COLOR}
                  onClick={() => onUpdateColor(color)}
                  buttonText={UPDATE_BUTTON_LABEL}
                ></Button>
                <Button
                  allowMediaQuery={true}
                  width={DEFAULT_BUTTON_WIDTH}
                  padding={DEFAULT_BUTTON_PADDING}
                  background={DELETE_BUTTON_COLOR}
                  onClick={() => onDeleteColor(color)}
                  buttonText={DELETE_BUTTON_LABEL}
                ></Button>
              </CardButtonsContainer>
            </CardInnerContainer>
          </Card>
        );
      })}
    </CardListContainer>
  );
});

export default ColorList;
