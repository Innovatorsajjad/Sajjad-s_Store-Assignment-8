import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {

    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch ("products.json")
        .then(Response=>Response.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop_container' >
        <div className="product_container"> 
         {
             products.map(product=><Product
             key={product.id}
             ></Product>)
         } 
        </div>
            <div className="cart_container">
                this is cart container
                </div>
        </div>
    );
};

export default Shop;