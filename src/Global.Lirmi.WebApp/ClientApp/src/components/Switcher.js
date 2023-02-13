import Switch from "@mui/material/Switch";
import React, { Component } from "react";
import "./Switcher.css";
export class Switcher extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="container">
        <div className="titleSwitch">Ayuda antes de responder</div>
        <div className="containerSwitch">
          <div className="subtitleSwitch">Pistas </div>
          <Switch
            name="pistas"
            checked={this.props.state.pistas}
            onChange={this.props.handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <span className="lineSwitch"> </span>
        <div className="titleSwitch">
          Retroalimentación de respuesta incorrecta
        </div>
        <div className="containerSwitch">
          <div className="subtitleSwitch">Solucionario</div>
          <Switch
            name="solucionario"
            checked={this.props.state.solucionario}
            onChange={this.props.handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className="lineSwitch"> </div>
        <div className="titleSwitch">
          Retroalimentación de respuesta correcta{" "}
        </div>
        <div className="containerSwitch">
          <div className="subtitleSwitch">Personalizar mensaje</div>
          <Switch
            name="mensaje"
            checked={this.props.state.mensaje}
            onChange={this.props.handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </div>
    );
  }
}

export default Switcher;
