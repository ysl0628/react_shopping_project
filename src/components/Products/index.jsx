import React, { useEffect, useState } from "react";
import useDataBase from "../../hooks/useDataBase";
import { useGetProductsQuery } from "../../store/api/productsApi";
import Item from "./Item";

export default function Products() {
  const data = useDataBase();
  const date = new Date(data[0].launchAt);
  console.log(date.getDate());
  const dataSpecial = data.filter((item) => item.special === true);
  const dataBestSales = data.filter((item) => item.sales >= 200);
  const [status, setStatus] = useState("all");
  return (
    <>
      <div className="container px-0 px-md-3">
        <header className="header">
          <div
            className="header-main-image bg-cover"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1512484457149-266d165a4eca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=786581a33fd6c9343735655439ce2e5a&auto=format&fit=crop&w=1380&q=80)`,
            }}
          ></div>
          <h1 className="text-hide">
            想吃甜點是不需要理由的
            <img
              src="/images/lg-想吃甜點是不需要理由的.svg"
              width="89"
              className="header-image-context"
              alt=""
            />
          </h1>
        </header>
      </div>

      <section className="container my-6">
        <div className="row">
          <div className="col-md-4 mb-5">
            <h2 className="mb-0 py-3 text-center bg-primary text-white h4">
              甜點類別
            </h2>
            <div className="list-group text-center">
              <button
                onClick={() => setStatus("all")}
                className={`list-group-item list-group-item-action h4 `}
              >
                所有甜點（{data.length}）
              </button>
              <button
                onClick={() => setStatus("special")}
                className="list-group-item list-group-item-action h4"
              >
                本日精選（{dataSpecial.length}）
              </button>
              <button
                onClick={() => setStatus("bestSales")}
                className="list-group-item list-group-item-action h4"
              >
                人氣推薦（{dataBestSales.length}）
              </button>
              <button className="list-group-item list-group-item-action h4">
                新品上市（12）
              </button>
              <button className="list-group-item list-group-item-action h4 disabled">
                絕版品
              </button>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              {/* <!-- 產品 Start --> */}
              {status === "all" &&
                data.map((product) => <Item key={product.id} item={product} />)}
              {status === "special" &&
                dataSpecial.map((product) => (
                  <Item key={product.id} item={product} />
                ))}
              {status === "bestSales" &&
                dataBestSales.map((product) => (
                  <Item key={product.id} item={product} />
                ))}
              {/* <!-- 產品 End --> */}
            </div>

            <nav className="mt-5" aria-label="Page navigation">
              <ul className="pagination justify-content-center pagination-lg">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
