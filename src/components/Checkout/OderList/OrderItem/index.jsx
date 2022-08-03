import React from "react";

export default function OrderItem({ item }) {
  console.log(item);
  return (
    <>
      <div className="d-flex mt-1">
        <div
          className="cart-image cart-image-sm mr-3"
          style={{
            backgroundImage: `url(http://localhost:1337${item.image})`,
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
