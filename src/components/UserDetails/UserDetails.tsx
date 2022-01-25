import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { User } from "../../types";
import { UserContext } from "../../userContext";

interface UserProps {
  user: User;
}

export default function UserDetails({ user }: UserProps) {
  const { users } = React.useContext(UserContext);

  return (
    <UserContext.Consumer>
      {({ users }) => {
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
      }}
    </UserContext.Consumer>
  );
}

//   UserDetails.propTypes = {
//    user: PropTypes.shape({
//       name: PropTypes.string,
//       username: PropTypes.string,
//       email: PropTypes.string
// })}
