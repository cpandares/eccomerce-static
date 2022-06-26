import { useState, useEffect } from "react";

import axios from 'axios';


const useGetProductsByCategory = (id)=>{

    const [products, setProducts] = useState([]);
    

  useEffect(  ()=>{
    axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products?limit=10&offset=1`)
      .then(res => {
        setProducts(res.data);
        })
      .catch(e => console.log(e))

      
  },[])
  return products;
}

export default useGetProductsByCategory
