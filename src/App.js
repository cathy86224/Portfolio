import React from "react";
import Menu from "./Components/menu";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Menu />
      </div>
    );
  }
}

export default App;
