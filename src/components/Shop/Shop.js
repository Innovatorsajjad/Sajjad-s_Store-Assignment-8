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
        <div className=' container' >
       <div className="row">
       <div className=" col-md-10 row row-cols-1 row-cols-md-3 g-4"> 
         {
             products.map(product=><Product
             key={product.id}
             product ={product}
             ></Product>)
         } 
        </div>
            <div className=" col-md-2">
                this is cart container
             </div>
       </div>
        </div>
    );
};

export default Shop;