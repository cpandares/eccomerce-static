import {  useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import '../../styles/ProductItem.scss';

const ProductItem = ({product}) => {

	const history = useHistory();
	const { addToCart } = useContext(AppContext)


	const handleCart = item=>{
		addToCart(item);
	}

	const handleProduct = (id)=>{
		history.push(`/product/${id}`)
	}
	
	return (
		<div className="ProductItem" >
			<img 
				src={product?.images[0]} 
				alt={ product?.title } 
				style={{ cursor:'pointer' }}
				onClick= { ()=>handleProduct(product.id) }
			/>
			<div className="product-info">
				<div>
					<p>$ { product?.price }</p>
					<p>{ product?.title }</p>
				</div>
				<figure onClick={ ()=>handleCart(product) } style={{ cursor:'pointer' }}>
					<img 
					src="https://res.cloudinary.com/cpandares/image/upload/v1655762093/ecommerce/bt_add_to_cart_aidklb.svg" alt="cart" 
					/>
				</figure>
				
			</div>
		</div>
	);
}

export default ProductItem;