import List from "@mui/material/List";
import { User } from "../types";
import UserDetails from "./UserDetails/UserDetails";

interface UserListProps {
  users: User[];
  inputValue: string;
}

export default function UserList({ users, inputValue }: UserListProps) {
  return (
    <List>
      {users
        .filter((user) =>
          user.name.toLowerCase().includes(inputValue.toLowerCase().trim())
        )
        .map((user) => (
          <UserDetails user={user} key={user.id} />
        ))}
    </List>
  );
}

//   UserList.propTypes = {
//        users: PropTypes.arrayOf(PropTypes.shape({
//           name: PropTypes.string.isRequired,
//           username: PropTypes.string.isRequired,
//           email: PropTypes.string.isRequired
//        })),
//   }
