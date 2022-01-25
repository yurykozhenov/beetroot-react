import List from "@mui/material/List";
import React from "react";
import { User } from "../types";
import UserDetails from "./UserDetails/UserDetails";

interface UserListProps {
  users: User[];
  inputValue: string;
}

function UserList({ users, inputValue }: UserListProps) {
  return (
    <>
      {users
        .filter((user) =>
          user.name.toLowerCase().includes(inputValue.toLowerCase().trim())
        )
        .map((user) => (
          <UserDetails user={user} key={user.id} />
        ))}
    </>
  );
}

export default UserList;

// export function PostList({ posts, inputValue }: PostListProps) {
//   return (
//     <>
//       {posts
//         .filter((user) =>
//           user.name.toLowerCase().includes(inputValue.toLowerCase().trim())
//         )
//         .map((user) => (
//           <UserDetails user={user} key={user.id} />
//         ))}
//     </>
//   );
// }

export function Container({ children }: { children: React.ReactChild[] }) {
  return (
    <div className="some-class">
      <div className="some-class-2">
        <List>{children}</List>
      </div>
    </div>
  );
}

//   UserList.propTypes = {
//        users: PropTypes.arrayOf(PropTypes.shape({
//           name: PropTypes.string.isRequired,
//           username: PropTypes.string.isRequired,
//           email: PropTypes.string.isRequired
//        })),
//   }
