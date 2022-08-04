import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { selectToCart } from "../../../../store/reducers/cartSlice";
import Backdrop from "../../../../UI/Backdrop";
// import { Modal } from "bootstrap";

export default function Modal({ close, item, setModal }) {
  const [selectAmount, setSelectAmount] = useState();
  const dispatch = useDispatch();
  // let amount = 0;
  // cart ? (amount = cart.amount) : (amount = 0);
  return (
    <Backdrop>
      {/* <!-- Modal --> */}
      <div onClick={close} className=" d-flex justify-content-center  ">
        {/* onClick={(e) => e.stopPropagation()} 防止點選視窗而關閉畫面 */}
        <div className="m-0 " onClick={(e) => e.stopPropagation()}>
          <div className="card" style={{ width: "22rem" }}>
            <div className="card-header d-flex justify-content-between">
              <h2>{item.title}</h2>
              <button type="button" className="btn" onClick={close}>
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
            <img
              src={`http://localhost:1337${item.image}`}
              style={{ maxWidth: "100%" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <div className="input-group-prepend">
                <select
                  className="form-select form-control"
                  aria-label="Default select example"
                  onChange={(e) => {
                    e.preventDefault();
                    setSelectAmount(e.target.value);
                  }}
                >
                  <option value="0"> </option>
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
            <div className="card-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-sm mx-1"
                onClick={(e) => {
                  e.preventDefault();
                  const data = { value: selectAmount, product: item };
                  dispatch(selectToCart(data));
                  setModal(false);
                }}
              >
                加入購物車中
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm mx-1"
                onClick={close}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}
