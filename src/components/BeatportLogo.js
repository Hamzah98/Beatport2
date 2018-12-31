import React from "react";
import "../styles/BeatportLogo.css";

const BeatportLogo = () => {
  return (
    <div>
      <img
        src={require("../images/beatport-logo.svg")}
        alt={"beatport logo"}
        className="beatport-logo"
      />
    </div>
  );
};

export default BeatportLogo;
