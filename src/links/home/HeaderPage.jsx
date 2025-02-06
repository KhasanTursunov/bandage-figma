import React, { useEffect, useState } from "react";
import HeaderCom from "../../components/homeHeader/HeaderCom";
import HeaderFirstCom from "../../components/header/HeaderFirstCom";
import HomeShowcase from "../../components/header/HeaderFirstCom";
import Editor from "../../components/editor/Editor";
import Bestseller from "../../components/bestseller/Bestseller";
import Universe from "../../components/universe/Universe";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import { request } from "../../api";

const HeaderPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    request
      .get("/products", {
        params: {
          limit: 8,
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);
  return (
    <>
      <HeaderFirstCom />
      <HeaderCom />
      <HomeShowcase />
      <Editor />
      <Bestseller products={products} />
      <Universe />
      <Featured />
      <Footer />
    </>
  );
};

export default HeaderPage;
