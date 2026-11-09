import React from 'react';
import { useState } from 'react'

function App() {
const [search,setsearch]=useState("")
const [sort,setsort]=useState("")
const [filter,setfilter]=useState("")



  const products = [
{ id: 1, name: "iPhone 15", category: "Electronics", price: 75000 },
{ id: 2, name: "Samsung S24", category: "Electronics", price: 80000 },
{ id: 3, name: "Nike Shoes", category: "Fashion", price: 5000 },
{ id: 4, name: "Adidas T-Shirt", category: "Fashion", price: 2000 },
{ id: 5, name: "Office Chair", category: "Furniture", price: 12000 },
{ id: 6, name: "MacBook Air", category: "Electronics", price: 95000 }
];
  const result = products.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()))
  .sort((a,b)=>{
    if(sort==="low"){
      return a.price - b.price
    }
    if(sort==="high"){
      return b.price - a.price
    }
  })
  .filter((product)=>{
    if(filter===""){
      return true
    }
    return product.category===filter
  })
  const clearFilters = () => {
  setsearch("");
  setsort("");
  setfilter("");
};

  return (
    <div>
    <input 
    value={search}
    onChange={(e)=>setsearch(e.target.value)}
    />
   <select
   value = {sort}
   onChange={(e)=>setsort(e.target.value)}
   >
   <option value = "">sort</option>
   <option value = "low">low to high</option>
   <option value = "high">high to low</option>
   </select>

   <select
   value = {filter}
   onChange={(e)=>setfilter(e.target.value)}
   >
   <option value = "">all</option>
   <option value = "Electronics">Electronics</option>
   <option value = "Fashion">Fashion</option>
   <option value = "Furniture">Furniture</option>
   </select>
   <button onClick={clearFilters}>
  Clear Filters
</button>

    {result.map((product)=>(
      <div key={product.id} >
    
      <h2 >{product.name}</h2>
      <h4 >${product.price}</h4>
      </div>
  ))}
    
    </div>
  )
}

export default App
