import React, { Component } from 'react'
import CNI1 from "../../../images/cni1.png"
import CNI2 from "../../../images/cni2.png"

export default class cni extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sub-header">
                    • Carbon Neutrality Initiative Dashboard
                </div>
                <p className="p1" >
                    <i>Project background: </i>
                    Provide progress indicators for UC’s path to carbon neutrality in order to increase transparency and accountability for all stakeholders and engage UC campus communities
                    <br/>
                    <br/>
                    <i>Objectives: </i>
                    Increase awareness of the CNI among campus communities (such that more students, faculty and staff, and the general public are aware the initiative exists); this is indirectly a product of creating an engaging dashboard that stakeholders at each campus (facilities, energy, and sustainability leaders, student groups and faculty) want to use.
                    <br/>
                    <br/>
                    <i>This project is currently under development</i>
                </p>
                <img className="ceed" src={CNI1} alt="CNI img"/>
                <img className="ceed one" src={CNI2} alt="CNI img"/>
            </React.Fragment>
        )
    }
}
