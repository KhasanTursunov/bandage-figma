import React from 'react'
import { NavLink } from 'react-router-dom'
const HeaderCom = () => {
  return (
    <>
      <h1>that's an header component</h1>
      <header id="header">
        <div className="navbar_links">
          <ul className="links">
            <NavLink to={"/"}>Главная </NavLink>
            <NavLink to={"/products/cars"}>Авто</NavLink>
            <NavLink to={"/about"}>О нас</NavLink>
            <NavLink to={"/contact"}>Контакты</NavLink>
            <NavLink to={"/login"}>Логин </NavLink>
          </ul>
        </div>
      </header>
    </>
  );
}

export default HeaderCom