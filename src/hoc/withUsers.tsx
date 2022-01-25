import React from "react";

export function withUsers(WrappedComponent: any) {
  return class extends React.Component<any> {
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
          {...this.props}
          users={this.state.users}
        ></WrappedComponent>
      );
    }
  };
}
