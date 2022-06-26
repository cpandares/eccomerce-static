import { useState, useEffect } from "react";

import axios from 'axios';


const useGetProducts = (API)=>{

    const [products, setProducts] = useState([]);
    

  useEffect(  ()=>{
    axios.get(API)
      .then(res => {
        setProducts(res.data);
        })
      .catch(e => console.log(e))

      
  },[])
  return products;
}

export default useGetProducts
