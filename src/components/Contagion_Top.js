import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Contagion_Top() {
  const [contagion, setContagion] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setContagion(data[0].contagionPage);
      })
      .catch(function (error) {
        console.log("Uşaşılamıyor!", error);
      });
  }, []);
  return (
    <div>
      <span> {contagion.title}</span>
      <h1 className="contagion__title">{contagion.subtitle}</h1>
      <p className="contagion__desc"> {contagion.description}</p>
    </div>
  );
}
export default Contagion_Top;
