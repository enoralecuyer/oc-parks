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
      type,
      capacity,
      price,
      size,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    // all the parks
    let tempParks = [...parks];
    // transform value from string to number
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempParks = tempParks.filter((park) => park.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempParks = tempParks.filter((park) => park.capacity >= capacity);
    }
    // filter by price
    tempParks = tempParks.filter((park) => park.price <= price);

    // filter by size
    tempParks = tempParks.filter(
      (park) => park.size >= minSize && park.size <= maxSize
    );

    // filter by breakfast
    if (breakfast) {
      tempParks = tempParks.filter((park) => park.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempParks = tempParks.filter((park) => park.pets === true);
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
