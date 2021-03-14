import React from "react";
import {
  Alert,
  Corona,
  Contagion,
  Symptomps,
  Should,
  Question,
  Footer,
} from "./iindex.js";

function AllPage({ links }) {
  return (
    <>
      <Alert links={alert} />
      <Corona />
      <Contagion />
      <Symptomps />
      <Should />
      <Question />
      <Footer />
    </>
  );
}
export default AllPage;
