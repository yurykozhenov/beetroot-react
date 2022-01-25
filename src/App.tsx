import React from "react";
import Checkbox from "./components/Checkbox";
import Search, { ErvinSearch, LeanneSearch } from "./components/Search";
import UserList, { Container } from "./components/UserList";
import { withUsers } from "./hoc/withUsers";
import { User } from "./types";
import { UserContext } from "./userContext";

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

function App({ users }: { users: User[] }) {
  const [isLoaded, setLoad] = React.useState(false);
  // const [items, setItems] = React.useState<User[]>([]);
  const [inputValue, setValue] = React.useState("");
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  // React.useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       let response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       const users = await response.json();
  //       setItems(users);
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         setError(err);
  //       }
  //     } finally {
  //       setLoad(true);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      <UserContext.Provider value={{ users }}>
        <div className="App">
          <LeanneSearch
            value={inputValue}
            onChange={(value: string) => setValue(value)}
            users={users}
          />
          <ErvinSearch
            value={inputValue}
            onChange={(value: any) => setValue(value)}
          />
          <Container>
            <h1>Hello world</h1>
            <Checkbox
              value={checkboxValue}
              onChange={(value: any) => setCheckboxValue(value)}
            ></Checkbox>
            <UserList inputValue={inputValue} users={users} />
          </Container>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default withUsers(App);
