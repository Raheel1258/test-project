import React from "react";
import { Form } from "react-bootstrap";
import { MainInputContainer, Label, ImportantTag, ErrorField } from "./style";

const CustomTextArea = ({ labelTitle, name, onChange, errors }) => {
  return (
    <MainInputContainer>
      <Label>
        {labelTitle}
        <ImportantTag>*</ImportantTag>
      </Label>
      <Form.Control onChange={onChange} name={name} as="textarea" rows="3" />
      {errors &&
        errors.map((error) =>
          error == labelTitle.toLowerCase() ? (
            <ErrorField key={error}>Please fill the field</ErrorField>
          ) : null
        )}
    </MainInputContainer>
  );
};

export default CustomTextArea;
