import React, { Component } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <section className="main-container">
        <Header />
        <Body />
      </section>
    );
  }
}

export default App;
