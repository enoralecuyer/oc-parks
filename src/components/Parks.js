import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../images/mountain1.jpg";
import PropTypes from "prop-types";

export default function Parks({ park }) {
  const { name, slug, images, price } = park;
  return (
    <article className="park">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt="park" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/parks/${slug}`} className="btn-primary park-link">
          Details
        </Link>
      </div>
      <p className="park-info">{name}</p>
    </article>
  );
}

Parks.propTypes = {
  park: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
