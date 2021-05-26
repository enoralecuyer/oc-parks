import React from "react";
import ParksFilter from "./ParkFilter";
import ParksList from "./ParkList";
import { withParkConsumer } from "../context";

function ParkContainer({ context }) {
  const { sortedParks, parks } = context;
  return (
    <>
      <ParksFilter parks={parks} />
      <ParksList parks={sortedParks} />
    </>
  );
}

export default withParkConsumer(ParkContainer);
