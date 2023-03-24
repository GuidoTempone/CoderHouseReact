import React from 'react';
import "../Styles/itemDetail.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import json from "../muebles.json"

const ItemDetail = () => {
    const { id } = useParams();
    const [product, setProducts] = useState([]);

    const obtainObj = (id) =>{
      setProducts(json)
       
     
    }

    useEffect(() => {
      obtainObj(id)
       
    }, [id]);


    const newObj = product.filter(product => product.id == id);
    console.log(newObj)
  return (
    <>
    {newObj.map((product, index) => {
      return(
   <div className="product-detail-container" key={index}>
      <div className="product-image">
        <img src={product.img} alt={product.name} />
         </div>
         <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
    
      )
    
    })}
      </>
        
      )
  
 
};

export default ItemDetail;


