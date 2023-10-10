import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import fries from '../assets/images/pizza.png'

const Fries = () => {
  return (
    <>
        <section className='fries'>
            <Container className='fries__container'>
                <div>
                    <h2>Fries Collection</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, non.</p>
                </div>
                {/* <Row className='fries__container__row'>
                    <Col className='fries__container__row__col col col-md-3 col-lg-3'>
                        <div className="fries__container__row__col__product">
                            <img src={fries} alt="fries" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni fries</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='fries__container__row__col col col-md-3 col-lg-3'>
                        <div className="fries__container__row__col__product">
                            <img src={fries} alt="fries" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni fries</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='fries__container__row__col col col-md-3 col-lg-3'>
                        <div className="fries__container__row__col__product">
                            <img src={fries} alt="fries" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni fries</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='fries__container__row__col col col-md-3 col-lg-3'>
                        <div className="fries__container__row__col__product">
                            <img src={fries} alt="fries" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni fries</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row> */}
                 <Row className='fries__container__row'>
                    <Col className='fries__container__row__col col col-md-12 col-lg-12 owl-carousel owl-theme' id='fries'>
                            
                        <div className="fries__container__row__col__product">
                            <img src={fries} alt="fries" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni fries</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn btn-order'>Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="fries__container__row__col__product">
                            <img src={fries} alt="fries" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni fries</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn btn-order'>Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="fries__container__row__col__product">
                            <img src={fries} alt="fries" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni fries</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn btn-order'>Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="fries__container__row__col__product">
                            <img src={fries} alt="fries" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni fries</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn btn-order'>Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="fries__container__row__col__product">
                            <img src={fries} alt="fries" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni fries</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn btn-order'>Order Now</button>
                                </div>
                            </div>
                        </div>
                        
                    </Col>
                  
                </Row>
            </Container>

        </section>
    </>
  )
}

export default Fries