import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "../App.css";
import Header_Logo from "./Header_Logo";
import { Link } from "react-router-dom";

function Header({ links }) {
  return (
    <>
      <header className="container">
        <div className="Header-position">
          <div className="Header_Logo">
            <Header_Logo />
          </div>
          <Nav links={links} />
        </div>
      </header>
    </>
  );
}
export default Header;
