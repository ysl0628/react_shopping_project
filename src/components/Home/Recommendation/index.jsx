import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/reducers/cartSlice";
import { serverUrl } from "../../../utlis/config";

export default function Recommendation({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="col-md-4">
      <div className="item-card mb-4">
        <div
          className="item-image"
          style={{
            backgroundImage: `url(${serverUrl}${item.image})`,
          }}
        >
          <div className="item-tag">本日精選</div>
          <div className="item-stared-icon">
            <label className="ui-checked-display">
              <input type="checkbox" className="ui-checkbox" />
              <i
                className="fa-solid fa-heart ui-show"
                style={{ color: "red", fontSize: "1.3rem" }}
              ></i>
              <i
                className="fa-solid fa-heart text-primary-lighter ui-hidden"
                style={{ fontSize: "1.3rem" }}
              ></i>
            </label>
          </div>
        </div>
        <div className="item-body d-flex text-center">
          <div className="item-name col">{item.title}</div>
          <strong className="item-price col">NT$ {item.price}</strong>
        </div>
        <button
          className="btn-lg btn-primary-lighter btn btn-block"
          onClick={() => {
            dispatch(addToCart({ ...item, amount: 1 }));
            alert("成功加入購物車中");
          }}
        >
          加入購物車
        </button>
      </div>
    </div>
  );
}
