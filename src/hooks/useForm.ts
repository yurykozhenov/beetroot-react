import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useForm<T>(
  submit: (values: T) => void,
  initialState: T
) {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (submit) {
      submit(state);
    }
    navigate("/main");
  };

  return { formState: state, handleChange, submit: formSubmit };
}
