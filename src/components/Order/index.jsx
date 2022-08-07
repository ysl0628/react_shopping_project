import React from "react";
import ProductItem from "./ProductItem";

export default function Order({ order }) {
  const date = new Date(order.createdAt).getTime();
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate();
  return (
    <div className="card m-5 p-3">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">訂單編號</th>
              <th scope="col">日期</th>
              <th scope="col">訂單狀態</th>
              <th scope="col">配送地址</th>
              <th scope="col">統一編號</th>
              <th scope="col">總金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{order.id}</th>
              <td>{year + " / " + month + " / " + day}</td>
              <td>{order.status ? "已付款，配送中" : "尚未付款"}</td>
              <td>{order.address}</td>
              <td>{order.tax_number}</td>
              <td>NT$ {order.total_price}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target={`#collapseExample_${order.id}`}
        >
          查看明細
        </button>
      </p>
      <div>
        <div className="collapse" id={`collapseExample_${order.id}`}>
          <div className="card card-body">
            {order.products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
