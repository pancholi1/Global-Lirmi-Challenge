import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Card.css";
import burger from "../assets/icons/burger.svg";
import burgerWhite from "../assets/icons/burgerWhite.svg";

export class Card extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = { value: "activo" };

    this.handleChange = this.handleChange.bind(this);
    this.getListStyle = this.getListStyle.bind(this);
  }

  getListStyle() {
    if (this.state.value === "validar") {
      return { background: "#DFF9FF" };
    }
    if (this.state.value === "activo") {
      return { background: "#C7F4CB" };
    }
    if (this.state.value === "borrador") {
      return { background: "#EAEAEA" };
    }
    if (this.state.value === "inactivo") {
      return { background: "#FFD5D2" };
    }
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div
        className={
          this.state.value === "validar"
            ? "containerValidarCard"
            : "containerCard"
        }
      >
        <div className="containerTitle">
          <div
            className={
              this.state.value === "validar" ? "titleValidarCard" : "titleCard"
            }
          >
            Recurso
          </div>
          <img src={this.state.value === "validar" ? burgerWhite : burger} />
        </div>
        <div
          className={
            this.state.value === "validar"
              ? "subtitleValidarCard"
              : "subtitleCard"
          }
        >
          Nombre de la actividad
        </div>
        <div className="containerStatusCard">
          <div
            className={
              this.state.value === "validar"
                ? "subtitleValidarCard"
                : "subtitleCard"
            }
          >
            17 min
          </div>
          <select
            value={this.state.value}
            className="statusSelect"
            onChange={this.handleChange}
            style={this.getListStyle()}
          >
            <option value="validar">Por validar</option>
            <option value="activo">Activo</option>
            <option value="borrador">Borrador</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Card;
