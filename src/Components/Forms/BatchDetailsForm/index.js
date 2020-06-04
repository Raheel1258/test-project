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

const BatchDetails = ({
  handleChange,
  handleDateChange,
  handleChangeSelect,
  handleSubmit,
  errors,
}) => {
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
                onChange={handleChange}
                placeholder="rahilahmad1258@gmail.com"
                errors={errors}
              />
            </Col>
            <Col md={6}>
              <CustomSelect
                labelTitle="CATEGORY"
                optionsData={["Delhi", "Mumbai", "Goa"]}
                handleChangeSelect={handleChangeSelect}
                errors={errors}
              />
            </Col>
            <MediaQuery maxDeviceWidth={767}>
              <Col md={6}>
                <UploadContainer>
                  <UploadFile>
                    <UploadInput
                      accept="image/x-png,image/gif,image/jpeg"
                      type="file"
                      onChange={handleChange}
                      errors={errors}
                    />
                  </UploadFile>
                  <UploadTitle>Upload Image</UploadTitle>
                </UploadContainer>
              </Col>
            </MediaQuery>
          </Row>
          <Row md={12}>
            <CustomDatePicker
              handleDateChange={handleDateChange}
              labelTitle="TO"
              errors={errors}
            />
            <Col md={6}>
              <CustomInput
                labelTitle="SUBJECT"
                name="subject"
                onChange={handleChange}
                placeholder="ADDRESS"
                errors={errors}
              />
            </Col>
          </Row>
          <Row md={12}>
            <CustomDatePicker
              handleDateChange={handleDateChange}
              labelTitle="FROM"
              errors={errors}
            />
            <Col md={6} xl={4}>
              <CustomInput
                onChange={handleChange}
                labelTitle="NO OF LIVES SESSIONS"
                name="sessions"
                type="number"
                errors={errors}
              />
            </Col>
          </Row>
          <Row md={12}>
            <Col md={12}>
              <CustomTextArea
                onChange={handleChange}
                labelTitle="Details"
                name="details"
                errors={errors}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <CustomButton
                handleSubmit={handleSubmit}
                labelTitle="SAVE AND CONTINUE"
              />
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
                  onChange={handleChange}
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
