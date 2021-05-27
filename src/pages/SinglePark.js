import React, { Component } from "react";
import defaultBackground from "../images/mountain1.jpg";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { ParkContext } from "../context";

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
      difficulty,
      time,
      distance,
      extras,
      parking,
      dogs,
      view,
      accessible,
      images,
    } = park;

    //let's not repeat the main image
    const [mainImage, ...defaultImage] = images;
    return (
      <>
        <Title title={`${name} park`}></Title>
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
              <h6>distance: {distance} miles</h6>
              <h6>time: {time} min</h6>
              <h6>Difficulty: {difficulty}</h6>
              <h6>{dogs ? "dogs allowed" : "no dogs allowed"}</h6>
              <h6>{parking && "free parking"}</h6>
              <h6>{view && "with view"}</h6>
              <h6>{accessible && "wheelchair accessible"}</h6>
            </article>
          </div>
          <div className="single-park-info">
            <h3>My impressions</h3>
          </div>
          <div className="single-park-info">
            <h3>How to access the park</h3>
          </div>
        </section>
      </>
    );
  }
}
