import React from "react";

export default class Form extends React.Component {
  state = this.props.initialState;

  handleChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  submit = (e) => {
    e.preventDefault();
    if (this.props.submit) {
      this.props.submit(this.state);
    }
  };

  render() {
    return this.props.children({
      formState: this.state,
      handleChange: this.handleChange,
      submit: this.submit,
    });
  }
}
