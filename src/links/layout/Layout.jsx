import React from 'react'
import HeaderFirstCom from '../../components/header/HeaderFirstCom'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <main>
        <Outlet/>
        </main>

    </>
  )
}

export default Layout