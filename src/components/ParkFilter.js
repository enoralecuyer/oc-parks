import React from "react";
import { useContext } from "react";
import { ParkContext } from "../context";
import Title from "../components/Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function ParkFilter({ parks }) {
  const context = useContext(ParkContext);
  const {
    handleChange,
    type,
    capacity,
    distance,
    minDistance,
    maxDistance,
    time,
    minTime,
    maxTime,
    breakfast,
    dogs,
  } = context;
  // get unique types
  let types = getUnique(parks, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(parks, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search parks" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">park type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* capacity */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* capacity */}
        {/* distance */}
        <div className="form-group">
          <label htmlFor="distance">distance {distance} miles</label>
          <input
            type="range"
            name="distance"
            min={minDistance}
            max={maxDistance}
            id="distance"
            value={distance}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of distance */}
        {/* time */}
        <div className="form-group">
          <label htmlFor="time">time {time} min</label>
          <input
            type="range"
            name="time"
            min={minTime}
            max={maxTime}
            id="time"
            value={time}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of time */}
        {/* breakfast */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
        </div>
        {/* end of breakfast */}
        {/* dogs */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="dogs"
              id="dogs"
              checked={dogs}
              onChange={handleChange}
            />
            <label htmlFor="dogs">dogs</label>
          </div>
        </div>
        {/* end of dogs */}
      </form>
    </section>
  );
}
