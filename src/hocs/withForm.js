import React from "react";

export default function withForm(WrappedComponent, initialState) {
  return class extends React.Component {
    state = initialState;

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
      return (
        <WrappedComponent
          {...this.props}
          formState={this.state}
          handleChange={this.handleChange}
          submit={this.submit}
        />
      );
    }
  };
}
