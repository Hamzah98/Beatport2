import React from "react";
import Link from "./Link";
import GenresDropDown from "./GenresDropDown";

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
const NavLinks = props => {
  return (
    <div>
      <GenresDropDown genres={genres} />
      <Link name="TRACKS" href="#tracks" />
      <Link name="RELEASES" href="#releases" />
      <Link name="CHARTS" href="#charts" />
      <Link name="STEMS" href="#stems" />
      <Link name="SOUNDS" href="#sounds" />
    </div>
  );
};

export default NavLinks;
