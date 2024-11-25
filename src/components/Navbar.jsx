import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ children }) {
  return (
    <div className="w-full">
      <nav className="hidden md:block px-4 md:px-10 md:py-8 py-4 sticky top-0 z-10 bg-white ">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-1 gap-2 items-center">
            <Logo />
            <span className="text-black text-xl font-bold">Urban Drift</span>
          </Link>
          <div className="flex gap-16"></div>
        </div>
      </nav>
      <nav className="flex md:hidden p-4 justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-black text-lg font-bold">Urban Drift</span>
        </div>
      </nav>
      <main className="px-4 md:px-10 w-full ">{children}</main>
    </div>
  );
}

export default Navbar;
