import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

import Maskgirl_1 from "./../images/Maskgirl_1.svg";
function Should_01() {
  const [should, setShould] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setShould(data[0].preventionPage);
      })
      .catch(function (error) {
        console.log("Uşaşılamıyor!", error);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-12 col-lg-7">
        <div className="ingredients__left">
          <h2 className="ingredients__title1">{should.title1}</h2>
          <p className="ingredients__desc1">{should.description1}</p>
          <Link
            to="/sifirbir"
            className="ingredients__button1 ingredients__button2"
          >
            {should.id1}
          </Link>
        </div>
      </div>
      <div className="col-12 col-lg-5">
        <img src={Maskgirl_1} alt="user" />
      </div>
    </div>
  );
}
export default Should_01;
