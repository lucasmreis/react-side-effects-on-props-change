import React from "react";
import { Planet } from "./Planet";

export class Container extends React.Component {
  state = { id: 1 };
  inc = () =>
    this.setState(s => ({
      id: s.id + 1
    }));
  dec = () =>
    this.setState(s => ({
      id: Math.max(1, s.id - 1)
    }));
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.inc}>+</button>
          {this.state.id}
          <button onClick={this.dec}>-</button>
        </div>
        <Planet id={this.state.id} />
      </React.Fragment>
    );
  }
}
