import React from 'react'
import Phone from '../../assets/svg/phone.svg'
import Mail from "../../assets/svg/mail.svg";
import Instagram from '../../assets/svg/instagram.svg'
import Youtube from '../../assets/svg/youtube.svg'
import Facebook from '../../assets/svg/facebook.svg'
import Twitter from '../../assets/svg/twitter.svg'
import '../../scss/HeaderFirst.scss'
import '../../scss/Global.scss'


const HeaderFirstCom = () => {
  return (
    <>
      <header className="header_first_section">
        <div className="container">
          <div className="header_first_wrapper">
            <div className="header_first_left">

              <div className="header_first_left_first_div">
                <img src={Phone} alt="" />
                <a href="tel:(225) 555-0118">(225) 555-0118</a>
              </div>

              <div className="header_first_left_second_div">
                <img src={Mail} alt="" />
                <a href="mailto:michelle.rivera@example.com">
                  michelle.rivera@example.com
                </a>
              </div>

            </div>
            <div className="header_first_center">
              <a href="">Follow Us and get a chance to win 80% off</a>
            </div>
            <div className="header_first_right">
              <p>Follow Us :</p>
              <img src={Instagram} alt="" />
              <img src={Youtube} alt="" />
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderFirstCom