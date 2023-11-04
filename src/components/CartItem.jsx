import React from "react";
import { useDispatch} from 'react-redux'
import {cartActions} from '../store/cartSlice/cartSlice'


const CartItem = ({item}) => {

  const {id, title, image01, price, quantity, totalPrice} = item
  // const {id, title, image01, price, quantity, totalPrice} = props.item

  const dispatch = useDispatch()

  const incrementItem = ()=>{
      dispatch(cartActions.addItem({
          id,
          title,
          image01,
          price
      }))
  }

  const decrementItem = ()=>{
    dispatch(cartActions.removeItem(id))
}

const deleteItem = ()=>{
  dispatch(cartActions.deleteItem(id))
}

  return (
      <div class="add-to-cart">
        <div class="content">
          <div class="image">
            <img src={image01} class="img-fluid" alt="" />
          </div>
          <div class="text">
            <h6>{title}</h6>
            <div className="quantity-price">
                <span>{quantity}x</span>
                <span className="price">{totalPrice}</span>
            </div>
            <div className="add-del">
              <span class="del">
                <i class="ri-subtract-line" onClick={decrementItem}></i>
              </span>
              <span>{quantity}</span>
              <span class="add">
                <i class="ri-add-line" onClick={incrementItem}></i>
                {/* <i class="ri-add-line" onClick={incrementItem}></i> */}
              </span>
            </div>
          </div>
        </div>
        <div class="price-main">
          <span>
            <i class="ri-close-line" onClick={deleteItem}></i>
          </span>
          {/* <span class="price">NT$160</span> */}
        </div>
      </div>
  );
};

export default CartItem
