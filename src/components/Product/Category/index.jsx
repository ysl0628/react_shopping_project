import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCategory from "../../../hooks/useCategory";
import { setStatus } from "../../../store/reducers/categorySlice";
import { setAmount, setPage } from "../../../store/reducers/pageSlice";

export default function Category() {
  const today = new Date().getTime();
  const aWeek = 1000 * 60 * 60 * 24 * 8;
  const { products: dataAll } = useCategory();
  const dataOnSale = dataAll.filter((item) => item.onSale === true);
  const dataSpecial = dataOnSale.filter((item) => item.special === true);
  const dataBestSales = dataOnSale.filter((item) => item.sales >= 200);
  const dataNew = dataOnSale.filter(
    (item) => today - new Date(item.launchAt).getTime() <= aWeek
  );
  const dispatch = useDispatch();

  return (
    <div className="col-md-4 mb-5">
      <h2 className="mb-0 py-3 text-center bg-primary text-white h4">
        甜點類別
      </h2>
      <div className="list-group text-center">
        <button
          onClick={() => {
            dispatch(setPage(1), setAmount(dataOnSale.length));
            dispatch(setStatus({ status: "all", dataSource: dataOnSale }));
          }}
          className={`list-group-item list-group-item-action h4 `}
        >
          所有甜點（{dataOnSale.length}）
        </button>
        <button
          onClick={() => {
            dispatch(setPage(1), setAmount(dataSpecial.length));
            dispatch(setStatus({ status: "special", dataSource: dataSpecial }));
          }}
          className="list-group-item list-group-item-action h4"
        >
          本日精選（{dataSpecial.length}）
        </button>
        <button
          onClick={() => {
            dispatch(setPage(1), setAmount(dataBestSales.length));
            dispatch(
              setStatus({ status: "bestSales", dataSource: dataBestSales })
            );
          }}
          className="list-group-item list-group-item-action h4"
        >
          人氣推薦（{dataBestSales.length}）
        </button>
        <button
          onClick={() => {
            dispatch(setPage(1), setAmount(dataNew.length));
            dispatch(setStatus({ status: "new", dataSource: dataNew }));
          }}
          className="list-group-item list-group-item-action h4"
        >
          新品上市（{dataNew.length}）
        </button>
      </div>
    </div>
  );
}
