import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import useToggled from "../hooks/useToggled";

export default function AuthPage() {
  const [isRegister, handleRegister] = useToggled(false);

  const submit = (value) => {
    console.log(value);
  };

  return (
    <div className="pt-3">
      <div className="form-check">
        <input
          checked={isRegister}
          onChange={handleRegister}
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
        <RegisterForm submit={submit} />
      ) : (
        <LoginForm submit={submit} />
      )}
    </div>
  );
}
