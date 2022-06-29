import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/estacionAquiLogo.svg";

function Navbar() {
  return (
    <div className="navigation-bar-container">
      <img className="navigation-logo" src={logo} alt="estaciona-aquilogo" />
      <Link className="navigation-link" to="/">
        Home
      </Link>
      <Link className="navigation-link" to="carros">
        Carros
      </Link>
      <Link className="navigation-link" to="estacionamentos">
        Estacionamentos
      </Link>
    </div>
  );
}

export default Navbar;
