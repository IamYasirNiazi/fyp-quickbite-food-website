import React from "react";
// import { Col, Container, Row } from 'reactstrap'
// import burger from '../assets/images/pizza.png'
import { useDispatch } from 'react-redux'
import {cartActions} from '../store/cartSlice/cartSlice'
import { Link } from "react-router-dom";

const ProductCard = ({item}) => {

    // console.log(props)

    const {id, title, image01, desc, price} = item
    // const {id, title, image01, desc, price} = props.item

    const dispatch = useDispatch()

    const addToCart = ()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }

  return (
    <div className="product">
      <img src={image01} alt="burger" className="img-fluid" />
      <div className="content">
        <h5><Link to={`/product-details/${id}`}>{title}</Link></h5>
        <p>
          {desc}
        </p>
        <div className="price-and-order">
            <h6>${price}.00</h6>
            <button className="btn btn-order" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
