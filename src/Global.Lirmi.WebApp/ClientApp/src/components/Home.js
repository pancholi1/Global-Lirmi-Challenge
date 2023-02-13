import React, { Component } from "react";
import "./Home.css";
import Main from "./Main";
import Switcher from "./Switcher";
import Experience from "./Experience";

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = {
      pistas: false,
      solucionario: false,
      mensaje: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.checked });
  }

  render() {
    return (
      <div className="containerHome">
        <div className="experienceHome">
          <Experience></Experience>
        </div>
        <div className="contentHome">
          <Main state={this.state}></Main>
        </div>
        <div className="experienceHome">
          <Switcher
            state={this.state}
            handleChange={this.handleChange}
          ></Switcher>
        </div>
      </div>
    );
  }
}
