import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Parks = () => {
  return (
    <>
      <div>hello</div>
      <Hero hero="parksHero">
        <Banner title="All Parks">
          <Link to="/" className="btn-primary">
            Back Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default Parks;
