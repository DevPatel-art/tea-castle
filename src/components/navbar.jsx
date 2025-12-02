import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/cartcontext";
import logoImg from "../assets/images/logo.png";

+

function Navbar() {
  const { count } = useCart();

  return (
    <header className="header">
      <div className="container navbar">
        <Link to="/" className="brand-pill">
  <img src={logoImg} alt="Tea Castle logo" className="brand-logo" width="22" />
          Tea Castle
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => "nav-link " + (isActive ? "nav-link-active" : "")}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => "nav-link " + (isActive ? "nav-link-active" : "")}>Products</NavLink>
          <NavLink to="/about" className={({ isActive }) => "nav-link " + (isActive ? "nav-link-active" : "")}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => "nav-link " + (isActive ? "nav-link-active" : "")}>Contact</NavLink>
          <NavLink to="/cart" className={({ isActive }) => "nav-link " + (isActive ? "nav-link-active" : "")}>
            Cart {count > 0 && `(${count})`}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;


