import React, { Component } from "react";
import Controls from "./Controls";
import Output from "./Output";

class Body extends Component {
  state = {
    HOffSet: 10,
    VOffSet: 20,
    Blur: 10,
    Spread: 10,
    Opacity: 100,
    Color: "#000000",
    Inset: false,
  };

  handleCssCode = ({ target }) => {
    const { name, value } = target;
    const { state } = this;

    state[name] = value;

    this.setState({ state });
  };

  render() {
    const { state } = this;

    return (
      <div className="main-body">
        <Controls onChange={this.handleCssCode} code={state} />
        <Output code={state} />
      </div>
    );
  }
}

export default Body;
