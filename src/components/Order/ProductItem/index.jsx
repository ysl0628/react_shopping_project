import React from "react";

export default function ProductItem({ product }) {
  console.log(product.image_url);
  return (
    <>
      <div className="cart-row d-flex flex-column flex-md-row py-3">
        <div className="d-flex align-items-center flex-grow-1 mr-md-3">
          <div className="my-4 mr-4 flex-grow-1 flex-md-grow-0">
            <div>
              <img style={{ width: "6rem" }} src={product.image_url} alt="" />
            </div>
          </div>
          <div className="d-flex align-items-md-center flex-column flex-md-row flex-md-grow-1">
            <div className="flex-fill mr-md-4">
              <span className="h5">{product.title}</span>
              <br />
              <span>NT$ {product.price}</span>
            </div>
            <div className="cart-control ml-md-auto mt-3 mt-md-0">
              <span className="h5">{product.amount} 個</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
