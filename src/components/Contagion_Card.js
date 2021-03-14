import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Mask from "./../images/Mask.svg";
import hand from "./../images/hand.jpg";
import drink from "./../images/drink.svg";
function Contagion_Card() {
  const [contagioncard, setContagioncard] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setContagioncard(data[0].cards);
      })
      .catch(function (error) {
        console.log("Uşaşılamıyor!", error);
      });
  }, []);
  return (
    <div id="Contagion">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <figure className="card__image">
              <img src={Mask} alt="hand"></img>
            </figure>
            <h2 className="card__title">{contagioncard.title}</h2>
            <p className="card__desc">{contagioncard.description}</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <figure className="card__image">
              <img src={Mask} alt="hand"></img>
            </figure>
            <h2 className="card__title">{contagioncard.title1}</h2>
            <p className="card__desc">{contagioncard.description1}</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <figure className="card__image">
              <img src={Mask} alt="hand"></img>
            </figure>
            <h2 className="card__title">{contagioncard.title2}</h2>
            <p className="card__desc">{contagioncard.description2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contagion_Card;
