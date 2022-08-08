import React, { useState } from "react";
import useDataBase from "../../hooks/useDataBase";
import Item from "../../components/Product/Item";
import Pagination from "../../components/Product/Pagination";
import Category from "../../components/Product/Category";
import useCategory from "../../hooks/useCategory";
import { useSelector } from "react-redux";

export default function Product() {
  const [status, setStatus] = useState("all");
  const { products: data, page, success } = useDataBase();
  const { products: dataAll } = useCategory();
  const totalAmount = useSelector((state) => state.page.totalAmount);
  const cart = useSelector((state) => state.cart.products);
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
              backgroundImage: `url(https://images.pexels.com/photos/4040806/pexels-photo-4040806.jpeg)`,
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
                data.map((product) => (
                  <Item key={product.id} item={product} cart={cart} />
                ))}
              {status === "special" &&
                dataSpecial.map((product) => (
                  <Item key={product.id} item={product} cart={cart} />
                ))}
              {status === "bestSales" &&
                dataBestSales.map((product) => (
                  <Item key={product.id} item={product} cart={cart} />
                ))}
              {status === "new" &&
                dataNew.map((product) => (
                  <Item key={product.id} item={product} cart={cart} />
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
