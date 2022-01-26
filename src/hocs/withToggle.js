import React from "react";

export default function withToggle(WrappedComponent, initialState) {
  return class extends React.Component {
    state = {
      isToggled: initialState,
    };

    handleToggled = (e) =>
      this.setState({
        isToggled: Boolean(e.target.checked),
      });

    render() {
      return (
        <WrappedComponent
          {...this.props}
          isToggled={this.state.isToggled}
          handleToggled={this.handleToggled}
        />
      );
    }
  };
}
