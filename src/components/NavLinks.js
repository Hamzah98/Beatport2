import React from "react";
import Link from "./Link";
import "../styles/NavLinks.css";

const NavLinks = props => {
  return (
    <div className="nav-links-container">
      
      <Link name="TRACKS" href="#tracks" />
      <Link name="RELEASES" href="#releases" />
      <Link name="CHARTS" href="#charts" />
    </div>
  );
};

export default NavLinks;
