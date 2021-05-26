// import React, { Component } from "react";
// import Title from "./Title";
// import { FaCocktail, FaHiking } from "react-icons/fa";

// export default class Information extends Component {
//   state = {
//     information: [
//       {
//         icon: <FaCocktail />,
//         title: "free cocktails",
//         info: "Lorem ipsum dolor sit amet.",
//       },
//       {
//         icon: <FaHiking />,
//         title: "endless hiking",
//         info: "Lorem ipsum dolor sit amet.",
//       },
//       {
//         icon: <FaHiking />,
//         title: "endless hiking",
//         info: "Lorem ipsum dolor sit amet.",
//       },
//       {
//         icon: <FaHiking />,
//         title: "endless hiking",
//         info: "Lorem ipsum dolor sit amet.",
//       },
//     ],
//   };
//   render() {
//     return (
//       <section className="information">
//         <Title title="information" />
//         <div className="information-center">
//           {this.state.information.map((item, index) => {
//             return (
//               <article key={index} className="info">
//                 <span>{item.icon}</span>
//                 <h6>{item.title}</h6>
//                 <p>{item.info}</p>
//               </article>
//             );
//           })}
//         </div>
//       </section>
//     );
//   }
// }
