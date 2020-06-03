import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { MainFormContainer } from "./style";
// import DayPickerInput from "react-day-picker/DayPickerInput";

import {
  CustomInput,
  CustomSelect,
  CustomTextArea,
  CustomButton,
} from "../../CommonComponents";
class BatchDetails extends Component {
  render() {
    return (
      <MainFormContainer>
        <Row>
          <Col md={4}>
            <CustomInput
              labelTitle="BATCH NAME"
              name="batchName"
              type="email"
              placeholder="rahilahmad1258"
            />
          </Col>
          <Col md={4}>
            <CustomSelect labelTitle="CATEGORY" optionsData={[1, 2, 3, 4]} />
          </Col>
          <Col md={4}>PHOTOS</Col>
        </Row>
        <Row>
          <Col md={4}>
            <CustomInput labelTitle="FROM" name="from" />
          </Col>
          <Col md={4}>
            <CustomInput
              labelTitle="SUBJECT"
              name="subject"
              placeholder="ADDRESS"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <CustomInput labelTitle="TO" name="subject" />
          </Col>
          <Col md={3}>
            <CustomInput labelTitle="NO OF LIVES SESSIONS" type="number" />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <CustomTextArea labelTitle="Details" name="subject" />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <CustomButton labelTitle="SAVE AND CONTINUE" />
          </Col>
        </Row>
      </MainFormContainer>
    );
  }
}

export default BatchDetails;
