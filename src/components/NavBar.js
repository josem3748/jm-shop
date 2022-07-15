import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand">JM</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/category/1">
                <span className="nav-link" href="#">
                  Basic
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/2">
                <span className="nav-link" href="#">
                  Premium
                </span>
              </Link>
            </li>
          </ul>
          <div className="mx-3">
            <Link to="/cart">
              <CartWidget />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
