import React, { Component } from "react";
import defaultBackground from "../images/aliso_park/alisopark1.jpg";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { ParkContext } from "../context";
import Map from "../components/Map";

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
      parking,
      dogs,
      view,
      accessible,
      images,
    } = park;
    return (
      <>
        <Title title={`${name}`}></Title>
        <section className="single-park">
          <div className="single-park-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} loading="lazy" />;
            })}
          </div>
          <div className="single-park-info">
            <article className="description">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Distance: {distance} miles</h6>
              <h6>Time: {time} min</h6>
              <h6>Difficulty: {difficulty}</h6>
              <h6>{dogs ? "Dogs allowed" : "No dogs allowed"}</h6>
              <h6>{parking && "Free parking"}</h6>
              <h6>{view && "With view"}</h6>
              <h6>{accessible && "Wheelchair accessible"}</h6>
            </article>
          </div>
        </section>
        {/* <Map /> */}
      </>
    );
  }
}
