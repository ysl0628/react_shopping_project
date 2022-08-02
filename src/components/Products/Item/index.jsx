import React, { useEffect, useState } from "react";

export default function Item({ item }) {
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
          <strong className="item-price col">{item.price}</strong>
        </div>
        <a href="#" className="btn-lg btn-primary-lighter btn btn-block">
          加入購物車
        </a>
      </div>
    </div>
  );
}
