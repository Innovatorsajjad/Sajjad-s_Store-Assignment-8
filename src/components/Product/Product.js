import React from 'react';
import "./Product.css"
const Product = (props) => {
    const{name,img,seller,price,ratings}=props.product
    return (
        <div class="col">
    <div class="card h-100 single_card">
      <img src={img}class="card-img-top" alt="..."/>
      <div class="card- text-center">
        <h2 class="card-title">{name}</h2>
        <h5 class="card-text"> Saller {seller} </h5>
      </div>
      <small class="text-muted">Ratings : {ratings} stars</small>
      <div class="card-footer">
        <button className='w-100' >Buy Now</button>
      </div>
    </div>
  </div>
    );
};

export default Product;