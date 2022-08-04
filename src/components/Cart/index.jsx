import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import useCart from "../../hooks/useCart";
import { removeAll } from "../../store/reducers/cartSlice";

export default function Cart() {
  const { totalPrice } = useCart();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const deliveryFee = totalPrice > 500 ? 0 : 100;
  return (
    <section className="container my-md-5">
      {/* 判斷購物車是否有商品 */}
      {cart.products.length === 0 ? (
        <div className="flex-wrap justify-content-center mb-3">
          <h1 className="bg-primary-lighter h4 mb-0 py-4 text-center">
            您的購物車
          </h1>
          <h1 className="mt-3 mb-3 text-center">購物車是空的</h1>
          <Link
            className="btn btn-accent btn-block btn-lg py-3 text-primary"
            to={"/products"}
          >
            點我開始選購
          </Link>
        </div>
      ) : (
        <div className="row carts">
          <div className="col-md-8">
            <h1 className="bg-primary-lighter h4 mb-0 py-4 text-center">
              您的購物車
            </h1>
            {cart.products.map((product) => (
              <CartItem key={product.id} product={product} cart={cart} />
            ))}
            <div className="negative-row-margin mx-md-8">
              <button
                onClick={() => dispatch(removeAll())}
                className="btn btn-accent btn-block btn-lg py-4 text-light bg-danger text-center"
                to={"delivery"}
              >
                <span className="material-icons pr-2">
                  <i className="fa-solid fa-trash-can"></i>
                </span>
                清空購物車
              </button>
            </div>
          </div>
          {cart.products.length !== 0 && (
            <div className="col-md-4">
              <div className="p-md-3 py-3 pt-0 cart-msg-box">
                <h2 className="text-center cart-msg-title h4 py-3">訂單摘要</h2>
                <hr className="border-white mt-0" />
                <div className="d-flex justify-content-between mb-2">
                  <span>小計</span>
                  <span>NT$ {totalPrice}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>運費</span>
                  <span>NT$ {deliveryFee}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="h5">總計</span>
                  <span className="h5">NT$ {totalPrice + deliveryFee}</span>
                </div>
              </div>
              <div className="negative-row-margin mx-md-0">
                <Link
                  className="btn btn-accent btn-block btn-lg py-3 text-primary"
                  to={"delivery"}
                >
                  結帳
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
