import React from 'react'
import { Col, Container, Row } from 'reactstrap'
// import drink from '../assets/images/pizza.png'
import products from '../assets/data/products'
import ProductCard from './ProductCard'

const Drink = () => {

    const drink = products.filter((dnk)=>{
        return dnk.category === "Drink"
    })

  return (
    <>
        <section className='drink' id='drinks-section'>
            <Container className='drink__container'>
                <div>
                    <h2>Drinks Collection</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, non.</p>
                </div>
                {/* <Row className='drink__container__row'>
                    <Col className='drink__container__row__col col col-md-3 col-lg-3'>
                        <div className="drink__container__row__col__product">
                            <img src={drink} alt="drink" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni drink</h5>
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
                    <Col className='drink__container__row__col col col-md-3 col-lg-3'>
                        <div className="drink__container__row__col__product">
                            <img src={drink} alt="drink" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni drink</h5>
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
                    <Col className='drink__container__row__col col col-md-3 col-lg-3'>
                        <div className="drink__container__row__col__product">
                            <img src={drink} alt="drink" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni drink</h5>
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
                    <Col className='drink__container__row__col col col-md-3 col-lg-3'>
                        <div className="drink__container__row__col__product">
                            <img src={drink} alt="drink" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni drink</h5>
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
                 <Row className='drink__container__row'>
                    <Col className='drink__container__row__col col col-md-12 col-lg-12 owl-carousel owl-theme' id='drink'>

                        {
                            drink.map((item, index)=>{
                                return <ProductCard item={item} key={index} />
                            })

                        }
                            
                        {/* <div className="drink__container__row__col__product">
                            <img src={drink} alt="drink" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni drink</h5>
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
                        <div className="drink__container__row__col__product">
                            <img src={drink} alt="drink" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni drink</h5>
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
                        <div className="drink__container__row__col__product">
                            <img src={drink} alt="drink" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni drink</h5>
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
                        <div className="drink__container__row__col__product">
                            <img src={drink} alt="drink" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni drink</h5>
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
                        <div className="drink__container__row__col__product">
                            <img src={drink} alt="drink" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni drink</h5>
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

export default Drink