import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import HeaderCom from "./components/homeHeader/HeaderCom";
import { Routes, Route } from "react-router-dom";
import HeaderPage from "./links/home/HeaderPage";
import AboutPage from "./links/about/AboutPage";
import Detail from "./links/detail/Detail";
import Layout from "./links/layout/Layout";
import NotFound from "./links/notFound/NotFound";
import Wishlist from "./links/wishlist/Wishlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HeaderPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/product/:id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
