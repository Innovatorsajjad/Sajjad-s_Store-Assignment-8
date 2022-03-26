import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Product.css"
const Product = ({handleAddToCart,product}) => {
  // const{handleAddToCart,product}=props
    const{name,img,seller,price,ratings}= product;

    return (
        <div class="col">
    <div class="card single_card">
      <img src={img}class="card-img-top" alt="..."/>
      <div class="card- text-center">
        <h2 class="card-title">{name}</h2>
        <h5 class="card-text"> Saller: {seller} </h5>
        <h6>Price : ${price}</h6>
      </div>
      <small class="text-muted">Ratings : {ratings} stars</small>
      <div class="">
        <button onClick={ ()=> handleAddToCart (product)} className='buy_now_Button w-100 text-light' >
           <a href="#">Buy Now  
           <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon></a>
         </button>
      </div>
    </div>
  </div>
    );
};

export default Product;