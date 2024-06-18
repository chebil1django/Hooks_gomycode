import React from 'react'
import { useParams } from 'react-router-dom'
import PageNotFound from './PageNotFound'
const Detail = () => {
  const {id} = useParams()

  const prod = [
    
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

  
  const filteredData = prod.filter(item => item.id == {id}.id);
  // console.log ("results")
  console.log (filteredData[0])

  // if (!filteredData) return <PageNotFound/>
   return (

    <div id="detail">
       {/* <h3>detail1</h3> */}
       <img src={`/images/${filteredData[0].image}`} alt={filteredData[0].name} />
          {/* <h3>{p.name}</h3>
          <h3>{p.price}</h3>
          <h3>{p.ratio}</h3> */}
   
       <p>{filteredData[0].price}</p> 
       <p>{filteredData[0].ratio}</p> 
      </div>
  )
}
export default Detail