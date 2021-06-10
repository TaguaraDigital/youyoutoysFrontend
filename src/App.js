import { GlobalStyle } from "./globalStyles";
import { useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AuthContext } from "./hooks/contexts/AuthContext";

import "./App.css";

import Landing from "./views/Landing";
import Login from "./views/Access/Login";
import Register from "./views/Access/Register";
import Home from "./views/Home/Home";

import Orders from "./views/Orders/Orders";
import OrderConfirm from "./views/Orders/OrdersConfirm";

import OrdersAdmin from "./views/Orders";
import OrderDetails from "./views/Orders/OrderDetails";

import Products from "./views/products";
import ProductsDetail from "./views/products/ProductDetail";

import ImagesEnter from "./views/imagesHandle/ImagesEnter";
import ImagesSlider from "./views/imagesHandle/ImagesSlider";

const App = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    checkAuthenticated,
    currentUser,
  } = useContext(AuthContext);
  useEffect(() => {
    checkAuthenticated();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={!isAuthenticated ? Landing : Home} />

        <Route
          exact
          path="/login"
          component={!isAuthenticated ? Login : Home}
        />
        <Route
          exact
          path="/register"
          component={!isAuthenticated ? Register : Home}
        />

        <Route
          exact
          path="/home"
          component={isAuthenticated ? Home : Landing}
        />
        <Route
          exact
          path="/orders"
          component={
            !isAuthenticated
              ? Landing
              : currentUser.role === "AD"
              ? OrdersAdmin
              : Orders
          }
        />
        <Route
          exact
          path="/ordersConfirm"
          component={!isAuthenticated ? Landing : OrderConfirm}
        />
        <Route
          exact
          path="/ordersDetails/:id"
          component={
            !isAuthenticated
              ? Landing
              : currentUser.role === "AD"
              ? OrderDetails
              : Orders
          }
        />

        <Route exact path="/images" component={ImagesEnter} />
        <Route exact path="/imagesSlider" component={ImagesSlider} />

        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductsDetail} />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
