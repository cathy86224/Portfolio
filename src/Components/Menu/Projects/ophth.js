import React, { Component } from 'react'
import Doc from "../../../images/opDoc.pdf"
import Op1 from "../../../images/o1.png"
import Op2 from "../../../images/o2.png"
import Op3 from "../../../images/o3.png"

export default class ophth extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sub-header">
                    • Ophthalmology iOS app
                </div>
                <p className="p1">
                    <i>Project background: </i>
                    There is too much information spread out over several books that is too difficult to study over for medical students. This application serves to condense the extensive amount of information on ophthalmology and makes learning more efficient, simple and interactive. 
                    <br/>
                    <br/>
                    <i>Overview: </i>
                    An educational iOS app for medical students studying for the clinical Ophthalmology exam. An interactive powerpoint-style application designed specifically for Ophthalmology students. 
                    <br/>
                    <br/>
                    <i>More info: </i>
                    <a href={Doc} target="_blank">
                        User Guide
                    </a>
                </p>
                <img className="opth" src={Op1} alt="Optho img" />
                <img className="opth two" src={Op2} alt="Optho img" />
                <img className="opth three" src={Op3} alt="Optho img" />
            </React.Fragment>
        )
    }
}
