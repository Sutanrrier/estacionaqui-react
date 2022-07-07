import React from "react";

import { NavLink } from "react-router-dom";
import "./styles.css";
import logo from "../../images/estacionAquiLogo.svg";

function Navbar() {
  return (
    <nav className="navigation-bar-container">
      <img className="navigation-logo" src={logo} alt="estaciona-aquilogo" />
      <NavLink className="navigation-link" to="/">
        Home
      </NavLink>
      <NavLink className="navigation-link" to="/carros">
        Carros
      </NavLink>
      <NavLink className="navigation-link" to="/estacionamentos">
        Estacionamentos
      </NavLink>
    </nav>
  );
}

export default Navbar;
