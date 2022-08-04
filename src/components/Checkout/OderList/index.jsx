import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

export default function OrderList() {
  const cart = useSelector((state) => state.cart);
  const products = cart.products;
  return (
    <>
      <div className="card border-primary-lighter">
        <h2 className="card-header text-primary-light text-center bg-primary-lighter border-primary-lighter">
          購物清單
        </h2>
        <div className="card-body carts">
          {products.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
