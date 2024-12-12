import React, { Component } from "react";
import "../counterTask/counter.css"; // Import the CSS file

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  handleEvent = (value) => {
    this.setState({ counter: this.state.counter + value });
  };

  render() {
    return (
      <div className="container">
        <button onClick={() => this.handleEvent(1)}>+1</button>
        <button onClick={() => this.handleEvent(-1)}>-1</button>
        <button onClick={() => this.handleEvent(+2)}>+2</button>
        <button onClick={() => this.handleEvent(-2)}>-2</button>

        <h1>{this.state.counter}</h1>

        <button onClick={() => this.handleEvent(+3)}>+3</button>
        <button onClick={() => this.handleEvent(-3)}>-3</button>
        <button onClick={() => this.handleEvent(+5)}>+5</button>
        <button onClick={() => this.handleEvent(-5)}>-5</button>
      </div>
    );
  }
}

export default Counter;
