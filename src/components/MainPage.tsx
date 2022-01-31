import React from "react";
import { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { User } from "../types";
import UserList, { Container } from "./UserList";

const Search = React.lazy(() => import("./Search"));

function MainPage() {
  const [isLoaded, setLoad] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [inputValue, setValue] = useState("");
  const [error, setError] = useState<Error>();

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setUsers(users);
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
    <UserContext.Provider value={{ users, isLoaded, error }}>
      <div className="App">
        <Search
          value={inputValue}
          onChange={(value: string) => setValue(value)}
          users={users}
        />
        <Container>
          <h1>Hello world</h1>
          <UserList inputValue={inputValue} users={users} />
        </Container>
      </div>
    </UserContext.Provider>
  );
}

export default MainPage;
