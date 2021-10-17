import React, { Component } from "react";
import emailIcon from "../images/email.png";
import phoneIcon from "../images/phone.png";
import githubIcon from "../images/github.svg";
import linkedInIcon from "../images/linkedin.png";
import personIcon from "../images/person.png";
import referenceIcon from "../images/reference.png";
import Resume from "../images/Hsieh_Resume.pdf";
import Reference from "../images/Hsieh_References.pdf";
import Me from "../images/me1.jpg";

class contact extends Component {
  render() {
    return (
      <div className="grid tab">
        <div className="text-wrapper contact">
          <div className="header">CONTACT ME</div>
          <div className="contact-row">
            <img className="icons" src={emailIcon} alt="Email icon" />
            <a href="mailto:cchsieh@ucdavis.edu">cchsieh@ucdavis.edu</a>
          </div>
          <div className="contact-row">
            <img className="icons" src={phoneIcon} alt="Phone icon" />
            (619) 851 - 3835
          </div>
          <div className="contact-row">
            <img className="icons" src={linkedInIcon} alt="Github icon" />
            <a href="https://www.linkedin.com/in/cchsieh/" target="_black">
              LinkedIn
            </a>
          </div>
          <div className="contact-row">
            <img className="icons" src={githubIcon} alt="Github icon" />
            <a href="https://github.com/cathy86224" target="_blank">
              GitHub
            </a>
          </div>
          <div className="contact-row">
            <img className="icons" src={personIcon} alt="Person icon" />
            <a href={Resume} target="_blank">
              Resume
            </a>
          </div>
          <div className="contact-row">
            <img className="icons" src={referenceIcon} alt="Person icon" />
            <a href={Reference} target="_blank">
              References
            </a>
          </div>
          <img className="me" src={Me} alt="Cathy Picture" />
          <div className="border" />
        </div>
      </div>
    );
  }
}

export default contact;
