import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../store/cartSlice/cartUiSlice";


const Carts = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const cartProductsPrice = useSelector((state) => state.cart.totalAmount);
  // console.log(cartProducts)
  
  // const setCartLocalStorage = localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
  const getLocalCartItems = JSON.parse(localStorage.getItem('cartProducts')).cartItems
  const getLocalTotalPrice = JSON.parse(localStorage.getItem('cartProducts')).totalAmount


  const dispatch = useDispatch()
  const toggleCart = ()=>{
    dispatch(cartUiActions.toggle())
  }

  return (
    <div className="cart-sidebar">
      <div className="header">
        {/* <span className="d-flex align-items-center">購物車 &nbsp;<span className="count">50</span></span> */}
        <i className="ri-close-line close" id="close-btn1" onClick={toggleCart}></i>
      </div>

      <div className="add-to-cart-main">
        {getLocalCartItems.length === 0 ? (
          <h6 className="text-center pt-5 add-to-cart-main">
            No item added to the cart.
          </h6>
        ) : (
          getLocalCartItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))
        )}
      </div>

      <div className="footer">
        <div>
          <h6>
            {/* Subtotal : <span>${cartProductsPrice}</span> */}
            Subtotal : <span>Rs. {getLocalTotalPrice}</span>
          </h6>
        </div>
        <Link to={`/checkout`} className="btn">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Carts;
