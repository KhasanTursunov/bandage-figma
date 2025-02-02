import React from 'react'
import HeaderCom from '../components/HeaderCom'
import HeaderFirstCom from '../components/HeaderFirstCom'
import HomeShowcase from '../components/HomeShowcase'
import Editor from '../components/editor/Editor'
import Bestseller from '../components/bestseller/Bestseller'

const HeaderPage = () => {
  return (
    <>
        <HeaderFirstCom/>
        <HeaderCom/>
        <HomeShowcase/>
        <Editor/>
        <Bestseller/>
    </>
)
}

export default HeaderPage