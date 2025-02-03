import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/svg/header_logo.svg";
import User from "../assets/svg/user.svg";
import Search from "../assets/svg/search.svg";
import Cart from "../assets/svg/cart.svg";
import Heart from "../assets/svg/heart.svg";
import Menu from "../assets/svg/menu.svg";
const HeaderCom = () => {
  return (
    <>
      <header className="header_section">
        <div className="container">
          <div className="header_wrapper">
            <div className="header_logo">
              <NavLink className="navlink_a" to={"/"}>
                <img src={Logo} alt="" />
              </NavLink>
            </div>

            <div className="header_links">
              <input class="navbar_checkbox" type="checkbox" id="check"></input>
              <ul id="header_linksID" className="links">
                <NavLink className="navlink_a" to={"/"}>
                  Home
                </NavLink>
                <NavLink className="navlink_a" to={"/about"}>
                  Shop
                </NavLink>
                <NavLink className="navlink_a" to={"/about"}>
                  About
                </NavLink>
                <NavLink className="navlink_a" to={"/about"}>
                  Blog
                </NavLink>
                <NavLink className="navlink_a" to={"/about"}>
                  Contact
                </NavLink>
                <NavLink className="navlink_a" to={"/about"}>
                  Pages
                </NavLink>
              </ul>
            </div>
            <div className="header_items">
              <div className="header_items_first_divv">
                <img src={User} alt="" />
                <a href="">Login / Register</a>
              </div>
              <div className="header_items_first_div">
                <img src={Search} alt="" />
              </div>
              <div className="header_items_first_div">
                <img src={Cart} alt="" />
                <p>1</p>
              </div>
              <div className="header_items_first_div">
                <img src={Heart} alt="" />
                <p>1</p>
              </div>

              <label className="header_menu" for="check">
                <img src={Menu} alt="" />
              </label>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderCom;
