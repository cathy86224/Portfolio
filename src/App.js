import React from 'react';
import Home from "./Components/Welcome/Home/home"
import Menu from "./Components/Menu/menu"
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enteredName: "",
      switch: false
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if(prevState.enteredName !== this.state.enteredName && this.state.enteredName !== "") {
      setTimeout(() => {
        this.setState({switch: true})
      }, 2500);
    }
  }

  enteredName = name => {
    this.setState({enteredName: name})
  }

  render() {
    return (
    <div className="app">
      {/* {!this.state.switch && 
        <Home enteredName={this.enteredName}/>
      } */}
      <Menu enteredName={this.state.enteredName}/>
    </div>
    )
  }
}

export default App;
