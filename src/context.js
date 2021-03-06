import React, { Component } from "react";
import items from "./data";

const ParkContext = React.createContext();

class ParkProvider extends Component {
  state = {
    parks: [],
    sortedParks: [],
    featuredParks: [],
    city: "all",
    difficulty: "all",
    distance: 0,
    minDistance: 0,
    maxDistance: 0,
    time: 0,
    minTime: 0,
    maxTime: 0,
    parking: false,
    dogs: false,
    view: false,
    accessible: false,
  };

  componentDidMount() {
    let parks = this.formatData(items);
    let featuredParks = parks.filter((park) => park.featured === true);
    let maxDistance = Math.max(...parks.map((item) => item.distance));
    let maxTime = Math.max(...parks.map((item) => item.time));
    this.setState({
      parks,
      featuredParks,
      sortedParks: parks,
      distance: maxDistance,
      time: maxTime,
      maxDistance,
      maxTime,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.id;
      let images = item.fields.images.map((image) => image.url);
      let park = { ...item.fields, images, id };
      return park;
    });
    return tempItems;
  }
  getPark = (slug) => {
    let tempParks = [...this.state.parks];
    const park = tempParks.find((park) => park.slug === slug);
    return park;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterParks
    );
  };

  filterParks = () => {
    let {
      parks,
      city,
      difficulty,
      distance,
      time,
      parking,
      dogs,
      view,
      accessible,
    } = this.state;
    // all the parks
    let tempParks = [...parks];
    // transform value from string to number
    distance = parseInt(distance);

    // filter by city
    if (city !== "all") {
      tempParks = tempParks.filter((park) => park.city === city);
    }
    // filter by difficulty
    if (difficulty !== "all") {
      tempParks = tempParks.filter((park) => park.difficulty === difficulty);
    }
    // filter by distance
    tempParks = tempParks.filter((park) => park.distance <= distance);

    // filter by time
    tempParks = tempParks.filter((park) => park.time <= time);

    // filter by parking
    if (parking) {
      tempParks = tempParks.filter((park) => park.parking === true);
    }
    //filter by dogs
    if (dogs) {
      tempParks = tempParks.filter((park) => park.dogs === true);
    }
    //filter by view
    if (view) {
      tempParks = tempParks.filter((park) => park.view === true);
    }
    //filter by accessibility
    if (accessible) {
      tempParks = tempParks.filter((park) => park.accessible === true);
    }
    // change state
    this.setState({
      sortedParks: tempParks,
    });
  };

  render() {
    return (
      <ParkContext.Provider
        value={{
          ...this.state,
          getPark: this.getPark,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ParkContext.Provider>
    );
  }
}

const ParkConsumer = ParkContext.Consumer;

export function withParkConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ParkConsumer>
        {(value) => <Component {...props} context={value} />}
      </ParkConsumer>
    );
  };
}

export { ParkProvider, ParkConsumer, ParkContext };
