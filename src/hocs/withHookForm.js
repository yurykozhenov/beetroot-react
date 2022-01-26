import React from "react";
import useForm from "../hooks/useForm";

export default function withHookForm(WrappedComponent, initialState) {
  return function (props) {
    const { formState, handleChange, submit } = useForm(props, initialState);

    return (
      <WrappedComponent
        {...props}
        formState={formState}
        handleChange={handleChange}
        submit={submit}
      />
    );
  };
}
