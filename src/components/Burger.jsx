import React from 'react'
import { Col, Container, Row } from 'reactstrap'
// import burger from '../assets/images/pizza.png'
import products from '../assets/data/products'
import ProductCard from './ProductCard'


const Burger = () => {

    const burger = products.filter((bgr)=>{
        return bgr.category === "Burger"
    })

    // console.log(burger)

  return (
    <>
        <section className='burger' id='burger-section'>
            <Container className='burger__container'>
                <div>
                    <h2>Burger Collection</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, non.</p>
                </div>
                {/* <Row className='burger__container__row'>
                    <Col className='burger__container__row__col col col-md-3 col-lg-3'>
                        <div className="burger__container__row__col__product">
                            <img src={burger} alt="burger" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni burger</h5>
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
                    <Col className='burger__container__row__col col col-md-3 col-lg-3'>
                        <div className="burger__container__row__col__product">
                            <img src={burger} alt="burger" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni burger</h5>
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
                    <Col className='burger__container__row__col col col-md-3 col-lg-3'>
                        <div className="burger__container__row__col__product">
                            <img src={burger} alt="burger" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni burger</h5>
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
                    <Col className='burger__container__row__col col col-md-3 col-lg-3'>
                        <div className="burger__container__row__col__product">
                            <img src={burger} alt="burger" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni burger</h5>
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
                 <Row className='burger__container__row'>
                    <Col className='burger__container__row__col col col-md-12 col-lg-12 owl-carousel owl-theme' id='burger'>

                        {
                            burger.map((item, index)=>{
                                return <ProductCard item={item} key={index} />
                            })

                        }
                            
                        {/* <div className="burger__container__row__col__product">
                            <img src={burger} alt="burger" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni burger</h5>
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
                        <div className="burger__container__row__col__product">
                            <img src={burger} alt="burger" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni burger</h5>
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
                        <div className="burger__container__row__col__product">
                            <img src={burger} alt="burger" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni burger</h5>
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
                        <div className="burger__container__row__col__product">
                            <img src={burger} alt="burger" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni burger</h5>
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
                        <div className="burger__container__row__col__product">
                            <img src={burger} alt="burger" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni burger</h5>
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
                        </div> */}
                        
                    </Col>
                  
                </Row>
            </Container>

        </section>
    </>
  )
}

export default Burger