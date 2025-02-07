import React from 'react'
import '../../scss/Bestseller.scss'
import Best1 from '../../assets/svg/best1.svg'
import Best4 from '../../assets/svg/best4.svg'
import Blue from '../../assets/svg/blue.svg'
import Green from '../../assets/svg/green.svg'
import Orange from '../../assets/svg/orange.svg'
import Black from '../../assets/svg/black.svg'
import Heart from "../../assets/svg/heart.svg";
import { useStateValue } from '../../context'
import { FaRegHeart, FaHeart } from "react-icons/fa";


import { useNavigate } from 'react-router-dom'
const Bestseller = ({ products }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();
  console.log(state.wishlist)

  return (
    <>
      <section className="bestseller_section">
        <div className="container">
          <div className="best_title">
            <p>Featured Products</p>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between </p>
          </div>

          <div className="best_wrapper">
            {products.length > 0 ? (
              products?.map((element) => (
                <>
                  <div className="best_card" key={element.id}>
                    <div className="div_for_main_img">
                      <img
                        className="firstImg"
                        height={250}
                        width={250}
                        src={element.image}
                        alt={element.title}
                      />

                      <button
                        className="secondImg"
                        onClick={() =>
                          dispatch({ type: "TOGGLE_LIKE", payload: element })
                        }
                      >

                        {
                          state.wishlist?.some(({id}) => id === element.id ) 
                          ?
                          <FaHeart className='faheart' />
                          :
                          <FaRegHeart className='faregheart'/>

                        }

                      </button>

                    
                    </div>
                    <div className="div_for_main_text">
                      <h3 onClick={() => navigate(`/product/${element.id}`)}>
                        {element.title}
                      </h3>
                      <p>{element.category}</p>
                      <div className="div_for_price">
                        <p className="firstP">{element.price}$</p>
                        <p className="secondP">{element.rating.count}$</p>
                      </div>
                      <div className="div_for_colors">
                        <img src={Blue} alt="" />
                        <img src={Green} alt="" />
                        <img src={Orange} alt="" />
                        <img src={Black} alt="" />
                      </div>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bestseller