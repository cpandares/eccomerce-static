import { useContext } from "react";
import "../../styles/ProductInfo.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AppContext from "../../context/AppContext";

const ProductInfo = ({ product, images }) => {
  const { addToCart } = useContext(AppContext)
  const handleCart = item=>{
		addToCart(item);
	}
  return (
    <div className="ProductInfo">
      <Slide autoplay transitionDuration={500} >
        {images?.map((img, index) => (          
            <div
            key={index}
              style={{
                height: "100vh",
                width: "100%",
                objectFit: "contain",
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
                alignContent: "center",
              }}
            ></div>
         
        ))}
      </Slide>
     
        <p>$ {product?.price}</p>
        <p>{product?.title}</p>
        <p>{product.description}</p>
        <button className="primary-button add-to-cart-button" onClick={ ()=>handleCart(product) }>
          <img
            src="https://res.cloudinary.com/cpandares/image/upload/v1655762095/ecommerce/icon_shopping_cart_rg5n6z.svg"
            alt="add to cart"
          />
          Add to cart
        </button>
      </div>
   
  );
};

export default ProductInfo;
