import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import EmpleadosService from "../services/EmpleadosService";

export default class Menu extends Component {
  state = {
    oficios: [],
  };

  service = new EmpleadosService();

  loadOficios() {
    this.service.getOficios().then((result) => {
      this.setState({
        oficios: result,
      });
    });
  }

  componentDidMount() {
    this.loadOficios();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#home">
          <img
            src="https://cdn-icons-png.flaticon.com/512/912/912265.png"
            width="50"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <NavLink to="/home/ANALISTA" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                href="#dropdown"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Oficios
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {this.state.oficios.map((oficio, index) => {
                  return (
                    <li key={index}>
                      <NavLink className="dropdown-item" to={`/home/${oficio}`}>
                        {oficio}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
