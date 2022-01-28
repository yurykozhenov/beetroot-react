import React from "react";
// import withForm from "../../hocs/withForm";
import withToggle from "../../hocs/withToggle";
import Form from "../example_render_props/Form";

interface RegisterFormProps {
  isToggled: boolean;
  handleToggled: (value: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (e: unknown) => void;
}

class RegisterForm extends React.Component<RegisterFormProps> {
  render() {
    // const { login, email, password } = this.props.formState;
    const { isToggled, handleToggled } = this.props;

    return (
      <Form<{
        login: string;
        email: string;
        password: string;
      }>
        initialState={{
          login: "",
          email: "",
          password: "",
        }}
        submit={this.props.submit}
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
      </Form>
    );
  }
}

// const RegisterFormWithForm = withForm(RegisterForm, {
//   login: "",
//   email: "",
//   password: "",
// });

export default withToggle(RegisterForm, false);
