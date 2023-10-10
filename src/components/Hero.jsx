import React from 'react'
import Header from './Header'
import { Col, Container, Row } from 'reactstrap'
import hero from '../assets/images/hero.png'
import hero1 from '../assets/images/hero1.png'

const Hero = () => {
  return (
    <>
        <Header />
        <div className="hero">
          <Container className="hero__container">
            <Row className="hero__container__row">

              <Col className="hero__container__row__col1 col col-md-6 col-lg-6">
                <div className="hero__container__row__col1__main-wrapper">
                  <h6 className='top-on-heading'>More Than Faster <span><i class="ri-truck-fill"></i></span></h6>
                  {/* <h1>Be The Fastest In Delivering Your <span>Food</span></h1> */}
                  <h1>The Spicy and Delicious Pizza in Your <span>Town</span></h1>
                  <p>Our job is to filling you tummy with delicious food and with fast and free delivery.</p>
                  <div>
                    <button className='btn get-started'>Order Now</button>
                    {/* <span><i class="ri-play-fill watch-video"></i><span className='watch-text'>Watch Video</span></span> */}
                  </div>

                </div>
              </Col>

              <Col className="hero__container__row__col2 col col-md-6 col-lg-6">
                <div className="hero__container__row__col2__main-wrapper owl-carousel owl-theme" id='slider'>
                  <img src={hero} alt="hero" className='img-fluid hero-img item' />
                  <img src={hero1} alt="hero" className='img-fluid hero-img item' />
                </div>
              </Col>

            </Row>
          </Container>
        </div>

    </>
  )
}

export default Hero