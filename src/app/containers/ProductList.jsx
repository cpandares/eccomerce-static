

import ProductItem from "../components/ProductItem";
import '../../styles/ProductList.scss';
import useGetProducts from "../../hooks/useGetProducts";

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);
  
  return (
    <section className="main-container">
      <div className="cards-container">
        {
          products.map((product, index) => {
            return (
              <ProductItem key={index} product={product} />
            )
          })
        }
      
      </div>
    </section>
  );
};

export default ProductList;
