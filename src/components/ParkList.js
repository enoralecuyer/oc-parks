import React from "react";
import Parks from "./Parks";

export default function ParkList({ parks }) {
  if (parks.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately, no parks matched your search parameters.</h3>
      </div>
    );
  }
  return (
    <section>
      <div className="parkslist-center">
        {parks.map((item) => {
          return <Parks key={item.id} park={item} />;
        })}
      </div>
    </section>
  );
}
