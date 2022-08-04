import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/reducers/cartSlice";
import Modal from "./Modal";

export default function Item({ item, cart }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div className="col-md-6">
      <div className="item-card mb-5">
        <div
          className="item-image"
          style={{
            backgroundImage: `url(http://localhost:1337${item.image})`,
          }}
        ></div>
        <div className="item-body d-flex text-center">
          <div className="item-name col">{item.title}</div>
          <strong className="item-price col">NT$ {item.price}</strong>
        </div>
        <div className="d-flex text-center">
          <button
            onClick={() => {
              dispatch(addToCart(item));
            }}
            className="btn-lg btn-primary-lighter btn btn-block col"
          >
            加入購物車
          </button>
          {/* <!-- Button trigger modal --> */}
          <button
            onClick={() => toggle()}
            type="button"
            className="btn-lg btn btn-primary col"
          >
            查看資訊
          </button>
          {/* <Modal /> */}
          {modal && <Modal setModal={setModal} close={toggle} item={item} />}
        </div>
      </div>
    </div>
  );
}
