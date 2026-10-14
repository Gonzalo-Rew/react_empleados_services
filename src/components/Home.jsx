import React, { Component } from "react";
import EmpleadosService from "../services/EmpleadosService";

export default class Home extends Component {
  state = {
    empleados: [],
  };

  service = new EmpleadosService();

  loadEmpleados() {
    this.service.getEmpleadosByOficio(this.props.oficio).then((result) => {
      this.setState({
        empleados: result,
      });
    });
  }

  componentDidMount() {
    this.loadEmpleados();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.oficio !== this.props.oficio) {
      this.loadEmpleados();
    }
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>Empleados por oficio: {this.props.oficio}</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>IdEmpleado</th>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Salario</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empleados.map((empleado, index) => {
              return (
                <tr key={index}>
                  <td>{empleado.idEmpleado}</td>
                  <td>{empleado.apellido}</td>
                  <td>{empleado.oficio}</td>
                  <td>{empleado.salario}</td>
                  <td>{empleado.departamento}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
