import React from "react";
import { MainButtonContainer, Label } from "./style";

const CustomButton = ({ labelTitle, handleSubmit }) => {
  return (
    <MainButtonContainer onClick={handleSubmit}>
      <Label>{labelTitle}</Label>
    </MainButtonContainer>
  );
};

export default CustomButton;
