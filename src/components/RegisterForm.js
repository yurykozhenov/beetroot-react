import React, { useState } from "react";
import useToggled from "../hooks/useToggled";
// import useForm from "../hooks/useForm";
import FormHook from "./FormHook";

function RegisterForm(props) {
  // const { formState, handleChange, submit } = useForm(props, {
  //   login: "",
  //   email: "",
  //   password: "",
  // });

  // const { login, email, password } = formState;

  const [isToggled, handleToggled] = useToggled();

  return (
    <FormHook
      {...props}
      initialState={{
        login: "",
        email: "",
        password: "",
      }}
    >
      {({ formState, handleChange, submit }) => {
        const { login, email, password } = formState;

        return (
          <form onSubmit={submit} className="col-md-3" autoComplete="off">
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                value={email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Login</label>
              <input
                name="login"
                value={login}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                value={password}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-check">
              <input
                checked={isToggled}
                onChange={handleToggled}
                type="checkbox"
                name="isAgree"
                id="isAgree"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="isAgree">
                I Agree
              </label>
            </div>

            {isToggled && (
              <div className="form-group">
                <button className="btn btn-success">Register</button>
              </div>
            )}
          </form>
        );
      }}
    </FormHook>
  );
}

export default RegisterForm;
