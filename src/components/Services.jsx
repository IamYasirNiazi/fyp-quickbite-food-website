import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import order from '../assets/images/order.png'
import quality from '../assets/images/quality.png'
import delivery from '../assets/images/delivery.png'


const Services = () => {
  return (
    <>
        <section className="services">
            <Container className='services__container'>
                <Row className='services__container__row'>
                    <div className='heading'>
                        <h6>What We Serve</h6>
                        <h3>Your Favourite Food<br/>Delivery Partner</h3>
                    </div>
                    <Col className='services__container__row__col col col-md-12 col-lg-12'>
                        <div className="services__container__row__col__main">

                            <div className='order'>
                                <img src={order} alt="" />
                                <h6>Easy To Order</h6>
                            </div>
                            <div className='delivery'>
                            <img src={delivery} alt="" />
                                <h6>Fastest Delivery</h6>
                            </div>
                            <div className='quality'>
                            <img src={quality} alt="" />
                                <h6>Best Quality</h6>
                            </div>

                        </div>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Services