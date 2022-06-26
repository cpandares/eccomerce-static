import ProductInfo from "../components/ProductInfo";
import "../../styles/ProductDetail.scss";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/products/";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(API + id)
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  const handleBack = () => {
    history.goBack();
  };
  return (
    <aside className="ProductDetail">
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <>
          <div className="ProductDetail-close">
            <img
              src="https://res.cloudinary.com/cpandares/image/upload/v1655762093/ecommerce/flechita_wjlrbm.svg"
              alt="close"
              onClick={() => handleBack()}
            />
          </div>
          <ProductInfo product={product} images={product.images} />
        </>
      )}
    </aside>
  );
};

export default ProductDetail;
