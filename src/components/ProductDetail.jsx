import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom"
import Pizza from "../assets/images/pizza.png";
import Products from "../assets/data/products";
import { useState } from "react";
import { useDispatch} from 'react-redux'
import {cartActions} from '../store/cartSlice/cartSlice'



const ProductDetail = () => {


  // useEffect(() => {
  //   const thumbnails = document.querySelectorAll(".thumbnails img");
  //   const mainImage = document.getElementById("main-image");

  //   let index = 0;
  //   thumbnails.forEach((thumbnail) => {
  //     thumbnail.addEventListener("click", () => {
  //       index = thumbnail.getAttribute("data-index");
  //       const imagePath = `/src/assets/images/${index}.png`;
  //       mainImage.src = imagePath;
  //     });
  //   });

  //   const leftArrow = document.querySelector(".left-arrow");
  //   const rightArrow = document.querySelector(".right-arrow");
  //   let currentIndex = index;

  //   leftArrow.addEventListener("click", () => navigateImage(-1));
  //   rightArrow.addEventListener("click", () => navigateImage(1));

  //   function navigateImage(offset) {
  //     currentIndex =
  //       (currentIndex + offset + thumbnails.length) % thumbnails.length;
  //     const imagePath = `/src/assets/images/${currentIndex}.png`;
  //     mainImage.src = imagePath;
  //   }
  // }, []);
    


  const params = useParams();
  const id = params.id;    

  const filteredData = Products.filter((product)=>{
    return product.id == id;
  })

  console.log(filteredData);

  const filterData = filteredData.find((product)=>{
    const category = product.category
    return category;
  })

  const cat = filteredData.map((dat)=>{
    return dat.category
  })

  // console.log(cat);

  const similarData = Products.filter((product)=>{
    return product.category == cat;
  })

  // console.log(similarData);

  const storeId = filterData.id;
  const title = filterData.title;
  const image01 = filterData.image01;
  const price = filterData.price;

  const dispatch = useDispatch()
 const addToCart = ()=>{
      dispatch(cartActions.addItem({
          storeId,
          title,
          image01,
          price
      }))
  }



  const [previewImg, setPreviewImg] = useState(filterData.image01);



  return (
    <>
      <section className="popular-products">
      {
        filteredData.map((data)=>{
          return <Container>
              <div className="heading">
                {/* <h3>Product Detail</h3> */}
                {/* <h6>POPULAR PRODUCTS</h6> */}
              </div>

              <Row className="row product-details">
                <Col className="col col1 col-md-6">
                  <div className="wrapper">
                    <div className="image-library">
                      <div className="main-image">
                        {/* <div className="nav-arrow left-arrow">&lt;</div> */}
                        <img id="main-image" src={previewImg} alt="" />
                        {/* <div className="nav-arrow right-arrow">&gt;</div> */}
                      </div>
                      <div className="thumbnails">
                        <img src={data.image01} onClick={()=>{ setPreviewImg(data.image01)}} />
                        <img src={data.image02} onClick={()=>{ setPreviewImg(data.image02)}} />
                        <img src={data.image03} onClick={()=>{ setPreviewImg(data.image03)}} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="col col2 col-md-6">
                  <div className="wrapper">
                    <h2>{data.title}</h2>
                    <div className="info">
                      <p>{data.desc}</p>
                      {/* <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Sed, harum.
                      </p>
                      <p>Lorem, ipsum dolor.</p>
                      <p>Lorem, ipsum dolor.</p>
                      <p>Lorem, ipsum dolor.</p>
                      <p>Lorem, ipsum dolor.</p> */}
                    </div>
    
                    {/* <div className="food-items d-flex flex-column align-items-start">
                            <label for="food-items">lorem</label>
                            <select name="" id="food-items">
                              <option value="" selected>1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                              <option value="">4</option>
                            </select>
                          </div> */}
    
                    <div className="price fw-bold">
                      <p>Price:&ensp;${data.price}</p>
                    </div>
    
                    {/* <div className="customize d-flex flex-column align-items-start">
                            <label for="customize">客製化</label>
                            <input type="text" id="customize" />
                            <p>若您有客制化需求，請註明。</p>
                          </div> */}
    
                    <div className="add-to-cart align-items-start">
                      {/* <div className="count">
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                      </div> */}
                      <button className="btn" onClick={addToCart}>Add to Cart</button>
                    </div>
                  </div>
                </Col>
              </Row>
    
              <Row className="row3">
                <Col className="col col-md-12">
                  <div className="wrapper">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                      modi harum dolores perspiciatis id qui eius distinctio fugit
                      consequuntur, quae voluptatum similique omnis at minus sint
                      voluptatibus repellendus eveniet non vitae sapiente, obcaecati
                      enim. Quas omnis tempora officia ipsum facilis blanditiis
                      illum obcaecati! Sapiente incidunt repellendus fuga nesciunt
                      unde nihil blanditiis vel dolorum praesentium officia suscipit
                      dolore, alias recusandae beatae quos quo necessitatibus modi
                      nostrum nisi odio vero. Rerum vitae dicta minus voluptatem
                      totam nemo ipsam sed cupiditate cumque quaerat. Tempora culpa
                      optio soluta reiciendis. Tenetur quibusdam ducimus porro
                      commodi illum consectetur adipisci nulla eaque eius possimus
                      deserunt necessitatibus accusamus, quod, minima a ipsum quis
                      rem maxime incidunt, voluptates non reprehenderit? Minus
                      vitae, sint sunt iste veniam animi corporis porro incidunt non
                      tenetur consectetur nisi beatae magnam magni, sequi laboriosam
                      vero cum debitis neque impedit labore at praesentium
                      molestias. Similique perspiciatis, placeat quibusdam ratione
                      eum ea corrupti saepe illo sit explicabo veniam consequatur
                      quo quisquam, necessitatibus magni tenetur voluptas maiores
                      repellat voluptates eaque soluta? A repudiandae voluptas eius
                      earum culpa nihil saepe suscipit voluptatum ut dolores, animi,
                      veniam amet sint excepturi quasi aperiam sequi, minima aliquid
                      fuga asperiores officia quisquam delectus reiciendis est! Ut
                      reiciendis voluptates qui ullam quod sint.
                    </p>
                  </div>
                </Col>
              </Row>
              </Container>
              })
      }


      <Container>
            <Row className="row4">
              <div className="heading">
                <h3>Similar Products</h3>
              </div>
              <Col className="col col-md-12">
                <div className="main">
                  <div className="product-wrapper">

                  {
                    similarData.map((data, index)=>{
                      return <Link to={`/product-details/${data.id}`} key={index}>
                                <div className="product">
                                  <img src={data.image01} className="img-fluid" alt="" />
                                  <div className="content">
                                    <h5>{data.title}</h5>
                                    <h4>$ {data.price}</h4>
                                    <button className="btn">Order now</button>
                                  </div>
                                </div>
                            </Link>

                    })
                  }

  
                    {/* <div className="product">
                      <img src={Pizza} className="img-fluid" alt="" />
                      <div className="content">
                        <h5>Pizza 2</h5>
                        <h4>2000/RS</h4>
                        <button className="btn">Order now</button>
                      </div>
                    </div>
  
                    <div className="product">
                      <img src={Pizza} className="img-fluid" alt="" />
                      <div className="content">
                        <h5>Pizza 3</h5>
                        <h4>2000/RS</h4>
                        <button className="btn">Order now</button>
                      </div>
                    </div>
  
                    <div className="product">
                      <img src={Pizza} className="img-fluid" alt="" />
                      <div className="content">
                        <h5>Pizza 4</h5>
                        <h4>2000/RS</h4>
                        <button className="btn">Order now</button>
                      </div>
                    </div>
   */}
                    {/* <div className="product">
                      <img
                        src={Pizza}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="content">
                        <h5>Pizza 5</h5>
                        <h4>2000/RS</h4>
                        <button className="btn">Order now</button>
                      </div>
                    </div>
  
                    <div className="product">
                      <img
                        src={Pizza}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="content">
                        <h5>Pizza 6</h5>
                        <h4>2000/RS</h4>
                        <button className="btn">Order now</button>
                      </div>
                    </div>
  
                    <div className="product">
                      <img
                        src={Pizza}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="content">
                        <h5>Pizza 7</h5>
                        <h4>2000/RS</h4>
                        <button className="btn">Order now</button>
                      </div>
                    </div>
  
                    <div className="product">
                      <img
                        src={Pizza}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="content">
                        <h5>Pizza 8</h5>
                        <h4>2000/RS</h4>
                        <button className="btn">Order now</button>
                      </div>
                    </div> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    </>
  );
};

export default ProductDetail;
