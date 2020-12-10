import React, { Component } from 'react'
import Jot from "../../../images/jot.png"
import Cold from "../../../images/cold.png"
import Chill from "../../../images/chilly.png"
import Perfect from "../../../images/perfect.png"
import Warm from "../../../images/warm.png"
import Hot from "../../../images/hot.png"

const TEMPERTURE = [Cold, Chill, Perfect, Warm, Hot]
const TEMPERTURE_NAME = ["cold", "chill", "perfect", "warm", "hot"]

export default class moo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sub-header">
                    • TherMOOstat
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
                <img className="ceed" src={Jot} alt="TherMoostat img"/>
                {TEMPERTURE.map((item, i) => (
                    <img className={"ceed " + "tem " + TEMPERTURE_NAME[i]} key={item} src={item} alt={"TherMoostat " + item} />
                ))}
            </React.Fragment>
        )
    }
}
