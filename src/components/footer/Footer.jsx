import React from 'react'
import '../../scss/Footer.scss'
import '../../scss/Global.scss'
import Logo from '../../assets/svg/header_logo.svg'
import FInstagram from '../../assets/svg/footer_instagram.svg'
import FFacebook from '../../assets/svg/footer_facebook.svg'
import FTwitter from '../../assets/svg/footer_twitter.svg'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer_section">
      <div className="container">
        <div className="footer_title">
          <div className="footer_title_inside">
            <NavLink to={"/"}>
              <img src={Logo} alt="" />
            </NavLink>
          </div>
          <div className="footer_title_inside">
            <img src={FInstagram} alt="" />
            <img src={FFacebook} alt="" />
            <img src={FTwitter} alt="" />
          </div>
        </div>
        
        <div className="footer_wrapper">
          <div className="footer_cols">
            <ul>
              <li className="footer_links">
                <a href="">Company Info</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Carrier</a>
              </li>
              <li>
                <a href="">We Are Hiring</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
            <ul>
              <li className="footer_links">
                <a href="">Legal</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Carrier</a>
              </li>
              <li>
                <a href="">We Are Hiring</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
            <ul>
              <li className="footer_links">
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Business Marketing</a>
              </li>
              <li>
                <a href="">User Analytic</a>
              </li>
              <li>
                <a href="">Live Chat</a>
              </li>
              <li>
                <a href="">Unlimited Support</a>
              </li>
            </ul>
            <ul>
              <li className="footer_links">
                <a href="">Resources</a>
              </li>
              <li>
                <a href="">IOS & Android</a>
              </li>
              <li>
                <a href="">Watch a Demo</a>
              </li>
              <li>
                <a href="">Customers</a>
              </li>
              <li>
                <a href="">API</a>
              </li>
            </ul>

            <div className='input_button'>
              <div className="div_uno">
                <li className="footer_links">
                  <a href="">Get In Touch</a>
                </li>
              </div>

              <div className="div_dos">
                <form action="#" className="footer_form">
                  <label htmlFor="email" className="sr-only">
                
                  </label>
                  <input
                    className="footer_input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <button className="footer_btn" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="div_tres">
                <li>
                  <a href="">Lore imp sum dolor Amit</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer