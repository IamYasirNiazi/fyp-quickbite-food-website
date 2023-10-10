import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductDetail from '../components/ProductDetail'
import Carts from '../components/Carts'
import { useSelector } from 'react-redux'


const ProductDetails = () => {

  const isVisible = useSelector((state)=> state.cartUi.cartIsVisible)

  return (
    <>
        <Header />
        {
          isVisible && <Carts />
        }
        <ProductDetail />
        <Footer />
    </>
  )
}

export default ProductDetails