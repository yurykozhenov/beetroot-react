import React from "react";
// import useForm from "../hooks/useForm";
import withHookForm, { WithHookFormProps } from "../hocs/withHookForm";

function LoginForm({
  formState,
  handleChange,
  submit,
}: WithHookFormProps<{ email: string; password: string }>) {
  // const { formState, handleChange, submit } = useForm(props, {
  //   email: "",
  //   password: "",
  // });
  const { email, password } = formState;

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
        <label>Password</label>
        <input
          name="password"
          value={password}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
}
export default withHookForm(LoginForm, {
  email: "",
  password: "",
});
