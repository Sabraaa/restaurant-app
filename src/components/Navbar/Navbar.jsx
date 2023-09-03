import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

const Menu = () => (
  <>
    <li className="p__opensans">
      <a href="#home"> Home</a>
    </li>
    <li className="p__opensans">
      <a href="#about"> About</a>
    </li>
    <li className="p__opensans">
      <a href="#menu"> Menu</a>
    </li>
    <li className="p__opensans">
      <a href="#awards"> Awards</a>
    </li>
    <li className="p__opensans">
      <a href="#contact"> Contact</a>
    </li>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="apps logo" />
      </div>
      <ul className="app__navbar-links">
        <Menu />
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log in / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu onClick={() => setToggleMenu(false)} />
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay">
          <MdOutlineRestaurantMenu />
          <ul className="app__navbar-smallsccreen-links">
            <Menu />
          </ul>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
