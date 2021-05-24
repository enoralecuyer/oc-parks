import React, { Component } from "react";

const ParkContext = React.createContext();
//
class ParkProvider extends Component {
  state = {};
  render() {
    return (
      <ParkContext.Provider value="hello">
        {this.props.children}
      </ParkContext.Provider>
    );
  }
}

const ParkConsumer = ParkContext.Consumer;

export { ParkProvider, ParkConsumer, ParkContext };
