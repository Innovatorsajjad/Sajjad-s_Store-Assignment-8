import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {

    const[products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch ("products.json")
        .then(Response=>Response.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart =(product)=>{
        
        const newCart=[...cart,product]
        setCart(newCart)
      }
    return (
        <div className=' container' >
       <div className="row">
       <div className=" product_container col-md-10 row row-cols-1 row-cols-md-3 g-4"> 
         {
             products.map(product=><Product
             key={product.id}
             product ={product}
             handleAddToCart={handleAddToCart}
             ></Product>)
         } 
        </div>
            <div className=" col-md-2 bg-info ">
                <div className="inner_text pt-5">
                <h5 className=''>Order Summery...</h5>
                 
                 <div className="btn_group text-center">
                 <button className='mb-3 mt-3 color_button'>Chose One for me</button>
                 <button className='color_button'>Clear All</button>
                 </div>
                </div>
             </div>
       </div>
        </div>
    );
};

export default Shop;