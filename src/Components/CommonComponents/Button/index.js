import React from "react";
import { MainButtonContainer,Label } from "./style";

const CustomButton = ({ labelTitle }) => {
  return (
    <MainButtonContainer>
      <Label>{labelTitle}</Label>
    </MainButtonContainer>
  );
};

export default CustomButton;
