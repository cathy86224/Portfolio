import React, { Component } from 'react'
import Toaster from "../../../images/toast.png"
import Toaster1 from "../../../images/toast1.png"
import Toaster2 from "../../../images/toast2.png"

export default class eec extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sub-header">
                    • EEC 172 Final Lab - Smart Toaster System
                </div>
                <p className="p1 eec" >
                    <i>Project background: </i>
                    Introduction to embedded-system hardware and software. Topics include: embedded processor and memory architecture; input/output hardware and software, including interrupts and direct memory access; interfacing with sensors and actuators; wired and wireless embedded networking.
                    <br/>
                    <br/>
                    <i>Overview: </i>A bread slice-dispensing system that could essentially be utilized in a smart-home setting. 
                    This is an embedded toaster system on the TI CC3200 LaunchPad interface. On trigger, the system turns on the conveyer belt which then dispenses a slice of bread into the toaster.
                    <br/>
                    <br/>
                    <i>More info & similar projects: </i>
                    <a href="https://cchsieh2.wixsite.com/eec172" target="_blank">
                        More info
                    </a>
                </p>
                <iframe className="video" src="https://www.youtube.com/embed/OalH__iGCKs" frameBorder="0" allowFullScreen/>
                <div className="img-wrap">
                    <img className="toaster" src={Toaster} alt="Toaster Logo"/>
                    <span className="sub"><i>Logo</i></span>
                </div>
                <div className="img-wrap">
                    <img className="toaster one" src={Toaster1} alt="Toaster one Logo"/>
                    <span className="sub one"><i>Toasting</i></span>
                </div>
                <div className="img-wrap">
                    <img className="toaster two" src={Toaster2} alt="Toaster two Logo"/>
                    <span className="sub two"><i>Toast ready</i></span>
                </div>
            </React.Fragment>
        )
    }
}
