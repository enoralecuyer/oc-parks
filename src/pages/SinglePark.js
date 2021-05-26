import React, { Component } from "react";
import defaultBackground from "../images/room-1.jpeg";
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
      time,
      distance,
      extras,
      breakfast,
      dogs,
      images,
    } = park;

    //let's not repeat the main image
    const [mainImage, ...defaultImage] = images;
    return (
      <>
        <StyledHero image={mainImage || this.state.defaultBackground}>
          <Banner title={`${name} park`}>
            <Link to="/parks" className="btn-primary">
              Back to Parks
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-park">
          <div className="single-park-images">
            {defaultImage.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-park-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>distance: ${distance}</h6>
              <h6>time: ${time} SQFT</h6>
              <h6>
                max capacity:
                {capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`}
              </h6>
              <h6>{dogs ? "dogs allowed" : "no dogs allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="park-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
