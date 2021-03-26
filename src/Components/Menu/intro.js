import React, { Component } from 'react'
import CathyPic from "../../images/me.JPG"
import UCDLogo from "../../images/ucd.png"

class intro extends Component {
    render() {
        return (
            <div className="grid tab intro">
                <div className="text-wrapper">
                    <div className="header">
                        ABOUT ME
                    </div>
                    <p className="p1" >
                        I’m a recent graduate at the University of California - Davis, with a Bachelor in Computer Science and Engineering.
                        <br/><br/>
                        I enjoy coding and love creativity. So with the combination of the two, I love frontend and UX/UI!
                        <br/><br/>
                        I had a year of experience as a UI/Frontend Web Developer Intern at UC Davis from July 2019 to October 2020. I love my work and do enjoy working. I want to extend my skills and knowledge by looking for a similar career.
                        <br/><br/>
                        I also love playing games, including video and board games. Also, sports like badminton and tennis.
                    </p>
                    <img className="ucd-logo" src={UCDLogo} alt="UCD logo" />
                </div>
                <img className="cathy-pic" src={CathyPic} alt="Cathy Pic" />
                <div className="border"/>
            </div>
        )
    }
}

export default intro