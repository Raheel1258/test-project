import styled from "styled-components";

const MainButtonContainer = styled.div`
  display: flex;
  width: 30%;
  margin-top: 20px;
  background: #e9d700;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #dab601;
  }
`;

const Label = styled.div`
  font-size: 13px;
`;

export { MainButtonContainer, Label };
