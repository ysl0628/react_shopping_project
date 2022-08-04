import React, { useState } from "react";
import useDataBase from "../../hooks/useDataBase";
import Item from "./Item";
import Pagination from "./Pagination";
import Category from "./Category";
import useCategory from "../../hooks/useCategory";
import { useSelector } from "react-redux";

export default function Products() {
  const [status, setStatus] = useState("all");
  const { products: data, page, success } = useDataBase();
  const { products: dataAll } = useCategory();
  const totalAmount = useSelector((state) => state.page.totalAmount);
  const today = new Date().getTime();
  const aWeek = 1000 * 60 * 60 * 24 * 8;
  const dataSpecial = dataAll.filter((item) => item.special === true);
  const dataBestSales = dataAll.filter((item) => item.sales >= 200);
  const dataNew = dataAll.filter(
    (item) => today - new Date(item.launchAt).getTime() <= aWeek
  );
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
          <Category
            data={dataAll}
            dataSpecial={dataSpecial}
            dataBestSales={dataBestSales}
            dataNew={dataNew}
            onSortSetStatus={setStatus}
          />
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
              {status === "new" &&
                dataNew.map((product) => (
                  <Item key={product.id} item={product} />
                ))}
              {/* <!-- 產品 End --> */}
            </div>
            {totalAmount > 4 && (
              <Pagination pagination={page} isSuccess={success} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
