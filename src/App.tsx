import React from 'react';
import './App.css';
import Search from './components/Search';
import UserList from './components/UserList';
import { User } from './types';

// interface AppState {
//    users: User[]
// }

// class App extends React.Component<{}, AppState> {
//    constructor(props) {
//       super(props);
//       this.state = {
//          users: []
//       }
//    }


//    render() {
//       return <div>{this.state.users
//          .map(user => <div>{user.name}</div>)}
//          </div>
//    }
// }

function App() {
  let [isLoaded, setLoad] = React.useState(false)
  let [items, setItems] = React.useState<User[]>([]);
  let [inputValue, setValue] = React.useState('');
  let [error, setError] = React.useState(null);

  React.useEffect(() => {
     async function fetchData() {
      try {
         let response = await fetch("https://jsonplaceholder.typicode.com/users");
         const users = await response.json();
         setItems(users);
      } catch(err) {
         setError(err);
      } finally {
         setLoad(true);
      }
     }

     fetchData();
  }, []);

  if(error) {
     return (
        <div className="error-message">
           Something went wrong.{}
        </div>
     )
  } else if(!isLoaded) {
     return <div>Loading...</div>
  } else {
     return <div className="App">
        <Search value={inputValue} checkChange={value => setValue(value)}/>
        <UserList users={items} inputValue={inputValue}/>            
     </div>
  }
}

export default App;
