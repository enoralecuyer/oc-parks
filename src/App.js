import React from "react";
import "./App.css";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Parks from "./pages/Parks";
import SinglePark from "./pages/SinglePark";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/parks" component={Parks} />
        <Route exact path="/parks/:slug" component={SinglePark} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
