import styled from "styled-components";

const MainContainer = styled.form`
  width: 100%;
  padding-left: 15%;
  @media (max-width: 768px) {
    padding-left: 50px;
  }
  @media (max-width: 425px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export { MainContainer };
