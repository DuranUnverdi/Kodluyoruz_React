import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Symptomps_Top({ links }) {
  const [symptomp, setSymptomp] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setSymptomp(data[0].symptompsPage);
      })
      .catch(function (error) {
        console.log("Uşaşılamıyor!", error);
      });
  }, []);
  return (
    <div>
      <span> {symptomp.title}</span>
      <h2 className="symptomps__title">{symptomp.subtitle}</h2>
      <p className="symptomps__desc"> {symptomp.description}</p>
    </div>
  );
}
export default Symptomps_Top;
