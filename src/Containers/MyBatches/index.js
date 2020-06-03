import React, { Component } from "react";
import { BatchDetails } from "../../Components/Forms";
import { MainContainer } from "./style";
class MyBatch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDateChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleChangeSelect = (name, e) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <MainContainer>
        <BatchDetails
          handleDateChange={this.handleDateChange}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleChangeSelect={this.handleChangeSelect}
        />
      </MainContainer>
    );
  }
}

export default MyBatch;
