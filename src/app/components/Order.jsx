import React from 'react';
import '../../styles/Order.scss';

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src="https://res.cloudinary.com/cpandares/image/upload/v1655762093/ecommerce/flechita_wjlrbm.svg" alt="arrow" />
		</div>
	);
}

export default Order;