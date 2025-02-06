import React from "react";
import "../../scss/NotFound.scss";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <section className="notFoundsection">
        <div className="container">
          <div className="notFoundWrapper">
            <NavLink className="navlink_a" to={"/"}>
              <a href="/">
                <img
                  width={1000}
                  src="https://www.shutterstock.com/shutterstock/photos/732508705/display_1500/stock-vector-the-concept-of-error-web-page-with-shopping-bag-full-of-presents-and-boxes-and-gifts-very-good-732508705.jpg"
                  alt=""
                />
              </a>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
