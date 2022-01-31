import React from "react";
import { User } from "../types";

interface WithUsersProps {
  users: User[];
}

export function withUsers<P extends WithUsersProps>(
  WrappedComponent: React.ComponentType<P>
) {
  return class extends React.Component<Omit<P, keyof WithUsersProps>> {
    state = {
      users: [],
    };

    fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      this.setState({ users });
    };

    componentDidMount() {
      this.fetchData();
    }

    render() {
      return (
        <WrappedComponent
          {...(this.props as P)}
          users={this.state.users}
        ></WrappedComponent>
      );
    }
  };
}
