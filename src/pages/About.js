import React from "react";
import Title from "../components/Title";
import profile1 from "../images/about1.jpg";
import profile2 from "../images/about2.jpg";

export default function About() {
  return (
    <>
      <article className="about-section">
        <div className="about-description">
          <h3>Hi, Nice to meet you!</h3>
          <p>
            This website contains all the hikes I have done in Southern
            California from 2018 to 2021. All photos were taken by me. Feel free
            to see my{" "}
            <a
              href="https://www.enoralecuyer.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              portfolio
            </a>
            ,{" "}
            <a
              href="https://github.com/enoralecuyer"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/enoralecuyer1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>{" "}
            profiles.
          </p>
          <div className="about-images">
            <img src={profile1} alt="profile" />
            <img src={profile2} alt="profile" />
          </div>
          <h3>New features for version 2:</h3>
          <ul>
            <li>❤️ Night mode</li>
            <li>🧡 Search function</li>
            <li>💛 Filtering only the highest values for time and distance</li>
            <li>💚 Cluster map with all hikes</li>
            <li>💙 Improved UI filtering buttons</li>
          </ul>
        </div>
      </article>
    </>
  );
}
