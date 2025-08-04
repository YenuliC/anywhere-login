import React from "react";
import { NavContainer, Logo, LogoCircle, NavLinks } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>
        <LogoCircle />
        Anywhere app
      </Logo>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/join">Join</a>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
