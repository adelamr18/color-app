import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../atoms/Card/Card";
import Button from "../../atoms/Button/Button";
import {
  ADD_COLOR,
  BLACK_BUTTON_BACKGROUND,
  ADD_BUTTON_PADDING,
  ADD_BUTTON_WIDTH,
  DEFAULT_BUTTON_PADDING,
  UPDATE_BUTTON_COLOR,
  CONFIRM_UPDATE_LABEL,
  CANCEL_UPDATE_LABEL,
} from "../../../constants/Button";
import { IColor } from "../../../interfaces/IColor";

const ColorFormSection = styled.section`
  width: 30rem;
  margin: 2rem auto;
  max-width: 80%;
`;
const ColorFormLabel = styled.label`
  display: block;
  width: 100%;
  color: black;
  font-weight: bold;
  font-size: 15px;
`;

const ColorFormInput = styled.input`
  font: inherit;
  padding: 0.1rem 0.25rem;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-top: 10px;
  margin-bottom: 2rem;
  display: block;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom-color: #ff2058;
  }
`;

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormActionButtonsContainer = styled.div`
  display: flex;
`;

interface ColorFormProps {
  firstLabel: string;
  secondLabel: string;
  onColorAdd: (addedColor: IColor) => void;
  cardInfo: IColor;
  onColorConfirm: (color: IColor) => void;
}

const ColorForm: FunctionComponent<ColorFormProps> = React.memo(
  ({ firstLabel, secondLabel, onColorAdd, cardInfo, onColorConfirm }) => {
    const [colorName, setColorName] = useState("");
    const [hexValue, setHexValue] = useState("");
    const [id, setId] = useState(0);

    const onColorAddition = (event: any): void => {
      event.preventDefault();
      if (hexValue && colorName) {
        onColorAdd({ colorName, hexValue });
      }
    };

    useEffect(() => {
      setColorName(cardInfo.colorName);
      setHexValue(cardInfo.hexValue);
      if (cardInfo.id) {
        setId(cardInfo.id);
      }
    }, [cardInfo.id]);

    const onUpdateConfirmation = (event: any) => {
      event.preventDefault();
      onColorConfirm({ colorName, hexValue, id });
    };

    const onUpdateCancellation = () => {};

    const renderFormButtons = () => {
      if (cardInfo && cardInfo.id) {
        return (
          <FormActionButtonsContainer>
            <Button
              allowMediaQuery={true}
              width={ADD_BUTTON_WIDTH}
              padding={DEFAULT_BUTTON_PADDING}
              background={UPDATE_BUTTON_COLOR}
              onClick={(e) => onUpdateConfirmation(e)}
              buttonText={CONFIRM_UPDATE_LABEL}
            ></Button>
            <Button
              allowMediaQuery={true}
              width={ADD_BUTTON_WIDTH}
              padding={DEFAULT_BUTTON_PADDING}
              background={BLACK_BUTTON_BACKGROUND}
              onClick={() => onUpdateCancellation()}
              buttonText={CANCEL_UPDATE_LABEL}
            ></Button>
          </FormActionButtonsContainer>
        );
      } else {
        return (
          <AddButtonContainer>
            <Button
              width={ADD_BUTTON_WIDTH}
              padding={ADD_BUTTON_PADDING}
              background={BLACK_BUTTON_BACKGROUND}
              onClick={onColorAddition}
              buttonText={ADD_COLOR}
            ></Button>
          </AddButtonContainer>
        );
      }
    };
    return (
      <ColorFormSection>
        <Card>
          <form>
            <ColorFormLabel>{firstLabel}</ColorFormLabel>
            <ColorFormInput
              value={colorName}
              onChange={(event) => {
                setColorName(event.target.value);
              }}
            ></ColorFormInput>
            <ColorFormLabel>{secondLabel}</ColorFormLabel>
            <ColorFormInput
              value={hexValue}
              onChange={(event) => {
                setHexValue(event.target.value);
              }}
            ></ColorFormInput>
            {renderFormButtons()}
          </form>
        </Card>
      </ColorFormSection>
    );
  }
);

export default ColorForm;
