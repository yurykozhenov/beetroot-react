import useForm from "../../hooks/useForm";

export default function FormHook(props: any) {
  const { formState, handleChange, submit } = useForm(
    props.submit,
    props.initialState
  );

  return props.children({
    formState: formState,
    handleChange: handleChange,
    submit: submit,
  });
}
