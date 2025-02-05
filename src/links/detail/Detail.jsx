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
      <section>
        <div className="container">
          <div className="detail_wrapper">
            <img
              src={data?.image}
              height={250}
              width={250}
              alt="Product"
            />
            ;
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;


