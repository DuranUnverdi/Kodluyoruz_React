import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Alert_Left() {
  const [alert, setAlert] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setAlert(data[0].indexPage);
      })
      .catch(function (error) {
        console.log("Uşaşılamıyor!", error);
      });
  }, []);

  return (
    <div>
      <span>{alert.title}</span>
      <h1 className="alert__title">{alert.subtitle}</h1>
      <p className="alert__desc">{alert.description}</p>
      <Link to="/help" className="alert__button">
        Let Us Help{" "}
      </Link>
    </div>
  );
}
export default Alert_Left;
