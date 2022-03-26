import React from 'react';
import "./Product.css"
const Product = (props) => {
    const{name,img,seller,price,ratings}=props.product
    return (
        <div class="col">
    <div class="card single_card">
      <img src={img}class="card-img-top img-fluid" alt="..."/>
      <div class="card- text-center">
        <h2 class="card-title">{name}</h2>
        <h5 class="card-text"> Saller: {seller} </h5>
        <h6>Price : {price}</h6>
      </div>
      <small class="text-muted">Ratings : {ratings} stars</small>
      <div class="">
        <button className='buy_now_Button w-100 text-light' >Buy Now</button>
      </div>
    </div>
  </div>
    );
};

export default Product;