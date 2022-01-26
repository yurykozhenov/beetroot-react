import { useState } from "react";

export default function useForm(props, initialState) {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (props.submit) {
      props.submit(state);
    }
  };

  return { formState: state, handleChange, submit };
}
