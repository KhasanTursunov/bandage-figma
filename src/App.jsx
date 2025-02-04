import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import HeaderCom from './components/HeaderCom'
import { Routes, Route } from "react-router-dom";
import HeaderPage from './links/HeaderPage'
import AboutPage from './links/AboutPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:id" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App
