import React from "react";
import useForm from "../hooks/useForm";

export interface WithHookFormProps<S> {
  formState: S;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (value: any) => void;
}

export default function withHookForm<P extends WithHookFormProps<S>, S>(
  WrappedComponent: React.ComponentType<P>,
  initialState: S
) {
  return function (props: Omit<P, keyof Omit<WithHookFormProps<S>, "submit">>) {
    const { formState, handleChange, submit } = useForm<S>(
      props.submit,
      initialState
    );

    return (
      <WrappedComponent
        {...(props as P)}
        formState={formState}
        handleChange={handleChange}
        submit={submit}
      />
    );
  };
}
