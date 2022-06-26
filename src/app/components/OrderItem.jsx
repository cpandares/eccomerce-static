import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import '../../styles/OrderItem.scss';

const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);

	return (
		<div className="OrderItem">
			<figure>
				<img src={ product.images[0] } alt="bike" />
			</figure>
			<p>{ product.title }</p>
			<p>${ product.price }</p>
			<img 
				src="https://res.cloudinary.com/cpandares/image/upload/v1655762093/ecommerce/icon_close_gkmiaa.png" 
				alt="close" 
				onClick={ ()=>removeFromCart(product) }
				/>
		</div>
	);
}

export default OrderItem;