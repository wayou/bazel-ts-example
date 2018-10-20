import React, { Component } from "react";

interface IGreetingProps {
  msg?: string;
}

export default class Greeting extends Component<IGreetingProps> {
  render() {
    return (
      <div className="greeting">
        hello,
        {this.props.msg || "bazel"}!
      </div>
    );
  }
}
