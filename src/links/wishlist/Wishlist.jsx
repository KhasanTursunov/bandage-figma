import React, { useEffect } from 'react'
import HeaderFirstCom from '../../components/header/HeaderFirstCom'
import HeaderCom from '../../components/homeHeader/HeaderCom'
import Footer from '../../components/footer/Footer'
import { useStateValue } from '../../context'
import Bestseller from '../../components/bestseller/Bestseller'
const Wishlist = () => {
  const [state] = useStateValue()
  console.log(state.wishlist)

  useEffect(() => {
    window.scrollTo({behavior: "smooth", left: 0, top: 0})
  }, [])

  return (
    <>
    <HeaderFirstCom/>
    <HeaderCom/>
    <div className="container">
    <h2>Wishlistchik</h2>
    <Bestseller products={state.wishlist} />
    </div>
    <Footer/>
    </>
  )
}

export default Wishlist
