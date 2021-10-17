import React, { Component } from "react";
import EEC from "./Projects/eec";
import Opth from "./Projects/ophth";
import CEED from "./Projects/ceed";
import MOO from "./Projects/moo";
import CNI from "./Projects/cni";
import arrow from "../images/arrow.svg";

const TOTAL_PAGE = 5;
const PAGES = [<EEC />, <Opth />, <CEED />, <MOO />, <CNI />];

class project extends Component {
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

  render() {
    let page = this.state.page;
    return (
      <div className="grid tab projects">
        <div className="text-wrapper projects">
          <div className="header">PROJECTS</div>
          {PAGES[page]}
        </div>
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
    );
  }
}

export default project;
