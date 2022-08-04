import React from "react";
import useCart from "../../../hooks/useCart";

export default function Summary() {
  const { totalPrice } = useCart();
  const deliveryFee = totalPrice > 500 ? 0 : 100;
  return (
    <>
      <div className="card border-primary-lighter mb-4">
        <h2 className="card-header text-primary-light text-center bg-primary-lighter border-primary-lighter">
          訂單摘要
        </h2>
        <div className="card-body text-primary-light">
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
      </div>
    </>
  );
}
