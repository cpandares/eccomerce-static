
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import useGetProducts from '../../hooks/useGetProducts';
import '../../styles/Header.scss';
import MyOrder from '../containers/MyOrder';

import Menu from './Menu';
import MenuMobile from './MenuMobile';

const API = 'https://api.escuelajs.co/api/v1/categories';

const Header = () => {

  const [ toggle, setToggle] = useState(false);
  const [ toggleOrder, setToggleOrder ] = useState(false);
  const [ toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const { state } = useContext(AppContext);

  const categories = useGetProducts(API);
  
  const hanldeToggle = ()=>{
    setToggle(!toggle)
  }

  const handleMobileMenu = ()=>{
    setToggleMenuMobile(!toggleMenuMobile)
  }

  return (
    <nav>
      <img 
        src="https://res.cloudinary.com/cpandares/image/upload/v1655762093/ecommerce/icon_menu_u6fvdi.svg" alt="menu" className="menu" 
        onClick={()=>handleMobileMenu() }
        />
      <div 
        className="navbar-left">
        <img 
        src="https://res.cloudinary.com/cpandares/image/upload/v1655762078/ecommerce/logo_yard_sale_x1gpol.svg" alt="logo" className="logo" 
        />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          {
            categories?.map((item, index)=>{
              return(
                <li key={ item.id }>
                   <Link to={ "/product-cate/" + item.id} > { item.name }</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li 
            className="navbar-email"
            onClick={ hanldeToggle }
            style={{ cursor:'pointer' }}
            >
              email@user.com
          </li>
          <li className="navbar-shopping-cart" 
              onClick={ ()=>setToggleOrder(!toggleOrder) } 
              style={{ cursor:'pointer' }}>
            <img 
              src="https://res.cloudinary.com/cpandares/image/upload/v1655762095/ecommerce/icon_shopping_cart_rg5n6z.svg" alt="shopping cart" />
            {
              state.cart.length > 0 
              ?
              <div>{state.cart.length}</div>
              :
              null
            }
          </li>
        </ul>
      </div>
      {toggle && <Menu /> }
      { toggleOrder && <MyOrder/> }
      { toggleMenuMobile && <MenuMobile /> }
    </nav>
  );
};

export default Header;
