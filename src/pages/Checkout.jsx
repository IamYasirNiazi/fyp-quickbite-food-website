// import React from 'react'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import Carts from '../components/Carts'
// import { useSelector } from 'react-redux'
// import TitleSection from '../components/TitleSection'



// const Checkout = () => {

//   const isVisible = useSelector((state)=> state.cartUi.cartIsVisible)
//   const totalAmount = useSelector((state)=> state.cart.totalAmount)

//   return (
//     <>
//         <Header />
//         {
//           isVisible && <Carts />
//         }

//         <TitleSection title ="Checkout Details" />
         
//         <div class="payment-details">
//           <div class="payment-details__container container">
//             <h4>Payment Details</h4>
//               <div class="payment-details__container__row row">

//                   <div class="payment-details__container__row__col1 col col-md-10 col1">
                      
//                       <form action="" method='POST'>
//                         <div class="main">
//                         <div class="email">
//                             <label class="w-100">
//                                 <div>Name</div>
//                                 <div>
//                                   <input type="text" class="w-100" />
//                                 </div>
//                             </label>
//                           </div>
//                           <div class="email">
//                             <label class="w-100">
//                                 <div>Email</div>
//                                 <div>
//                                   <input type="email" class="w-100" />
//                                 </div>
//                             </label>
//                           </div>
//                           <div class="email">
//                             <label class="w-100">
//                                 <div>Address</div>
//                                 <div>
//                                   <input type="text" class="w-100" />
//                                 </div>
//                             </label>
//                           </div>
//                           <div class="credit">
//                             <label class="w-100">
//                                 <div>Credit Card Number</div>
//                                 <input type="text" class="w-100" />
//                             </label>
//                           </div>
//                           <div class="date d-flex align-items-start justify-content-start gap-3">
//                             <label>
//                                 <div>CSV</div>
//                                 <input type="text" />
//                             </label>
//                             <label>
//                                 <div>Exp Date</div>
//                                 <input type="date" />
//                             </label>
//                           </div> 
//                           <div class="total">
//                             <div>
//                               <span>Total Amount</span>
//                               <span class="dollar">${totalAmount}</span>
//                             </div>
//                           </div>
//                           <button class="btn-payment">Submit Order</button>
//                         </div>
//                       </form>

//                   </div>
                  
//               </div>
//           </div>
//         </div>
        

//         <Footer />
//     </>
    
//   )
// }

// export default Checkout










import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carts from '../components/Carts'
import { useSelector } from 'react-redux'
import TitleSection from '../components/TitleSection'
import { useEffect } from 'react'



const Checkout = () => {

  const isVisible = useSelector((state)=> state.cartUi.cartIsVisible)
  const totalAmount = useSelector((state)=> state.cart.totalAmount)
  const product = useSelector((state)=> state.cart.cartItems)

  console.log(product)


  const [allProducts, setAllProducts] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [price, setPrice] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const mappedData = product.map((prdct)=>{
      return prdct.title
    })

    setAllProducts(mappedData)
  
  }, [product])
  // console.log(allProducts)

  useEffect(() => {
    const mappedQuan = product.map((quan)=>{
      return quan.quantity
    })

    setQuantity(mappedQuan)
  
  }, [product])
  // console.log(allProducts)

  useEffect(() => {
    const mappedPrice = product.map((price)=>{
      return price.price
    })

    setPrice(mappedPrice)
  
  }, [product])
  // console.log(allProducts)

  useEffect(() => {
    const mappedTotal = product.map((total)=>{
      return total.Total
    })

    setTotal(mappedTotal)
  
  }, [product])
  // console.log(allProducts)

  const productString = allProducts.toString();
  const totalString = total.toString();
  const priceString = price.toString();
  const quantityString = quantity.toString();

  // console.log(products)




  const [order, setOrder] = useState({name: '', email: '', address: '', city: '', phone: '', product: '', price: '', quantity: '', total: ''})


  const onChange = (event)=>{
    setOrder({...order, [event.target.name] : event.target.value});
  }


  const submitOrder = async ()=>{
    const result =  await fetch(`http://127.0.0.1:5001/api/user/make-order`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      //   'Authorization': 'Bearer kfjdklfjkfjdlfkjdlfkdjflkdjfkldfjlfk'
      },
      body: JSON.stringify({name: order.name, email: order.email, address: order.address, city: order.city, phone: order.phone, product: productString, quantity: quantityString, price: priceString, total: totalAmount})
    });

    // const history = await result.json()

    // console.log("checkout", history)
    
  }


  return (
    <>
        <Header />
        {
          isVisible && <Carts />
        }

        <TitleSection title ="Checkout Details" />
         
        <div class="payment-details">
          <div class="payment-details__container container">
            {/* <h4>Payment Details</h4> */}
              <div class="payment-details__container__row row">
                  {/* <form onSubmit={submitOrder} method='POST'> */}

                    <div class="payment-details__container__row__col1 col col-md-7 col1">
                        
                          <div class="main">
                          <div class="name-email">
                              <label class="w-100">
                                  <div>Name</div>
                                  <div>
                                    <input required type="text" class="w-100" name='name' value={order.name} onChange={onChange} />
                                  </div>
                              </label>
                              <label class="w-100">
                                  <div>Email</div>
                                  <div>
                                    <input required type="email" class="w-100" name='email' value={order.email} onChange={onChange} />
                                  </div>
                              </label>
                            </div>
                            <div class="address-city">
                              <label class="w-100">
                                  <div>Address</div>
                                  <div>
                                    <input required type="text" class="w-100" name='address' value={order.address} onChange={onChange} />
                                  </div>
                              </label>
                              <label class="w-100">
                                  <div>City</div>
                                  <div>
                                    <input required type="text" class="w-100" name='city' value={order.city} onChange={onChange} />
                                  </div>
                              </label>
                            </div>
                            <div class="email">
                              <label class="w-100">
                                  <div>Phone No</div>
                                  <div>
                                    <input required type="text" class="w-100" name='phone' value={order.phone} onChange={onChange} />
                                  </div>
                              </label>
                            </div>
                          </div>

                    </div>
                        
                    <div class="payment-details__container__row__col2 col col-md-4 col2">
                        
                          <div class="main">
                            <div class="total">
                              <div>
                                <h2>Cash on Delivery</h2>
                              </div>
                            </div>
                            <div class="total">
                              <div>
                                <span>Total Amount</span>
                                <span class="dollar">${totalAmount}</span>
                              </div>
                            </div>
                            <button class="btn-payment" onClick={submitOrder}>Submit Order</button>
                          </div>

                    </div>

                  {/* </form> */}
              </div>
          </div>
        </div>
        

        <Footer />
    </>
    
  )
}

export default Checkout