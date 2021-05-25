import React, { Component } from "react";
import items from "./data";

const ParkContext = React.createContext();
//
class ParkProvider extends Component {
  state = {
    parks: [],
    sortedParks: [],
    featuredParks: [],
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  // getData

  componentDidMount() {
    let parks = this.formatData(items);
    let featuredParks = parks.filter((park) => park.featured === true);
    let maxPrice = Math.max(...parks.map((item) => item.price));
    let maxSize = Math.max(...parks.map((item) => item.size));
    this.setState({
      parks,
      featuredParks,
      sortedParks: parks,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
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
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    console.log(type, name, value);
  };

  filterParks = () => {
    console.log("hello");
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
