import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "../pages/HomePage/Header.js"
import Layout from '../pages/layout/Layout.js'
import { path } from './Routes.js'
import Wishlist from '../pages/wishlist/Wishlist.js'
import ProductDetail from '../pages/productDetail/ProductDetail.js'

const RouteHandler = () => {
  return (
  
    <Routes>
    <Route path={path.home} element={<Layout> <Header /> </Layout>} />
    <Route path={path.wishlist} element={<Layout> <Wishlist /> </Layout>} />
    <Route  path={path.productDetails} element={<Layout><ProductDetail/></Layout>} />
     
  </Routes>
    
  )
}

export default RouteHandler