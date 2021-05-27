import React from "react";
import Emoji from "../components/Emoji";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <>
      <section className="intro">
        <h1>Search all parks </h1>
        <span class="wave">
          <Emoji symbol="🍃" label="leaf" className="emoji-leaf" />
        </span>
      </section>
      <section className="intro-button">
        <Link to="/parks" className="btn-primary">
          Discover
        </Link>
      </section>
    </>
  );
}

export default Intro;
