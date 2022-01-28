import React from "react";

export function withLogger<P>(
  WrappedComponent: React.ComponentType<P>,
  valueChange?: (value: any) => any
) {
  return class extends React.Component<any> {
    onChange = (value: unknown) => {
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
