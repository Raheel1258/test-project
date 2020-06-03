import styled from "styled-components";

const MainFormContainer = styled.form``;
const UploadFile = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  line-height: 30px;
  background: white;
  text-align: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const UploadInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const UploadTitle = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 767px) {
   text-align:center;
  }
`;

const UploadContainer = styled.div`
  margin-top: 50px;

`;
export {
  MainFormContainer,
  UploadFile,
  UploadInput,
  UploadTitle,
  UploadContainer,
};
