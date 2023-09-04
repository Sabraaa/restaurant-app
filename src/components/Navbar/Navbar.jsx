import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

const Menu = () => (
  <>
    <li className="app__navbar-links_li p__opensans">
      <a href="#home"> Home</a>
    </li>
    <li className="app__navbar-links_li p__opensans">
      <a href="#about"> About</a>
    </li>
    <li className="app__navbar-links_li p__opensans">
      <a href="#menu"> Menu</a>
    </li>
    <li className="app__navbar-links_li p__opensans">
      <a href="#awards"> Awards</a>
    </li>
    <li className="app__navbar-links_li p__opensans">
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
        <GiHamburgerMenu  color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu className="overlay__close"  fontSize={27} onClick={()=>setToggleMenu(false)} />
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
