import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { withUsers } from "../hocs/withUsers";
import { User } from "../types";
import Search from "./Search";
import UserList, { Container } from "./UserList";

function MainPage({ users }: { users: User[] }) {
  const [isLoaded, setLoad] = useState(false);
  const [items, setItems] = useState<User[]>([]);
  const [inputValue, setValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setItems(users);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoad(true);
      }
    }

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ users }}>
      <div className="App">
        <Search
          value={inputValue}
          onChange={(value: string) => setValue(value)}
          users={users}
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
  );
}

export default withUsers(MainPage);
