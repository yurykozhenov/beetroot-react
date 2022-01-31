import React from "react";

export interface WithToggleProps {
  isToggled: boolean;
  handleToggled: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function withToggle<P extends WithToggleProps>(
  WrappedComponent: React.ComponentType<P>,
  initialState = false
) {
  return class extends React.Component<Omit<P, keyof WithToggleProps>> {
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
