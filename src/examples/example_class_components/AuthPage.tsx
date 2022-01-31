import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import withToggle, { WithToggleProps } from "../../hocs/withToggle";

class AuthPage extends React.Component<WithToggleProps> {
  submit = (value: unknown) => {
    console.log(value);
  };

  render() {
    const { isToggled: isRegister, handleToggled } = this.props;

    return (
      <div className="pt-3">
        <div className="form-check">
          <input
            checked={isRegister}
            onChange={handleToggled}
            type="checkbox"
            name="isRegister"
            id="isRegister"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="isRegister">
            Switch to {isRegister ? "Login" : "Register"}
          </label>
        </div>
        <hr />

        <h2>{isRegister ? "Register" : "Login"}</h2>

        {isRegister ? (
          <RegisterForm submit={this.submit} />
        ) : (
          <LoginForm submit={this.submit} />
        )}
      </div>
    );
  }
}

export default withToggle(AuthPage, false);
