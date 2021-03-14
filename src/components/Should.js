import React from "react";
import Should_Top from "./Should_Top";
import Should_01 from "./Should_01";
import Should_02 from "./Should_02";
import Should_03 from "./Should_03";
import Should_04 from "./Should_04";
function Should() {
  return (
    <>
      <section id="Should" className="should">
        <div className="container">
          <Should_Top />
          <div className="ingredients">
            <div className="container">
              <Should_01 />
              <Should_02 />
              <Should_03 />
              <Should_04 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Should;
