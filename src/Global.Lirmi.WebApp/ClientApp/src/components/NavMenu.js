import React, { Component } from "react";
import "./NavMenu.css";
import goBack from "../assets/icons/goBack.svg";
import cloud from "../assets/icons/cloud.svg";
import burger from "../assets/icons/burger.svg";
export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header className="headerContainer">
        <div className="optionsHeader">
          <div className="goBackHeader">
            <img src={goBack}></img>
            <div>Física 3° Primaria</div>
          </div>
          <div className="descriptionHeader">
            <img src={cloud}></img>
            <div>Todos los cambios guardados</div>
            <div className="containerBurger">
              <img src={burger}></img>
            </div>
          </div>
        </div>
        <div className="titleHeader">Características de los seres vivos</div>
      </header>
    );
  }
}
