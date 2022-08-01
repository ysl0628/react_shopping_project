import { Navigate, useRoutes } from "react-router-dom";
import Cart from "../components/Cart";
import Delivery from "../components/Checkout/Delivery";
import Invoice from "../components/Checkout/Invoice";
import Payment from "../components/Checkout/Payment";
import Success from "../components/Checkout/Success";
import Home from "../components/Home";
import Login from "../components/Login";
import Products from "../components/Products";

export const routes = [
  {
    path: "",
    element: <Navigate to="/home" />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "cart/delivery",
    element: <Delivery />,
  },
  {
    path: "cart/payment",
    element: <Payment />,
  },
  {
    path: "cart/invoice",
    element: <Invoice />,
  },
  {
    path: "cart/success",
    element: <Success />,
  },
];

export const RouterAll = () => useRoutes(routes);
