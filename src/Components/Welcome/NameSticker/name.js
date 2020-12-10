import React, { Component } from 'react'
import "./name.scss"

class name extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            enteredName: false
        }
    }

    inputName = e => {
        this.setState({
            name: e.target.value
        })
    }

    enter = e => {
        if(e.key === "Enter") {
            if(this.state.name !== "") {
                this.setState({enteredName: true})
                this.props.enteredName(this.state.name)
            }
            else this.props.enteredCount()
        }
    }

    stickerClassName() {
        let name = "sticker"
        if(this.state.enteredName) {
            return name + " entered"
        }
        if(this.props.clicked) {
            return name + " clicked"
        }
        return name
    }

    render() {
        return (
            <div className={this.stickerClassName()}>
                <div className="name">
                    HELLO<span>my name is<span className="sub">type your name ↓</span></span>
                </div>
                <input 
                    className="name-box" 
                    type="text" 
                    name="firstname" 
                    autoComplete="off"
                    onChange={this.inputName}
                    onKeyPress={this.enter}
                />
                <div className="bottom"/>
            </div>
        )
    }
}

export default name