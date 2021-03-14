import React from "react";
import Symptomps_Top from "./Symptomps_Top";
import Symptomps_Bottom from "./Symptomps_Bottom";

function Symptomps({ links }) {
  return (
    <>
      <section className="symptomps">
        <div className="container">
          <div className="symptomps__center">
            <Symptomps_Top />
          </div>
          <div className="symptomps__image">
            <Symptomps_Bottom />
          </div>
        </div>
      </section>
    </>
  );
}
export default Symptomps;
