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
    city,
    difficulty,
    distance,
    minDistance,
    maxDistance,
    time,
    minTime,
    maxTime,
    breakfast,
    dogs,
  } = context;
  // get unique cities
  let cities = getUnique(parks, "city");
  // add all
  cities = ["all", ...cities];
  // map to jsx
  cities = cities.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  // get unique difficulties
  let difficulties = getUnique(parks, "difficulty");
  // add all
  difficulties = ["all", ...difficulties];
  // map to jsx
  difficulties = difficulties.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(parks, "difficulty");
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
        {/* select city */}
        <div className="form-group">
          <label htmlFor="city">city</label>
          <select
            name="city"
            id="city"
            value={city}
            className="form-control"
            onChange={handleChange}
          >
            {cities}
          </select>
        </div>
        {/* end of select city */}
        {/* select difficulty */}
        <div className="form-group">
          <label htmlFor="difficulty">difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            value={difficulty}
            className="form-control"
            onChange={handleChange}
          >
            {difficulties}
          </select>
        </div>
        {/* end of select difficulty */}
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
            <label htmlFor="dogs">dogs friendly</label>
          </div>
        </div>
        {/* end of dogs */}
      </form>
    </section>
  );
}
