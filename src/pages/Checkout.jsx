import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carts from '../components/Carts'
import { useSelector } from 'react-redux'



const Checkout = () => {

  const isVisible = useSelector((state)=> state.cartUi.cartIsVisible)
  const totalAmount = useSelector((state)=> state.cart.totalAmount)

  return (
    <>
        <Header />
        {
          isVisible && <Carts />
        }
        
        
        <div class="payment-details">
          <div class="payment-details__container container">
            <h4>Payment Details</h4>
              <div class="payment-details__container__row row">

                  <div class="payment-details__container__row__col1 col col-md-10 col1">
                      
                      <form action="" method='POST'>
                        <div class="main">
                        <div class="email">
                            <label class="w-100">
                                <div>Name</div>
                                <div>
                                  <input type="text" class="w-100" />
                                </div>
                            </label>
                          </div>
                          <div class="email">
                            <label class="w-100">
                                <div>Email</div>
                                <div>
                                  <input type="email" class="w-100" />
                                </div>
                            </label>
                          </div>
                          <div class="email">
                            <label class="w-100">
                                <div>Address</div>
                                <div>
                                  <input type="text" class="w-100" />
                                </div>
                            </label>
                          </div>
                          <div class="credit">
                            <label class="w-100">
                                <div>Credit Card Number</div>
                                <input type="text" class="w-100" />
                            </label>
                          </div>
                          <div class="date d-flex align-items-start justify-content-start gap-3">
                            <label>
                                <div>CSV</div>
                                <input type="text" />
                            </label>
                            <label>
                                <div>Exp Date</div>
                                <input type="date" />
                            </label>
                          </div> 
                          <div class="total">
                            <div>
                              <span>Total Amount</span>
                              <span class="dollar">${totalAmount}</span>
                            </div>
                          </div>
                          <button class="btn-payment">Submit Order</button>
                        </div>
                      </form>

                  </div>
                  
              </div>
          </div>
        </div>
        

        <Footer />
    </>
    
  )
}

export default Checkout