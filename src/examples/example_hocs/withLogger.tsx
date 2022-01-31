import React from "react";

interface WithLoggerProps<T> {
  onChange: (value: T) => void;
  value: T;
}

export function withLogger<T, P extends WithLoggerProps<T>>(
  WrappedComponent: React.ComponentType<P>,
  valueChange?: (value: T) => T
) {
  return class extends React.Component<P> {
    onChange: WithLoggerProps<T>["onChange"] = (value) => {
      console.log(value);
      this.props.onChange(value);
    };

    render() {
      let value = valueChange?.(this.props.value) ?? this.props.value;

      return (
        <WrappedComponent
          {...(this.props as P)}
          value={value}
          onChange={this.onChange}
        ></WrappedComponent>
      );
    }
  };
}
