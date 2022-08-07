import { Navigate, useRoutes } from "react-router-dom";
import Cart from "../pages/Cart";
import Delivery from "../pages/Checkout/Delivery";
import Invoice from "../pages/Checkout/Invoice";
import Payment from "../pages/Checkout/Payment";
import Success from "../pages/Checkout/Success";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import NeedAuth from "../components/NeedAuth";
import User from "../pages/User";

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
    element: <Product />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "user",
    element: (
      <NeedAuth>
        <User />
      </NeedAuth>
    ),
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "cart/delivery",
    element: (
      <NeedAuth>
        <Delivery />
      </NeedAuth>
    ),
  },
  {
    path: "cart/payment",
    element: (
      <NeedAuth>
        <Payment />
      </NeedAuth>
    ),
  },
  {
    path: "cart/invoice",
    element: (
      <NeedAuth>
        <Invoice />
      </NeedAuth>
    ),
  },
  {
    path: "cart/success",
    element: (
      <NeedAuth>
        <Success />
      </NeedAuth>
    ),
  },
];

export const RouterAll = () => useRoutes(routes);
