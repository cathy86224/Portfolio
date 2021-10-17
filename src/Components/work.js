import React, { Component } from "react";
import Jot from "../images/jot.png";
import Ceed from "../images/ceed.png";
import OurJourney from "../images/journey.png";
import EmissionMap from "../images/emissionMap.png";
import arrow from "../images/arrow.svg";

const TOTAL_PAGE = 2;

class work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  clickPage = (direction) => {
    let page = this.state.page;
    if (direction == "left") {
      page--;
    } else if (direction == "right") {
      page++;
    }
    if (page < 0) page = 0;
    if (page > TOTAL_PAGE - 1) page = TOTAL_PAGE - 1;

    this.setState({ page });
  };

  description(page) {
    if (page === 0) {
      return (
        <p className="p1">
          In my team, I primarily responsible for building and maintaining the
          frontend development. All of our projects are 100% custom-built for UC
          Davis.
          <br />
          <br />I supported and developed several web-based applications and
          features for existing UC website and projects, such as the{" "}
          <a href="https://ceed.ucdavis.edu/" target="_blank">
            Campus Energy Education Dashboard
          </a>
          ,{" "}
          <a href="https://thermoostat.ucdavis.edu/" target="_blank">
            TherMOOstat
          </a>
          , Joules on Tour, and Carbon Neutrality Initiative Dashboard.{" "}
          <span className="sub-text">
            <i>(Both JoT and CNI are still under development)</i>
          </span>
          <br />
          <br />
          During the internship, my colleague, who focused on backend
          development, and I were determined to take on new challenges for
          ourselves. Fortunately, we were able to work on a new project (Carbon
          Neutrality Initiative Dashboard). My primary responsibility is to
          implement and design the frontend components.
        </p>
      );
    } else {
      return (
        <p className="p1">
          During those times, I collaborated with a backend colleague, product
          developer, and data teams weekly to ensure the project is going in the
          right direction. Critical teamwork skills I learned are to communicate
          well, actively listen, and be responsible and honest.
          <br />
          <br />
          In the end, we successfully developed the project from the ground up.
          Also, we were able to pass this project to another department to build
          on more features. It was the most accomplished project I've worked on
          during my internship experience.
          <br />
          <br />
          My internship experience has given me the skills to adjust to the
          changing dynamics while meeting scheduled milestones and deliverables.
        </p>
      );
    }
  }

  projectImage(page) {
    if (page === 0) {
      return (
        <div>
          <div className="img-wrap">
            <img className="screenshot" src={Jot} alt="Jot icon" />
            <i>TherMOOstat</i>
          </div>
          <div className="img-wrap ceed">
            <img className="screenshot" src={Ceed} alt="CEED icon" />
            <i>CEED</i>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="img-wrap">
            <img className="screenshot" src={OurJourney} alt="Jot icon" />
            <i>CNI - OUR JOURNEY</i>
          </div>
          <div className="img-wrap ceed">
            <img className="screenshot" src={EmissionMap} alt="CEED icon" />
            <i>CNI - EMISSIONS MAP</i>
          </div>
        </div>
      );
    }
  }

  render() {
    let page = this.state.page;
    return (
      <div className="grid tab work">
        <div className="text-wrapper work">
          <div className="header">WORK EXPERIENCE</div>
          <div className="sub-header">
            • UI / Frontend Developer Intern
            <span className="date">Jul. 2019 ~ Oct. 2020</span>
          </div>
          {this.description(page)}
          <div className="buttons">
            <img
              className="arrow-button left"
              src={arrow}
              alt="Arrow icon"
              onClick={() => this.clickPage("left")}
            />
            <span className="pages">
              {page + 1} of {TOTAL_PAGE}
            </span>
            <img
              className="arrow-button"
              src={arrow}
              alt="Arrow icon"
              onClick={() => this.clickPage("right")}
            />
          </div>
        </div>
        {this.projectImage(page)}
      </div>
    );
  }
}

export default work;
