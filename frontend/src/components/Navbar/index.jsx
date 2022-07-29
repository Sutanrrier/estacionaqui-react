import React from "react";
import { NavLink } from "react-router-dom";

import "materialize-css";
import { Navbar } from "react-materialize";

function NavigationBar() {
  return (
    <Navbar
      alignLinks="left"
      brand={
        <p style={{ marginRight: "2rem" }} className="brand-logo right">
          EstacionAqui
        </p>
      }
      id="mobile-nav"
      options={{
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavLink className="navigation-link" to="/">
        Home
      </NavLink>
      <NavLink className="navigation-link" to="/carros">
        Carros
      </NavLink>
      <NavLink className="navigation-link" to="/estacionamentos">
        Estacionamentos
      </NavLink>
      <NavLink className="navigation-link" to="/relatorios">
        Relatórios
      </NavLink>
    </Navbar>
  );
}

export default NavigationBar;
