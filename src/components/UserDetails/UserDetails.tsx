import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { User } from "../../types";

interface UserProps {
  user: User;
}

export default function UserDetails({ user }: UserProps) {
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
