import React from "react";
import { Form } from "react-bootstrap";
import { MainInputContainer, Label,ImportantTag } from "./style";

const CustomInput = ({ labelTitle, name, type, placeholder }) => {
  return (
    <MainInputContainer>
      <Label>{labelTitle}<ImportantTag>*</ImportantTag></Label>
      <Form.Control name={name} type={type} placeholder={placeholder} />
    </MainInputContainer>
  );
};

export default CustomInput;
