import React from "react";
import { Form } from "react-bootstrap";
import { MainInputContainer, Label, ImportantTag, ErrorField } from "./style";

const CustomInput = ({
  labelTitle,
  name,
  type,
  placeholder,
  onChange,
  errors,
}) => {
  return (
    <MainInputContainer>
      <Label>
        {labelTitle}
        <ImportantTag>*</ImportantTag>
      </Label>
      <Form.Control
        onChange={(e) => onChange(name, e)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {errors &&
        errors.map((error) =>
          error == name ? (
            <ErrorField key={error}>Please fill the field</ErrorField>
          ) : null
        )}
    </MainInputContainer>
  );
};

export default CustomInput;
