import React, { useState } from "react";
import Item from "../../components/Product/Item";
import Pagination from "../../components/Product/Pagination";
import Category from "../../components/Product/Category";
import useCategory from "../../hooks/useCategory";
import { useSelector } from "react-redux";

export default function Product() {
  const today = new Date().getTime();
  const aWeek = 1000 * 60 * 60 * 24 * 8;
  const [status, setStatus] = useState("all");
  const { products: dataAll } = useCategory();
  const { totalAmount, currentPage, pageSize } = useSelector(
    (state) => state.page
  );
  const cart = useSelector((state) => state.cart.products);
  const dataOnSale = dataAll.filter((item) => item.onSale === true);
  const lastDataInPage = currentPage * pageSize;
  const firstDataInPage = lastDataInPage - pageSize;
  const dataToDisplay = dataOnSale.slice(firstDataInPage, lastDataInPage);
  console.log(dataToDisplay);

  const dataSpecial = dataOnSale.filter((item) => item.special === true);
  const dataSpecialDisplay = dataSpecial.slice(firstDataInPage, lastDataInPage);
  const dataBestSales = dataOnSale.filter((item) => item.sales >= 200);
  const dataNew = dataOnSale.filter(
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
            data={dataOnSale}
            dataSpecial={dataSpecial}
            dataBestSales={dataBestSales}
            dataNew={dataNew}
            onSortSetStatus={setStatus}
          />
          <div className="col-md-8">
            <div className="row">
              {/* <!-- 產品 Start --> */}
              {status === "all" &&
                dataToDisplay.map((product) => (
                  <Item key={product.id} item={product} cart={cart} />
                ))}
              {status === "special" &&
                dataSpecialDisplay.map((product) => (
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
              <Pagination data={dataOnSale} pageSize={pageSize} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
