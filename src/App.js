import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Header,
  Alert,
  Corona,
  Contagion,
  Symptomps,
  Should,
  Question,
  Footer,
  AllPage,
} from "./components/iindex.js";

function App() {
  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setNavbar(data[0].headerLinks);
      })
      .catch(function (error) {
        console.log("Hata!!!");
      }, []);
  });

  return (
    <Router>
      <>
        <header>
          <Header links={navbar} />
        </header>
        {
          <Switch>
            <Route exact path="/alert">
              <Alert />
            </Route>
            <Route exact path="/corona">
              <Corona />
            </Route>
            <Route exact path="/contagion">
              <Contagion />
            </Route>
            <Route exact path="/symptomps">
              <Symptomps />
            </Route>
            <Route exact path="/should">
              <Should />
            </Route>
            <Route exact path="/question">
              <Question />
            </Route>
            <Route exact path="/footer">
              <Footer />
            </Route>

            <Route path="/">
              <AllPage />
            </Route>
          </Switch>
        }
      </>
    </Router>
  );
}

export default App;
