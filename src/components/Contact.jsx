import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Contact = () => {
  return (
    <>
        <section className="contact-us">
            <Container className="contact-us__container">
                <div className='heading'>
                  <h2>Contact Us</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptate quasi! Asperiores facilis id consectetur? Possimus voluptate tenetur veniam consequuntur.</p>
                </div>
                <Row className="contact-us__container__row">
                    <Col className="contact-us__container__row__col">
                      <div className="contact-us__container__row__col__main">
                        {/* <h2></h2> */}
                        <p></p>
                        <input type="text" className='name' placeholder='Enter your name' />
                        <input type="email" className='email' placeholder='Enter your email' />
                        <div>
                          <textarea rows="5" placeholder='Enter your message'></textarea>
                        </div>
                        <button className='btn btn-contact'>Submit Now</button>

                      </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Contact