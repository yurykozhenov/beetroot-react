import React, { Component } from "react";
import withForm from "../../hocs/withForm";

class LoginForm extends Component {
  render() {
    const { email, password } = this.props.formState;
    const { handleChange, submit } = this.props;

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
}

export default withForm(LoginForm, {
  email: "",
  password: "",
});
