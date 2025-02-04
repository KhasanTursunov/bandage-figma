import React from "react";
import ShowcaseImg from "../assets/svg/homeShowcase.svg";
import '../scss/Showcase.scss'
import '../scss/Global.scss'
const HomeShowcase = () => {
  return (
    <>
      <section className="home_showcase_section">
        <div className="container">
          <div className="showcase_wrapper">
            <p>SUMMER 2020</p>
            <h1>NEW COLLECTION</h1>
            <p>
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="showcase_btn">Show Now</button>
          </div>
        </div>
      </section>
      

      
    </>
  );
};

export default HomeShowcase;
