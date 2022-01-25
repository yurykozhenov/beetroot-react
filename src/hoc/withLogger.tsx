import React from "react";
import { FormElementProps } from "../types";

export function withLogger(
  WrappedComponent: any,
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
          {...this.props}
          value={value}
          onChange={this.onChange}
        ></WrappedComponent>
      );
    }
  };
}
