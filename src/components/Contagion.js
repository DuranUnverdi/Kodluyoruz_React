import React from "react";
import Contagion_Top from "./Contagion_Top";
import Contagion_Card from "./Contagion_Card";

function Contagion() {
  return (
    <>
      <section className="contagion">
        <div className="container">
          <div className="contagion__center"></div>
          <Contagion_Top />
          <Contagion_Card />
        </div>
      </section>
    </>
  );
}
export default Contagion;
