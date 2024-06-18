
import React from 'react';
import { useState,useEffect } from 'react';
import {useParams} from "react-router-dom"
import PageNotFound from './componants/PageNotFound';
import { Link } from 'react-router-dom';
 const products = [
  {
    
      
      "id":"1",
      "category":"shoses",
      "image":"c1.jpg",
      "price": 150.23,
      "ratio": 10,
      "skus": [
        {sku:"17",size:7},
        {sku:"18",size:8},
      ],
    
    },
    {
      "id":"2",
      "category":"shoses",
      "image":"c2.jpg",
      "price": 50.23,
      "ratio": 8,
      "skus": [
        {sku:"17",size:7},
        {sku:"18",size:8},
      ],
    },
    {
      "id":"3",
      "category":"shoses",
      "image":"c3.jpg",
      "price": 3650.23,
      "ratio": 7,
      "skus": [
        {sku:"17",size:7},
        {sku:"18",size:8},
      ],
    },
    {
      "id":"4",
      "category":"shoses",
      "image":"c4.jpg",
      "price": 96.23,
      "ratio": 5,
      "skus": [
        {sku:"17",size:7},
        {sku:"18",size:8},
      ],
    },
    {
      "id":"5",
      "category":"shoses",
      "image":"c5.jpg",
      "price": 1050.23,
      "ratio": 7,
      "skus": [
        {sku:"17",size:7},
        {sku:"18",size:8},
      ],
    }
    ] 

function Products() {
  const [ratio,setRatio]=useState("")
  const {category}=useParams();
  // const [products,setProducts]=useState([]);
  
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://github.com/chebil1django/data_output_check/blob/main/db3.json');
  //       const jsonData = await response.json();
  //       console.log(jsonData); // logs the data to the console
  //       setProducts(jsonData);
  //     } catch (error) {
  //       console.log(error, "error"); // logs the error message to the console
  //     }
  //   };
  //   fetchData();
  // }, []);    
  function renderProduct(p){
    return(
      <div key={p.id} className="product">
        <Link  to={`/${p.id}`}>
        <span></span>
        <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <h3>Price : {p.price} </h3>
          <h3>Film rating : {p.ratio} TND</h3>
        </Link>
      </div>
    )
  
 }
  const filtredProducts= ratio
  ? products.filter((p)=> p.ratio === parseInt(ratio))
  : products;
  console.log(products.length)
  if (products.length === 1 ) return <PageNotFound/>
 
  return (
    <div className="content"> 
      <section id="filters">
        <label htmlFor="ratio"> Filter by Film rating :</label>{" "}
        <select id="ratio" value={ratio} 
        onChange={(e)=>setRatio(e.target.value)}>
          <option value = "">All ratings</option>
          <option value = "5">5</option>         
          <option value = "6">6</option>
          <option value = "7">7</option>
          <option value = "8">8</option>
          <option value = "9">9</option>
          <option value = "10">10</option>

        </select>
      </section>
      <br></br>
      {ratio && <h2>Number of films with selected rating :   {filtredProducts.length} </h2>}
      <section id="products"> {filtredProducts.map(renderProduct)} </section>
    </div>
  );
}
export default Products;