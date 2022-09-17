import React from "react";
import snap from "../../src/Assets/Images/snap.png";

const Tourism = () => {
  return (
    <div className="tourism">
      <div className="tourism-left-side">
        <p className="tourism-text">Tourism</p>
        <p className="tourism-small-text">
          What's a vacation in a different country if you can't experience the
          exciting places and tourist attractions that it embodies? With
          LuxuryVacays, you don't have to worry about this question as it is our
          utmost goal that you get to experience all the best places in your
          country of choice.
        </p>
      </div>

      <div className="tourism-right-side">
        <div className="grad-bg"></div>
        <div> <img src={snap} alt='img' className="snap"/> </div>
      </div>
    </div>
  );
};

export default Tourism;
