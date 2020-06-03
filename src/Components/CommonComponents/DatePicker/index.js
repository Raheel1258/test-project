import React from "react";
import { Form, Col } from "react-bootstrap";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";
import { Label, ImportantTag, ErrorField } from "./style";

const CustomDatePicker = ({ labelTitle, handleDateChange,errors }) => {
  return (
    <Col md={6}>
      <Form.Group style={{ marginTop: "13px" }}>
        <Label>
          {labelTitle}
          <ImportantTag>*</ImportantTag>
        </Label>
        <DayPickerInput
          onDayChange={(day) => handleDateChange(labelTitle.toLowerCase(), day)}
          style={{ width: "100%" }}
          inputProps={{ className: "form-control col-md-12" }}
        />
      </Form.Group>
      {errors &&
        errors.map((error) =>
          error == labelTitle.toLowerCase() ? (
            <ErrorField key={error}>Please fill the field</ErrorField>
          ) : null
        )}
    </Col>
  );
};

export default CustomDatePicker;
