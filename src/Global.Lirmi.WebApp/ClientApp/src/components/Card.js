import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Card.css";
import burger from "../assets/icons/burger.svg";
import burgerWhite from "../assets/icons/burgerWhite.svg";

const statusCards = [
  {
    id: "1",
    name: "active",
    label: "Activo",
  },
  {
    id: "2",
    name: "validate",
    label: "Por validar",
  },
  {
    id: "3",
    name: "draft",
    label: "Borrador",
  },
  {
    id: "4",
    name: "inactive",
    label: "Inactivo",
  },
];
export class Card extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = { value: "1" };

    this.handleChange = this.handleChange.bind(this);
    this.getListStyle = this.getListStyle.bind(this);
  }

  getListStyle() {
    if (this.state.value === "2") {
      return { background: "#DFF9FF" };
    }
    if (this.state.value === "1") {
      return { background: "#C7F4CB" };
    }
    if (this.state.value === "3") {
      return { background: "#EAEAEA" };
    }
    if (this.state.value === "4") {
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
          this.state.value === "2" ? "containerValidarCard" : "containerCard"
        }
      >
        <div className="containerTitle">
          <div
            className={
              this.state.value === "2" ? "titleValidarCard" : "titleCard"
            }
          >
            Recurso
          </div>
          <img src={this.state.value === "2" ? burgerWhite : burger} />
        </div>
        <div
          className={
            this.state.value === "2" ? "subtitleValidarCard" : "subtitleCard"
          }
        >
          Nombre de la actividad
        </div>
        <div className="containerStatusCard">
          <div
            className={
              this.state.value === "2" ? "subtitleValidarCard" : "subtitleCard"
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
            {statusCards.map(({ label, id }) => (
              <option value={id} key={id}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Card;
