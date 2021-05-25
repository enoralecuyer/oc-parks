import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ParkContainer from "../components/ParkContainer";

const Parks = () => {
  return (
    <>
      <Hero hero="parksHero">
        <Banner title="All Parks">
          <Link to="/" className="btn-primary">
            Back Home
          </Link>
        </Banner>
      </Hero>
      <ParkContainer />
    </>
  );
};

export default Parks;
