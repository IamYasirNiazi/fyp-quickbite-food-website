import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductDetail from '../components/ProductDetail'
import Carts from '../components/Carts'
import { useSelector } from 'react-redux'
import TitleSection from '../components/TitleSection'


const ProductDetails = (props) => {

  const { title } = props;

  const isVisible = useSelector((state)=> state.cartUi.cartIsVisible)

  return (
    <>
        <Header />
        {
          isVisible && <Carts />
        }
        <TitleSection title="Product Details" />
        <ProductDetail />
        <Footer />
    </>
  )
}

export default ProductDetails