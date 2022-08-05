import { Navigate, useRoutes } from "react-router-dom";
import Cart from "../components/Cart";
import Delivery from "../components/Checkout/Delivery";
import Invoice from "../components/Checkout/Invoice";
import Payment from "../components/Checkout/Payment";
import Success from "../components/Checkout/Success";
import Home from "../components/Home";
import Login from "../components/Login";
import Products from "../components/Products";
import Admin from "../components/Admin";
import NeedAuth from "../components/NeedAuth";

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
    path: "admin",
    element: (
      <NeedAuth>
        <Admin />
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
