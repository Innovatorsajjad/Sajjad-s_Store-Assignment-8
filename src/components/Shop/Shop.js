import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {

    const[products,setProducts]=useState([]);
    const [carts,setCart]=useState([]);
    const[findOne,setFindOne]=useState([]);
    useEffect(()=>{
        fetch ("products.json")
        .then(Response=>Response.json())
        .then(data=>setProducts(data))
    },[]);
 
    const findAPhone =(carts)=>{
        const tryLuck = (Math.floor(Math.random() * carts.length));
        setFindOne(carts[tryLuck]?.name);
    }
    const clearPhone =()=>{
        setCart([])
    }

    const handleAddToCart =(product)=>{
        
        const newCart=[...carts,product]
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
                 {
                     carts.map(cart=>
                        <div key={cart.id} className="cart_slider d-flex text-center align-items-center">
                            <img className='w-25' src={cart.img} alt="" />
                             <h4>{cart.name}</h4>
                        </div>
                        )
                 }
                 <div className="btn_group text-center">
                     <h4 className='text-light mt-5'>{findOne}</h4>
                 <button onClick={()=>findAPhone(carts)} className='mb-3 mt-3 color_button'>Chose One for me</button>
                 <button onClick={clearPhone} className='color_button'>Clear All</button>
                 </div>
                </div>
             </div>
       </div>
        </div>
    );
};

export default Shop;