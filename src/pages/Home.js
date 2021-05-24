import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Information from "../components/Information";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="my favorite parks" subtitle="in orange county">
          <Link to="/parks" className="btn-primary">
            Discover
          </Link>
        </Banner>
      </Hero>
      <Information />
    </>
  );
}
