import { User } from "../types";

interface UserProps {
   user: User;
}

export default function UserDetails({ user }: UserProps) {
    return (
          <div className="user">
             <div className="user__name">
                {user.name}
             </div>
             <div className="user__username">
                <p>
                   Username:
                </p>
                {user.username}
             </div>
             <div className="user__email">
                <p>
                   E-mail:
                </p>
                {user.email}
             </div>
          </div>
       )
  }
  
//   UserDetails.propTypes = {
//    user: PropTypes.shape({
//       name: PropTypes.string,
//       username: PropTypes.string,
//       email: PropTypes.string
// })}