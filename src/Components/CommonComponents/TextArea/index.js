import React from "react";
import { Form } from "react-bootstrap";
import { MainInputContainer, Label, ImportantTag } from "./style";

const CustomTextArea = ({ labelTitle, name, onChange }) => {
  return (
    <MainInputContainer>
      <Label>
        {labelTitle}
        <ImportantTag>*</ImportantTag>
      </Label>
      <Form.Control onChange={onChange} name={name} as="textarea" rows="3" />
    </MainInputContainer>
  );
};

export default CustomTextArea;
