import React from "react";
import "../App.css";
import Header_Logo from "./Header_Logo";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div>
            <div className="footer__nav--position">
              <Header_Logo />
              <div>
                <nav className="footer__nav">
                  <li>
                    <Link to="/alert" className="nav__item ">
                      Overview
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/corona" className="nav__item">
                      Contagion
                    </Link>
                  </li>
                  <li>
                    <Link to="/symptomps" className="nav__item">
                      Symptoms
                    </Link>
                  </li>
                  <li>
                    <Link to="/should" className="nav__item">
                      Prevention
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="iconns">
                <Link to="/face">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="/you">
                  {" "}
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link to="/vue">
                  <i className="fab fa-vuejs"></i>
                </Link>
                <Link to="/twi">
                  <i className="fab fa-twitter"></i>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="uppertitle">
              2020 @ All rights reserved by pixelspark.co
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
