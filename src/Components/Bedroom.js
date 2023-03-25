import React from 'react';
import { useEffect, useState } from "react";
import json from "../muebles.json"
import ItemCard from './ItemCard';
import "../Styles/card.css"

const Bedroom = () => {
    
    const [product, setProducts] = useState([]);

    const obtainObj = () =>{
      setProducts(json)
    }

    useEffect(() => {
      obtainObj()
       
    }, []);


    const newObj = product.filter(product => product.search == "b");
    console.log(newObj)
  return (
    <div className="body-card">
    {newObj.map((product, index) => {
      return(
        <div key={index} >
        <ItemCard product={product}/>
      </div>
    )
})}
      </div>
        
      )
  
 
};

export default Bedroom;