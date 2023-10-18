import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carts from '../components/Carts'
import { useSelector } from 'react-redux'
import TitleSection from '../components/TitleSection'
import UserHistory from '../components/UserHistory'


const History = () => {

  // const { title } = props;

  const isVisible = useSelector((state)=> state.cartUi.cartIsVisible)

  return (
    <>
        <Header />
        {
          isVisible && <Carts />
        }
        <TitleSection title="History" />
        <UserHistory />
        <Footer />
    </>
  )
}

export default History