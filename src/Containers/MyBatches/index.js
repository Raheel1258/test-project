import React, { Component } from "react";
import { BatchDetails } from "../../Components/Forms";
import { MainContainer } from "./style";
class MyBatch extends Component {
  render() {
    return (
      <MainContainer>
        <BatchDetails />
      </MainContainer>
    );
  }
}

export default MyBatch;
