import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Question_input() {
  return (
    <>
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
    </>
  );
}
export default Question_input;
