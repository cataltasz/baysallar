import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <nav className={"Navbar " + (click && "active")}>
      <div className="mobile-container">
        <Link to="/">
          <div className="Navbar-Logo">
            Baysallar Mobilya
          </div>
        </Link>

        <div
          className={"hamburger " + (click && "active")}
          onClick={handleClick}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>

      <div className={"Navbar-Links " + (click && "active")}>
        <Link
          to="/"
          className="NavLink clickable-gray-box"
          onClick={closeMobileMenu}
        >
          Anasayfa
        </Link>
        <Link
          to="/urunler"
          className="NavLink clickable-gray-box"
          onClick={closeMobileMenu}
        >
          Ürünlerimiz
        </Link>
        <Link
          to="/iletisim"
          className="NavLink clickable-gray-box"
          onClick={closeMobileMenu}
        >
          Bize Ulaşın
        </Link>

      </div>

      <div
        className={"Overlay " + (click && "active")}
        onClick={closeMobileMenu}
      >
        {" "}
      </div>
    </nav>
  );
}
