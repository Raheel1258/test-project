import React from "react";
import { Form } from "react-bootstrap";

import { Label, ImportantTag } from "./style";

const CustomSelect = ({ labelTitle, optionsData }) => {
  return (
    <div>
      <Label>
        {labelTitle}
        <ImportantTag>*</ImportantTag>
      </Label>
      <Form.Control as="select">
        {optionsData.map((option) => (
          <option>{option}</option>
        ))}
      </Form.Control>
    </div>
  );
};

export default CustomSelect;
