import React from 'react'
import '../../scss/Featured.scss'
import '../../scss/Global.scss'
import FeaturedImg1 from '../../assets/svg/featured1.svg'
import FeaturedImg2 from '../../assets/svg/featured2.svg'
import FeaturedImg3 from '../../assets/svg/featured3.svg'
import Clock from '../../assets/svg/clock.svg'
import Chart from '../../assets/svg/chart.svg'
import Learn from '../../assets/svg/LearnMore.svg'
const Featured = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="featured_title">
            <h3>Practice Advice</h3>
            <h2>Featured Posts</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>

          <div className="featured_wrapper">
            <div className="featured_card">
              <div className="img_div">
                <img src={FeaturedImg1} alt="" />
              </div>
              <div className="social">
                <h3>Google</h3>
                <h3>Tranding</h3>
                <h3>New</h3>
              </div>
              <div className="spanish">
                <h3>Loudest à la Madison #1 (L'integral)</h3>
                <h4>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </h4>
              </div>
              <div className="numbers">
                <div className="numbers_inside">
                  <img src={Clock} alt="" />
                  <p>22 April 2021</p>
                </div>
                <div className="numbers_inside">
                  <img src={Chart} alt="" />
                  <p>10 comments</p>
                </div>
              </div>
                <div className="learnMore">
                  <h3>Learn More</h3>
                    <img src={Learn} alt="" />
                </div>
            </div>
            <div className="featured_card">
              <div className="img_div">
                <img src={FeaturedImg2} alt="" />
              </div>
              <div className="social">
                <h3>Google</h3>
                <h3>Tranding</h3>
                <h3>New</h3>
              </div>
              <div className="spanish">
                <h3>Loudest à la Madison #1 (L'integral)</h3>
                <h4>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </h4>
              </div>
              <div className="numbers">
                <div className="numbers_inside">
                  <img src={Clock} alt="" />
                  <p>22 April 2021</p>
                </div>
                <div className="numbers_inside">
                  <img src={Chart} alt="" />
                  <p>10 comments</p>
                </div>
              </div>
                <div className="learnMore">
                  <h3>Learn More</h3>
                    <img src={Learn} alt="" />
                </div>
            </div>
            <div className="featured_card">
              <div className="img_div">
                <img src={FeaturedImg3} alt="" />
              </div>
              <div className="social">
                <h3>Google</h3>
                <h3>Tranding</h3>
                <h3>New</h3>
              </div>
              <div className="spanish">
                <h3>Loudest à la Madison #1 (L'integral)</h3>
                <h4>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </h4>
              </div>
              <div className="numbers">
                <div className="numbers_inside">
                  <img src={Clock} alt="" />
                  <p>22 April 2021</p>
                </div>
                <div className="numbers_inside">
                  <img src={Chart} alt="" />
                  <p>10 comments</p>
                </div>
              </div>
                <div className="learnMore">
                  <h3>Learn More</h3>
                    <img src={Learn} alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured