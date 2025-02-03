import React from 'react'
import HeaderCom from '../components/HeaderCom'
import HeaderFirstCom from '../components/HeaderFirstCom'
import HomeShowcase from '../components/HomeShowcase'
import Editor from '../components/editor/Editor'
import Bestseller from '../components/bestseller/Bestseller'
import Universe from '../components/universe/Universe'
import Featured from '../components/featured/Featured'
import Footer from '../components/footer/Footer'
const HeaderPage = () => {
  return (
    <>
        <HeaderFirstCom/>
        <HeaderCom/>
        <HomeShowcase/>
        <Editor/>
        <Bestseller/>
        <Universe/>
        <Featured/>
        <Footer/>
    </>
)
}

export default HeaderPage