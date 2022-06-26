import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../app/containers/Layout";

import RecoveryPassword from "../app/containers/RecoveryPassword";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/Register";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

import ProductDetail from "../app/containers/ProductDetail";
import ProductsCategories from "../app/containers/ProductsCategories";

const AppRoutes = () => {
  const initial = useInitialState()
  return (
    <AppContext.Provider value={ initial } >
    <Routes>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/recovery-password" component={RecoveryPassword} />

          <Route exact path="/send-email" component={SendEmail} />
					<Route exact path="/new-password" component={NewPassword} />
					<Route exact path="/account" component={MyAccount} />
					<Route exact path="/signup" component={CreateAccount} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/orders" component={Orders} />

          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/product-cate/:id" component={ProductsCategories} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Routes>
    </AppContext.Provider>
  );
};

export default AppRoutes;
