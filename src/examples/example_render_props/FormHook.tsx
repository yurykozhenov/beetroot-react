import React from "react";
import useForm from "../../hooks/useForm";

interface FormHookProps<T> {
  submit: (values: T) => void;
  initialState: T;
  children: (renderProps: {
    formState: T;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    submit: (e: React.SyntheticEvent) => void;
  }) => React.ReactNode;
}

export default function FormHook<T>(props: FormHookProps<T>) {
  const { formState, handleChange, submit } = useForm(
    props.submit,
    props.initialState
  );

  return props.children({
    formState,
    handleChange,
    submit,
  });
}
