import React from "react";
import BeatportLogo from "./BeatportLogo";
import NavLinks from "./NavLinks";
import Search from "./Search";
import Account from "./Account";
import Cart from "./Cart";

const Header = props => {
  return (
    <header>
      <BeatportLogo />
      <NavLinks />
      <Search />
      <Account />
      {/* 
      <MyBeatport /> find/create svg of my beatport icon
      */}
      <Cart />
    </header>
  );
};
export default Header;
