import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Question() {
  return (
    <>
      <section className="question">
        <div className="container">
          <div className="question__commina">
            <div>
              <h2 className="question__title">
                Have Question in mind? Let us help you asdasdasd
              </h2>
            </div>
            <div className="question__position">
              <form>
                <input
                  type="mail"
                  className="question__mail"
                  placeholder="duranunverdi1905@gmail.com"
                />
                <Link className="question__send" to="Send">
                  Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Question;
