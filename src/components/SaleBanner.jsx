import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import sale_banner from '../assets/images/sale-banner.png'

const SaleBanner = () => {
  return (
    <>
        <section className="sale-banner">
            <Container className="sale-banner__container">
                <Row className="sale-banner__container__row">
                    <Col className="sale-banner__container__row__col1 col col-md-6 col-lg-6">
                        <div className="sale-banner__container__row__col1__main">
                            <h1>Get 30% Off<br/>On Your 1st Order</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et explicabo amet asperiores veniam dolorum cumque ipsum magni eius voluptate.</p>
                            <button className='btn btn-sale'>Order Now</button>

                        </div>
                    </Col>
                    <Col className="sale-banner__container__row__col2 col col-md-6 col-lg-6">
                        <div className="sale-banner__container__row__col2__main">
                            <img src={sale_banner} alt="Sale Banner" className='img-fluid' />

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default SaleBanner