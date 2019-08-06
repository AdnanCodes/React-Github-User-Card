import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  render() {
    return <div className="App">Hello World</div>;
  }
}

export default App;
