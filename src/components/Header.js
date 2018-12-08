import React from "react";
import BeatportLogo from "./BeatportLogo";
import NavLinks from "./NavLinks";

const Header = props => {
  return (
    <div>
      <BeatportLogo />
      <NavLinks />
      {/* 
      <Search />
      <Account />
      <MyBeatport />
      <Cart /> */}
    </div>
  );
};
export default Header;
