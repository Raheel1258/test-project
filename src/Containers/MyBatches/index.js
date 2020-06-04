import React, { Component } from "react";
import { BatchDetails } from "../../Components/Forms";
import { MainContainer } from "./style";
class MyBatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batchName: "",
      Image: "",
      category: "",
      details: "",
      from: "",
      sessions: "",
      subject: "",
      to: "",
      errors: [],
    };
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

  validateErrors = () => {
    const errors = [];
    Object.entries(this.state).map((key) => {
      if (key[1].length > 0 || typeof key[1] === "object") {
      } else {
        errors.push(key[0]);
      }
    });
    this.setState({
      errors: errors,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateErrors();
    console.log(this.state);
  };

  render() {
    const { errors } = this.state;
    return (
      <MainContainer>
        <BatchDetails
          handleDateChange={this.handleDateChange}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleChangeSelect={this.handleChangeSelect}
          errors={errors}
        />
      </MainContainer>
    );
  }
}

export default MyBatch;
