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

// export default function ParkContainer() {
//   return (
//     <>
//       <ParkConsumer>
//         {(value) => {
//           const { sortedParks, parks } = value;
//           return (
//             <div>
//               hello from parks containers
//               <ParksFilter parks={parks} />
//               <ParksList parks={sortedParks} />
//             </div>
//           );
//         }}
//       </ParkConsumer>
//     </>
//   );
// }
