import React from "react";
import { Form, Col } from "react-bootstrap";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";
import { Label, ImportantTag } from "./style";

const CustomDatePicker = ({ labelTitle }) => {
  return (
    <Col md={6}>
      <Form.Group style={{ marginTop: "13px" }}>
        <Label>
          {labelTitle}
          <ImportantTag>*</ImportantTag>
        </Label>
        <DayPickerInput
          style={{ width: "100%" }}
          inputProps={{ className: "form-control col-md-12" }}
        />
      </Form.Group>
    </Col>
  );
};

export default CustomDatePicker;
