import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/login'
import MainPage from '../pages/main'
import MenuPage from '../pages/menu'
import MenuDetailPage from '../pages/menu/detail'
import TruckPage from '../pages/trucks'


const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />}/>
        <Route path="/detail" element={<MenuDetailPage/>}/>
        <Route path="/trucks" element={<TruckPage/>}/>
    </Routes>
  </BrowserRouter>

  )
}

export default Router;
