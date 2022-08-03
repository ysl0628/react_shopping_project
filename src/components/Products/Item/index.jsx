import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/reducers/cartSlice";
import InfoModal from "./Modal/InfoModal";

export default function Item({ item }) {
  // const [modal, setModal] = useState(false);
  // const Toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  // const stateData = useSelector((state) => state.cart.products);
  // const [currentItem, setCurrentItem] = useState();
  // useEffect(() => {
  //   const test = stateData.filter((data) => data.id === item.id);
  //   setCurrentItem(test);
  // }, [item.id, stateData]);
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
            href="#"
            className="btn-lg btn-primary-lighter btn btn-block col"
          >
            加入購物車
          </button>
          {/* <!-- Button trigger modal --> */}
          {/* <button
            onClick={() => Toggle()}
            type="button"
            className="btn btn-primary"
          >
            Launch demo modal
          </button> */}
          <InfoModal />
          {/* <Modal show={modal} title="My Modal" close={Toggle}>
            This is Modal content
          </Modal> */}
        </div>
      </div>
    </div>
  );
}
