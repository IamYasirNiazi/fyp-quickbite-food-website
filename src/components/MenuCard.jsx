import React from 'react'
import { Link } from 'react-router-dom'
// import { Col, Container, Row } from 'reactstrap'
// import product1 from '../assets/images/p1.jpg'


const Menu = ({item}) => {

    const {id, title, image01, price} = item

  return (
    <>
        <Link to={`/product-details/${id}`}>           
            <div className='our-menu__container__row__col__main__slider__product item'>
                <div className='text'>
                    <h5>{title}</h5>
                    <h6><span>Rs.</span> {price}</h6>
                    <a href="/">Order Now <i class="ri-arrow-drop-right-line"></i></a>
                </div>
                <div className='image'>
                    <img src={image01} alt="Product" className='img-fluid' />
                </div>
            </div>
        </Link>
    </>
  )
}

export default Menu