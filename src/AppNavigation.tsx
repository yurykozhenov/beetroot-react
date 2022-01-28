import { NavLink } from "react-router-dom";

export default function AppNavigation() {
  return (
    <header>
      <nav>
        <NavLink
          to="/main"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
        >
          Go to main
        </NavLink>
        <br />
        <NavLink
          to="/auth"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
        >
          Go to auth
        </NavLink>
      </nav>
    </header>
  );
}
