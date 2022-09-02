import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navbar/Navigation";
import Profile from "./Navbar/Profile";

const Navbar = () => {
  const location = useLocation();

  const currentRoute = location?.pathname === "/search" ? true : false;
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {currentRoute && <div>Searcg</div>}
      <Profile />
    </nav>
  );
};

export default Navbar;
