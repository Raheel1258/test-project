import styled from "styled-components";

const MainButtonContainer = styled.div`
  display: flex;
  width: 41%;
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.div`
  font-size: 13px;
`;

export { MainButtonContainer, Label };
