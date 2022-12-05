import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/login'
import MainPage from '../pages/main'
import MenuPage from '../pages/menu'
import MenuDetailPage from '../pages/menu/detail'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />}/>
        <Route path="/menu/:menuId" element={<MenuDetailPage/>}/>
    </Routes>
  </BrowserRouter>

  )
}

export default Router