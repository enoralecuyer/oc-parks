import React, { Component } from "react";
import items from "./data";

const ParkContext = React.createContext();
//
class ParkProvider extends Component {
  state = {
    parks: [],
    sortedParks: [],
    featuredParks: [],
  };
  // getData

  componentDidMount() {
    let parks = this.formatData(items);
    let featuredParks = parks.filter((park) => park.featured === true);
    this.setState({ parks, featuredParks, sortedParks: parks });
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

  render() {
    return (
      <ParkContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ParkContext.Provider>
    );
  }
}

const ParkConsumer = ParkContext.Consumer;

export { ParkProvider, ParkConsumer, ParkContext };
