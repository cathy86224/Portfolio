import React from 'react';
import Name from "../NameSticker/name"
import bubbleGif from "../../../images/bubble.gif"
import './home.scss';

class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      click: false,
      enteredName: "",
      enteredCount: 0,
    }
  }

  enteredName = name => {
    this.setState({enteredName: name})
    this.props.enteredName(name)
  }

  enteredEmpty = () => {
    this.setState({enteredCount: this.state.enteredCount + 1})
  }

  changeMessage() {
    if(this.state.enteredCount > 0) {
      return "please type your name"
    }
    else if(this.state.enteredName !== "") {
      return "HELLO \n" + this.state.enteredName.toUpperCase() + "!"
    }
    return "what's your \nname?"
  }

  render() {
    return (
      <div className={this.state.enteredName !== "" ? "home entered" : "home"}>
        <div className={this.state.click ? "click clicked" : "click"} 
        onClick={() => (this.setState({click: true}))}>
          click here!
        </div>
        <div className={this.state.click ? "hello clicked" : "hello"} >
          {this.state.click && 
            <div>
              welcome~
            </div>
          }
        </div>
        <div className={this.state.click ? "cathy clicked" : "cathy"} >
          {this.state.click && 
            <div>
              I'm <span>Cathy</span>
            </div>
          }
        </div>
        <img className={this.state.click ? "bubble clicked" : "bubble"} src={bubbleGif} alt="Bubble gif" />
        <div className={this.state.click ? "your-name clicked" : "your-name"}>
          {this.changeMessage()}
        </div>
        <Name 
          clicked={this.state.click} 
          enteredName={this.enteredName}
          enteredCount={this.enteredEmpty}/>
      </div>
    )
  };
}

export default Home;
