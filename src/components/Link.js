import React from "react";
import "../styles/Link.css";

const Link = props => {
  return (
    <div>
      <a href={props.href} className="nav-link">
        {props.name}
      </a>
    </div>
  );
};

export default Link;
