import React from 'react';
import "./Product.css"
const Product = (props) => {
    const{name,img,seller,price,ratings}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h1>name:{name}</h1>
        </div>
    );
};

export default Product;