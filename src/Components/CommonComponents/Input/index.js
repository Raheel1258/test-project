import React from "react";
import { Form } from "react-bootstrap";
import { MainInputContainer, Label, ImportantTag } from "./style";

const CustomInput = ({ labelTitle, name, type, placeholder, onChange }) => {
  return (
    <MainInputContainer>
      <Label>
        {labelTitle}
        <ImportantTag>*</ImportantTag>
      </Label>
      <Form.Control
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </MainInputContainer>
  );
};

export default CustomInput;
