import React, { Component } from 'react'
import Jot from "../../images/jot.png"
import Ceed from "../../images/ceed.png"

class work extends Component {

    render() {
        return (
            <div className="grid tab work">
                 <div className="text-wrapper work">
                    <div className="header">
                        WORK EXPERIENCE
                    </div>
                    <div className="sub-header">
                        • UI / Frontend Developer Intern
                        <span className="date">Jul. 2019 ~ Oct. 2020</span>
                    </div>
                    <br/>
                    <p className="p1" >
                    I supported and developed several web-based applications and features for existing UC website and projects, 
                    such as the {" "}
                    <a href="https://ceed.ucdavis.edu/" target="_blank">
                        Campus Energy Education Dashboard
                    </a>, {" "}
                    <a href="https://thermoostat.ucdavis.edu/" target="_blank">
                        TherMOOstat
                    </a>, Joules on Tour, and Carbon Neutrality Initiative Dashboard. {" "}
                    <span className="sub-text"><i>(Both JoT and CNI are still under development)</i></span>
                    <br/>
                    <br/>
                        During my web developer internship at UC Davis, I strengthened my abilities and developed numerous skills such as HTML, CSS/SCSS, React JSX, GraphQL, and many other areas. Our team worked in an agile development environment, which has sharpened my communication and teamwork skills. 
                    </p>
                </div>
                <div className="img-wrap">
                    <img className="screenshot" src={Jot} alt="Jot icon"/>
                    <i>TherMOOstat</i>
                </div>
                <div className="img-wrap ceed">
                    <img className="screenshot" src={Ceed} alt="CEED icon"/>
                    <i>CEED</i>
                </div>
            </div>
        )
    }
}

export default work