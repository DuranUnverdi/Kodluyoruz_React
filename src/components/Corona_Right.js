import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

import { Link } from "react-router-dom";

function Corona_Right() {
  const [corona, setCorona] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setCorona(data[0].indexPage);
      })
      .catch(function (error) {
        console.log("Request Found! ", error);
      });
  }, []);

  return (
    <div>
      <span>{corona.title2}</span>
      <h1 className="corona__title">{corona.subtitle2}</h1>
      <p className="corona__desc"> {corona.description2}</p>
      <Link to="/what is corona" className="corona__button">
        Learn More{" "}
      </Link>
    </div>
  );
}
export default Corona_Right;
