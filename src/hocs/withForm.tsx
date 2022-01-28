import React from "react";

export interface WithFormProps<S> {
  formState: S;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // submit: (event: React.SyntheticEvent) => void;
  // submit: (values: S) => void;
  submit: (arg: any) => void;
}

export default function withForm<P extends WithFormProps<S>, S>(
  WrappedComponent: React.ComponentType<P>,
  initialState: S
) {
  return class extends React.Component<
    Omit<P, keyof Omit<WithFormProps<S>, "submit">>
  > {
    state = initialState;

    handleChange: WithFormProps<S>["handleChange"] = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    submit = (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (this.props.submit) {
        this.props.submit(this.state);
      }
    };

    render() {
      return (
        <WrappedComponent
          {...(this.props as P)}
          formState={this.state}
          handleChange={this.handleChange}
          submit={this.submit}
        />
      );
    }
  };
}
