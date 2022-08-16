import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  modifyToCart,
} from "../../../store/reducers/cartSlice";
import { serverUrl } from "../../../utlis/config";

export default function CartItem({ product }) {
  const perTotal = product.price * product.amount;
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-row d-flex flex-column flex-md-row py-3">
        <div className="d-flex align-items-center flex-grow-1 mr-md-3">
          <div className="my-4 mr-4 flex-grow-1 flex-md-grow-0">
            <div
              className="cart-image"
              style={{
                backgroundImage: `url(${serverUrl}${product.image})`,
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
                  <input
                    type="number"
                    min="1"
                    className="form-select form-control"
                    aria-label="Default select example"
                    value={product.amount}
                    onChange={(e) => {
                      e.preventDefault();
                      const data = {
                        ...product,
                        amount: parseInt(e.target.value),
                      };
                      dispatch(modifyToCart(data));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="price ml-md-auto align-items-center py-3 justify-content-between d-flex flex-md-row-reverse">
          <button
            className="btn d-block d-md-block"
            onClick={() => dispatch(removeFromCart(product))}
          >
            <span className="material-icons">
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </button>
          <span className="h5 mb-0 mr-md-3">NT$ {perTotal}</span>
        </div>
      </div>
    </>
  );
}
