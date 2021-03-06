import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { User } from "../../types";
import { UserContext } from "../../context/UserContext";

interface UserProps {
  user: User;
}

export default function UserDetails({ user }: UserProps) {
  const { users } = React.useContext(UserContext);
  console.log(users);

  return (
    <ListItem>
      <ListItemText className="user__name">{user.name}</ListItemText>
      <ListItemText>
        <p>Username:</p>
        {user.username}
      </ListItemText>
      <ListItemText>
        <p>E-mail:</p>
        {user.email}
      </ListItemText>
    </ListItem>
  );
}

//   UserDetails.propTypes = {
//    user: PropTypes.shape({
//       name: PropTypes.string,
//       username: PropTypes.string,
//       email: PropTypes.string
// })}
