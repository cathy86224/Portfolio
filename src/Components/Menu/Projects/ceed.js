import React, { Component } from 'react'
import CEEDimg from "../../../images/ceed.png"
import CEED1img from "../../../images/ceed1.png"

export default class ceed extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sub-header">
                    • Campus Energy Education Dashboard (CEED)
                </div>
                <p className="p1" >
                    <i>Project background: </i>
                    At UC Davis, we understand different buildings use different amounts of energy. In Facilities Energy & Engineering we're driven to understand our buildings so we can increase energy efficiency and help our campus meet its carbon neutrality goals.
                    <br/>
                    <br/>
                    <i>Overview: </i>
                    Historical and real-time building energy data for University of California Davis. The first step to saving energy is seeing how much you use.
                    <br/>
                    <br/>
                    <i>Website link: </i>
                    <a href="https://ceed.ucdavis.edu/" target="_blank">
                        CEED
                    </a>
                </p>
                <img className="ceed" src={CEEDimg} alt="CEED img"/>
                <img className="ceed one" src={CEED1img} alt="CEED img"/>
            </React.Fragment>
        )
    }
}
