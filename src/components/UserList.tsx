import { User } from '../types';
import UserDetails from './UserDetails';

interface UserListProps {
   users: User[];
   inputValue: string;
}

export default function UserList({users, inputValue}: UserListProps) {
    return (
       <div className="users">
          {
             users
             .filter(user => user.name.toLowerCase().includes(inputValue.toLowerCase().trim()))
             .map(user => <UserDetails user={user} key={user.id} />)}
       </div>
    )
  }
  
//   UserList.propTypes = {
//        users: PropTypes.arrayOf(PropTypes.shape({
//           name: PropTypes.string.isRequired,
//           username: PropTypes.string.isRequired,
//           email: PropTypes.string.isRequired
//        })),
//   }
