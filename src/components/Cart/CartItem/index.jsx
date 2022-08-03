import React from "react";
import { useSelector } from "react-redux";

export default function CartItem({ product }) {
  const perTotal = product.price * product.amount;
  return (
    <>
      {" "}
      <div className="cart-row d-flex flex-column flex-md-row py-3">
        <div className="d-flex align-items-center flex-grow-1 mr-md-3">
          <div className="my-4 mr-4 flex-grow-1 flex-md-grow-0">
            <div
              className="cart-image"
              style={{
                backgroundImage: `url("http://localhost:1337${product.image}")`,
              }}
            ></div>
          </div>
          <div className="d-flex align-items-md-center flex-column flex-md-row flex-md-grow-1">
            <div className="flex-fill mr-md-4">
              <span className="h5">{product.title}</span>
              <br />
              <span>NT$ {product.price}</span>
            </div>
            <div className="cart-control ml-md-auto mt-3 mt-md-0">
              <div className="input-group carts-input-group">
                <div className="input-group-prepend">
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                    value={product.amount}
                    onChange={(e) => e.preventDefault()}
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="price ml-md-auto align-items-center py-3 justify-content-end d-flex flex-md-row-reverse">
          <a href="#" className="btn d-none d-md-block">
            <span className="material-icons">
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </a>
          <span className="h5 mb-0 mr-md-3">NT$ {perTotal}</span>
        </div>
      </div>
    </>
  );
}
