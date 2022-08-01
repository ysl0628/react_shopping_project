import React from "react";

export default function HomeItem({ item }) {
  return (
    <div className="col-md-4">
      <div className="item-card mb-4">
        <div
          className="item-image"
          style={{
            backgroundImage: `url(http://localhost:1337${item.image})`,
          }}
        >
          <div className="item-tag">本日精選</div>
          <div className="item-stared-icon">
            <label className="ui-checked-display">
              <input type="checkbox" className="ui-checkbox" />
              <i className="material-icons ui-show">favorite</i>
              <i className="material-icons ui-hidden">favorite_border</i>
            </label>
          </div>
        </div>
        <div className="item-body d-flex text-center">
          <div className="item-name col">{item.title}</div>
          <strong className="item-price col">NT$ {item.price}</strong>
        </div>
        <a href="#" className="btn-lg btn-primary-lighter btn btn-block">
          加入購物車
        </a>
      </div>
    </div>
  );
}
