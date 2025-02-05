import React, { useEffect, useState } from 'react'
import '../../scss/Bestseller.scss'
import Best1 from '../../assets/svg/best1.svg'
import Best4 from '../../assets/svg/best4.svg'
import Blue from '../../assets/svg/blue.svg'
import Green from '../../assets/svg/green.svg'
import Orange from '../../assets/svg/orange.svg'
import Black from '../../assets/svg/black.svg'
import { request } from '../../api'
import { useNavigate } from 'react-router-dom'
const Bestseller = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  // useEffect(() => {
  //   request.get(`/products/${id}`)
  //      .then((res) => {
  //     console.log(res);
  //     setData(res.data);
  //   });
  // }, []);

  useEffect(() => {
    request
      .get("/products", {
        params: {
          limit: 8,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

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
              products.map((element) => (
                <>
                  <div className="best_card" key={element.id}>
                    <div className="div_for_main_img">
                      <img
                        onClick={() => navigate(`/product/${element.id}`)}
                        height={250}
                        width={250}
                        src={element.image}
                        alt={element.title}
                      />
                    </div>
                    <h3>{element.title}</h3>
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
}

export default Bestseller