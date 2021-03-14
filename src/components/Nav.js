import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav({ links }) {
  const resultHTML = [];
  links.forEach((e) => {
    resultHTML.push(
      <li className="nav-item active">
        <Link to="/alert" className="nav__item ">
          {e}
        </Link>
      </li>
    );
  });

  return (
    <div>
      {" "}
      <header className="header navbar-expand-lg ">
        <div className="container">
          <div className="nav-wrap ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to="#"></Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className=" my-2 my-lg-0">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link
                        to="/alert"
                        className="nav__item nav__item--active "
                      >
                        Overview
                      </Link>
                    </li>
                    {resultHTML}
                  </ul>
                  <form>
                    <Link to="/Contact" type="submit" className=" nav__button">
                      Contact
                    </Link>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Nav;
