import React, { Component } from "react";
import Form from "./components/Form";

import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="jumbotron">
          <h1 class="display-3">Google Search</h1>
          <p class="lead">Enter your search below!</p>
          <hr class="my-4"></hr>
          <Form />
        </div>
      </div>

    );
  }
}

export default App;
