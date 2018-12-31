import React from "react";
import BeatportLogo from "./BeatportLogo";
import GenresDropDown from "./GenresDropDown";
import NavLinks from "./NavLinks";
import Search from "./Search";
import Account from "./Account";
import Cart from "./Cart";
import "../styles/Header.css";

const genres = [
  "AFRO HOUSE",
  "BIG ROOM",
  "BREAKS",
  "DJ TOOLS",
  "DANCE",
  "DEEP HOUSE",
  "DRUM & BASS",
  "DUBSTEP",
  "HARDCORE / HARD TECHNO",
  "HIP-HOP / R&B",
  "HOUSE",
  "INDIE DANCE / NU DISCO",
  "LEFTFIELD BASS",
  "LEFTFIELD HOUSE & TECHNO",
  "MELODIC HOUSE & TECHNO",
  "MINIMAL /DEPP TECH",
  "ELECTRO HOUSE",
  "ELECRONICA / DOWNTEMPO",
  "FUNK / SOUL / DISCO",
  "FUNKY / GROOVE / JACKIN' HOUSE",
  "FUTURE HOUSE",
  "GARAGE / BASSLINE / GRIME",
  "GLITCH HOP",
  "HARD DANCE",
  "PROGRESSIVE HOUSE",
  "PSY-TRANCE",
  "REGGAE / DANCEHALL / DUB",
  "TECH HOUSE",
  "TECHNO",
  "TRANCE",
  "TRAP / FUTURE BASS"
];

const Header = props => {
  return (
    <header className="header-container">
      <BeatportLogo />
      <GenresDropDown genres={genres} />
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
