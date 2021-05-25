import React, { Component } from "react";
import defaultBackground from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ParkContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SinglePark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBackground,
    };
  }
  static contextType = ParkContext;
  render() {
    const { getPark } = this.context;
    const park = getPark(this.state.slug);
    if (!park) {
      return (
        <div className="error">
          <h3>no such park could be found.</h3>
          <Link to="/parks" className="btn-primary">
            back to parks
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = park;
    return (
      <StyledHero image={images[0] || this.state.defaultBackground}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to Parks
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}
