import OrderItem from '../components/OrderItem';
import '../../styles/MyOrder.scss';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const MyOrder = () => {
	const { state } = useContext(AppContext)

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src="https://res.cloudinary.com/cpandares/image/upload/v1655762093/ecommerce/flechita_wjlrbm.svg" alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{
					state.cart.map((item, index) => {
						return (
							<OrderItem key ={ index} product ={ item } />
							)
					})
				}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${ sumTotal() }</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>

			</div>
		</aside>
	);
}

export default MyOrder;