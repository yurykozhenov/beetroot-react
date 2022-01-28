import React from "react";

interface FormProps<T> {
  initialState: T;
  submit: (values: T) => void;
  children: (renderProps: FormRenderProps<T>) => React.ReactNode;
}

interface FormRenderProps<T> {
  formState: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (e: React.SyntheticEvent) => void;
}

export default class Form<T> extends React.Component<FormProps<T>> {
  state = this.props.initialState;

  handleChange: FormRenderProps<T>["handleChange"] = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  submitForm: FormRenderProps<T>["submit"] = (e) => {
    e.preventDefault();
    if (this.props.submit) {
      this.props.submit(this.state);
    }
  };

  render() {
    return this.props.children({
      formState: this.state,
      handleChange: this.handleChange,
      submit: this.submitForm,
    });
  }
}
