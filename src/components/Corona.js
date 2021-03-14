import React from "react";
import Corona_Left from "./Corona_Left";
import Corona_Right from "./Corona_Right";
function Corona() {
  return (
    <>
      <section className="corona">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <figure className="corona__group">
                <Corona_Left />
              </figure>
            </div>

            <div className="col-12 col-lg-7">
              <div className="corona__padding">
                <Corona_Right />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Corona;
