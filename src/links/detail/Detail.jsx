import React, { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { request } from "../../api";
import '../../scss/Detail.scss'

const Detail = () => {
  const { id } = useParams();
  const [data, Setdata] = useState(null);

  useEffect(() => {
    request.get(`/products/${id}`).then((res) => {
      console.log(res);
      Setdata(res.data);
    });
  }, [id]);

  return (
    <>
      <section className="card-container">
        <div className="card">
          <img src={data?.image} alt="Product" className="product-image" />
          <h2 className="product-title">{data?.title}</h2>
          <div className="rating">
            <span className="rating-star">★ {data?.rating?.rate}</span>
            <span className="rating-count">
              ({data?.rating?.count} Reviews)
            </span>
          </div>
          <h3 className="product-price">${data?.price}</h3>
          <p className="product-description">{data?.description}</p>
        </div>
      </section>
    </>
  );
};

export default Detail;


