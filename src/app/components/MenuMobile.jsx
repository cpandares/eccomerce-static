import { Link } from "react-router-dom";
import useGetProducts from "../../hooks/useGetProducts";
import "../../styles/MobileMenu.scss";

const API = "https://api.escuelajs.co/api/v1/categories";

const MenuMobile = () => {
  const categories = useGetProducts(API);

  return (
    <div className="mobile-menu">
      <ul>
        <li>
          <a href="/">All</a>
        </li>
        {categories?.map((item, index) => {
          return (
            <li key={item.id}>
              <Link to={"/product-cate/" + item.id}> {item.name}</Link>
            </li>
          );
        })}
      </ul>
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        {/*  <li>
            <a href="/">My account</a>
          </li> */}
      </ul>
      {/*  <ul>
          <li>
            <a href="/" className="email">
              platzi@example.com
            </a>
          </li>
          <li>
            <a href="/" className="sign-out">
              Sign out
            </a>
          </li>
        </ul> */}
    </div>
  );
};

export default MenuMobile;
