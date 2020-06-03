import React from "react";
import { Form } from "react-bootstrap";

import { Label, ImportantTag } from "./style";

const CustomSelect = ({ labelTitle, optionsData, handleChangeSelect }) => {
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
    </div>
  );
};

export default CustomSelect;
