import React from 'react'
import { useLocation } from 'react-router-dom'

const MenuPage = () => {
    const location = useLocation();
    console.log(location);
  return (
    <div>{location.state.category}</div>
  )
}

export default MenuPage