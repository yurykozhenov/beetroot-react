import React from "react";

export interface WithToggleProps {
  isToggled: boolean;
  handleToggled: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function withToggle<P>(
  WrappedComponent: React.ComponentType<P>,
  initialState = false
) {
  return class extends React.Component<any> {
    state = {
      isToggled: initialState,
    };

    handleToggled = (e: React.ChangeEvent<HTMLInputElement>) =>
      this.setState({
        isToggled: Boolean(e.target.checked),
      });

    render() {
      return (
        <WrappedComponent
          {...(this.props as P)}
          isToggled={this.state.isToggled}
          handleToggled={this.handleToggled}
        />
      );
    }
  };
}
