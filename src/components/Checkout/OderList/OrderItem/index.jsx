import React from "react";
import { serverUrl } from "../../../../utlis/config";

export default function OrderItem({ item }) {
  return (
    <>
      <div className="d-flex mt-1">
        <div
          className="cart-image cart-image-sm mr-3"
          style={{
            backgroundImage: `url(${serverUrl}${item.image})`,
          }}
        ></div>
        <div className="d-flex align-items-center">
          <div className="flex-fill mr-lg-4 text-primary-light">
            <span className="h5">
              {item.title} ({item.amount})
            </span>
            <br />
            <span>NT$ {item.amount * item.price}</span>
          </div>
        </div>
      </div>
    </>
  );
}
