import React, { Component } from "react";
import { ParkContext } from "../context";
import Parks from "./Parks";
import Title from "./Title";

export default class FeaturedParks extends Component {
  static contextType = ParkContext;
  render() {
    let { featuredParks: parks } = this.context;
    parks = parks.map((park) => {
      return <Parks key={park.id} park={park} />;
    });
    return (
      <section className="featured-parks">
        <Title title="latest parks" />
        <div className="featured-rooms-center">{parks}</div>
      </section>
    );
  }
}
