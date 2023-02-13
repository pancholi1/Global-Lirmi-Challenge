import PropTypes from "prop-types";
import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./Main.css";
import Select from "@mui/material/Select";
import burger from "../assets/icons/burger.svg";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

export class Main extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      fruits: [],
    };
  }

  handleChange = (event) => {
    this.setState({ fruits: event.target.value });
  };
  render() {
    return (
      <div className="containerMain">
        <TextField className="widthInputMain" label="Nombre de la actividad" />
        <Select
          labelId="demo-simple-select-label"
          placeholder="Recurso"
          id="demo-simple-select"
          className="widthInputMain"
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <TextField
          id="outlined-multiline-static"
          className="widthInputMain"
          label="Enunciado"
          multiline
          rows={4}
        />
        <div className="containerActivity">
          <InputLabel id="demo-multiple-name-label">Actividad</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            className="selectMultipleActivity"
            multiple
            value={this.state.fruits}
            onChange={this.handleChange}
            inputProps={{
              name: "fruits",
              id: "demo-mutiple-name",
            }}
          >
            <MenuItem value="manzana">Manzana</MenuItem>
            <MenuItem value="naranja">Naranja</MenuItem>
            <MenuItem value="banana">Banana</MenuItem>
            <MenuItem value="pera">Pera</MenuItem>
          </Select>

          <div className="rowInputsContainer">
            <FormControlLabel value="male" control={<Radio />} />

            <TextField className="widthInputMain" label="Alternativa 1" />
            <img className="burger" src={burger}></img>
          </div>
          <div className="rowInputsContainer">
            <FormControlLabel value="male" control={<Radio />} />

            <TextField className="widthInputMain" label="Alternativa 2" />
            <img className="burger" src={burger}></img>
          </div>
          <div className="rowInputsContainer">
            <FormControlLabel value="male" control={<Radio />} />

            <TextField className="widthInputMain" label="Alternativa 3" />
            <img className="burger" src={burger}></img>
          </div>
        </div>

        {(this.props.state.pistas ||
          this.props.state.solucionario ||
          this.props.state.mensaje) && (
          <div className="containerInputsSwitcher">
            {this.props.state.pistas && <TextField label="Pistas" />}
            {this.props.state.solucionario && (
              <TextField label="Solucionario" />
            )}
            {this.props.state.mensaje && (
              <TextField label="Personalizar mensaje" />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Main;
