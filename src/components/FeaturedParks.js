import React, { Component } from "react";
import { ParkContext } from "../context";

export default class FeaturedParks extends Component {
  static contextType = ParkContext;
  render() {
    const { featuredParks: parks } = this.context;
    console.log(parks);
    return <div> from featured parks</div>;
  }
}
