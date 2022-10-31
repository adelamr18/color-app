import React, { FunctionComponent } from "react";
import styled from "styled-components";
import ColorForm from "../../../components/molecules/ColorForm/ColorForm";
import { COLOR_TITLE, HEX_COLOR } from "../../../constants/ColorForm";
import ColorList from "../../../components/organisms/ColorList/ColorList";
import { IColor } from "../../../interfaces/IColor";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { API_BASE_URL } from "../../../constants/ApiConstants";
import axios from "axios";

const ColorDashboardSection = styled.div``;
interface ColorDashboardProps {}
const cardValue = {
  id: 0,
  colorName: "",
  hexValue: "",
};

const fetchAllColors = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};

const addNewColor = async (newColor: IColor) => {
  const { data: response } = await axios.post(API_BASE_URL, newColor);
  return response.data;
};

const deleteColor = async (color: IColor) => {
  const deleteBody = {
    data: {
      id: color.id,
    },
  };
  const { data: response } = await axios.delete(API_BASE_URL, deleteBody);
  return response.data;
};

const updateColor = async (color: IColor) => {
  const { data: response } = await axios.put(API_BASE_URL, color);
  return response.data;
};

const ColorDashboard: FunctionComponent<ColorDashboardProps> = () => {
  const { data } = useQuery("colors", fetchAllColors);
  const queryClient = useQueryClient();
  const [cardInfo, setcardInfo] = React.useState<IColor>(cardValue);

  const { mutate: postMutate } = useMutation(addNewColor, {
    onSettled: () => {
      queryClient.invalidateQueries("colors");
    },
  });

  const { mutate: deleteMutate } = useMutation(deleteColor, {
    onSettled: () => {
      queryClient.invalidateQueries("colors");
    },
  });

  const { mutate: updateMutate } = useMutation(updateColor, {
    onSettled: () => {
      queryClient.invalidateQueries("colors");
    },
  });

  const onColorAdditionHandler = (cardBody: IColor) => {
    postMutate(cardBody);
  };

  const onColorDeletionHandler = (color: IColor) => {
    deleteMutate(color);
  };

  const onColorUpdateHandler = (color: IColor) => {
    setcardInfo(color);
  };

  const onColorConfirm = (color: IColor) => {
    updateMutate(color);
  };

  return (
    <ColorDashboardSection>
      <ColorForm
        onColorConfirm={onColorConfirm}
        cardInfo={cardInfo}
        onColorAdd={onColorAdditionHandler}
        secondLabel={HEX_COLOR}
        firstLabel={COLOR_TITLE}
      ></ColorForm>
      <ColorList onColorUpdate={onColorUpdateHandler} onColorDelete={onColorDeletionHandler} colors={data?.colors}></ColorList>
    </ColorDashboardSection>
  );
};

export default ColorDashboard;
