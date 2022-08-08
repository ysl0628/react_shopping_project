import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../store/reducers/cartSlice";
import Backdrop from "../../../../UI/Backdrop";
// import { Modal } from "bootstrap";

export default function Modal({ close, item, setModal }) {
  const [selectAmount, setSelectAmount] = useState();
  const dispatch = useDispatch();
  let options = [];
  for (let i = 1; i < 10; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <Backdrop>
      {/* <!-- Modal --> */}
      <div onClick={close} className=" d-flex justify-content-center  ">
        {/* onClick={(e) => e.stopPropagation()} 防止點選視窗而關閉畫面 */}
        <div className="m-0 " onClick={(e) => e.stopPropagation()}>
          <div className="card" style={{ width: "24rem" }}>
            <div className="card-header d-flex justify-content-between">
              <h2>{item.title}</h2>
              <button type="button" className="btn" onClick={close}>
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
            <img
              src={`http://localhost:1337${item.image}`}
              style={{ maxWidth: "100%" }}
              className="card-img-top "
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">{item.description}</p>
              <div className="input-group-prepend">
                <select
                  className="form-select form-control"
                  aria-label="Default select example"
                  onChange={(e) => {
                    e.preventDefault();
                    setSelectAmount(e.target.value);
                  }}
                >
                  <option value={0}>請選擇數量</option>
                  {options}
                </select>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-sm mx-1"
                onClick={(e) => {
                  e.preventDefault();
                  const data = { ...item, amount: parseInt(selectAmount) };
                  dispatch(addToCart(data));
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
