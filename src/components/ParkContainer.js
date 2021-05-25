import React from "react";
import ParksFilter from "./ParkFilter";
import ParksList from "./ParkList";
import { ParkConsumer } from "../context";

export default function ParkContainer() {
  return (
    <>
      <ParkConsumer>
        {(value) => {
          const { sortedParks, parks } = value;
          return (
            <div>
              hello from parks containers
              <ParksFilter parks={parks} />
              <ParksList parks={sortedParks} />
            </div>
          );
        }}
      </ParkConsumer>
    </>
  );
}
