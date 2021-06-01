import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Parks from "./pages/Parks";
import SinglePark from "./pages/SinglePark";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopArrow from './components/BackToTopArrow'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/parks" component={Parks} />
        <Route exact path="/about" component={About} />
        <Route exact path="/parks/:slug" component={SinglePark} />
        <Route component={Error} />
      </Switch>
      <Footer />
      <BackToTopArrow/>
    </>
  );
}

export default App;
