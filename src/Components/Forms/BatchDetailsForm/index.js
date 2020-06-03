import React from "react";
import { Row, Col } from "react-bootstrap";
import MediaQuery from "react-responsive";
import {
  MainFormContainer,
  UploadFile,
  UploadInput,
  UploadTitle,
  UploadContainer,
} from "./style";
import {
  CustomInput,
  CustomSelect,
  CustomTextArea,
  CustomButton,
  CustomDatePicker,
} from "../../CommonComponents";

const BatchDetails = () => {
  return (
    <MainFormContainer>
      <Row>
        <Col md={8}>
          <Row md={12}>
            <Col md={6}>
              <CustomInput
                labelTitle="BATCH NAME"
                name="batchName"
                type="email"
                placeholder="rahilahmad1258"
              />
            </Col>
            <Col md={6}>
              <CustomSelect
                labelTitle="CATEGORY"
                optionsData={["Delhi", "Mumbai", "Goa"]}
              />
            </Col>
            <MediaQuery maxDeviceWidth={767}>
              <Col md={6}>
                <UploadContainer>
                  <UploadFile>
                    <UploadInput
                      accept="image/x-png,image/gif,image/jpeg"
                      type="file"
                    />
                  </UploadFile>
                  <UploadTitle>Upload Image</UploadTitle>
                </UploadContainer>
              </Col>
            </MediaQuery>
          </Row>
          <Row md={12}>
            <CustomDatePicker labelTitle="TO" />
            <Col md={6}>
              <CustomInput
                labelTitle="SUBJECT"
                name="subject"
                placeholder="ADDRESS"
              />
            </Col>
          </Row>
          <Row md={12}>
            <CustomDatePicker labelTitle="FROM" />
            <Col md={6} xl={4}>
              <CustomInput labelTitle="NO OF LIVES SESSIONS" type="number" />
            </Col>
          </Row>
          <Row md={12}>
            <Col md={12}>
              <CustomTextArea labelTitle="Details" name="subject" />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <CustomButton labelTitle="SAVE AND CONTINUE" />
            </Col>
          </Row>
        </Col>
        <MediaQuery minDeviceWidth={767}>
          <Col md={2}>
            <UploadContainer>
              <UploadFile>
                <UploadInput
                  accept="image/x-png,image/gif,image/jpeg"
                  type="file"
                />
              </UploadFile>
              <UploadTitle>Upload Image</UploadTitle>
            </UploadContainer>
          </Col>
        </MediaQuery>
      </Row>
    </MainFormContainer>
  );
};

export default BatchDetails;
