import React from 'react'
import UniverseImg from '../../assets/svg/universe.svg'
import '../../scss/Universe.scss'
import '../../scss/Global.scss'

const Universe = () => {
  return (
    <>
      <section className='universe_section'>
        <div className="container">
          <div className="universe_wrapper">
            <div className="universe_left">
              <img src={UniverseImg} alt="" />
            </div>
            <div className="universe_right">
              <p>SUMMER 2020</p>
              <h2>Part of the Neural Universe</h2>
              <h3>
                We know how large objects will act, but things on a small scale.
              </h3>
              <div className="div_for_universe_buttons">
                <button className="universe_btn1">Buy Now</button>
                <button className="universe_btn2">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Universe