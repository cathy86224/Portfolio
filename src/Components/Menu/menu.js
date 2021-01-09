import React, { Component } from 'react'
import Intro from "./intro"
import Contact from "./contact"
import Work from "./work"
import Project from "./project"
import CathyLogo from "../../images/cathy.png"
import "./menu.scss"

const MENU_ITEMS = ['about','projects','work','contact']
const DEFAULT_TAB = "about"

class intro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: DEFAULT_TAB
        }
    }

    menuClassName(item) {
        let menu = "menu-item"
        if(this.state.currentTab === item) {
            return menu + " active"
        }
        return menu
    } 

    selectTab = item => {
        this.setState({currentTab: item})
    }

    displayTab() {
        let tab = this.state.currentTab
        if(tab === "about") 
            return <Intro />
        else if(tab === "projects")
            return <Project />
        else if(tab === "work")
            return <Work />
        else 
            return <Contact />
    }

    render() {
        return (
            <div className="menu entered">
                <div className="menu-header">
                    {MENU_ITEMS.map(item => (
                        <div 
                            className={this.menuClassName(item)} 
                            key={item}
                            onClick={() => this.selectTab(item)}
                        >
                            {item.toUpperCase()}
                        </div>
                    ))}
                </div>
                <img className="cathy-logo" src={CathyLogo} alt="Cathy Icon" />
                {this.displayTab()}
            </div>
        )
    }
}

export default intro