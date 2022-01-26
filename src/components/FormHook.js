import useForm from "../hooks/useForm";

export default function FormHook(props) {
  const { formState, handleChange, submit } = useForm(
    props,
    props.initialState
  );

  return props.children({
    formState: formState,
    handleChange: handleChange,
    submit: submit,
  });
}
