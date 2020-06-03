import React from "react";
import { Form } from "react-bootstrap";

import { Label, ImportantTag, ErrorField } from "./style";

const CustomSelect = ({
  labelTitle,
  optionsData,
  handleChangeSelect,
  errors,
}) => {
  return (
    <div>
      <Label>
        {labelTitle}
        <ImportantTag>*</ImportantTag>
      </Label>
      <Form.Control
        onChange={(e) => handleChangeSelect(labelTitle.toLowerCase(), e)}
        as="select"
      >
        <option>Select category</option>
        {optionsData.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
      {errors &&
        errors.map((error) =>
          error == labelTitle.toLowerCase() ? (
            <ErrorField key={error}>Please fill the field</ErrorField>
          ) : null
        )}
    </div>
  );
};

export default CustomSelect;
