import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAmount } from "../../../store/reducers/pageSlice";

export default function Category({
  data,
  dataSpecial,
  dataBestSales,
  dataNew,
  onSortSetStatus,
}) {
  const dispatch = useDispatch();
  return (
    <div className="col-md-4 mb-5">
      <h2 className="mb-0 py-3 text-center bg-primary text-white h4">
        甜點類別
      </h2>
      <div className="list-group text-center">
        <button
          onClick={() => {
            onSortSetStatus("all");
            dispatch(setAmount(data.length));
          }}
          className={`list-group-item list-group-item-action h4 `}
        >
          所有甜點（{data.length}）
        </button>
        <button
          onClick={() => {
            onSortSetStatus("special");
            dispatch(setAmount(dataSpecial.length));
          }}
          className="list-group-item list-group-item-action h4"
        >
          本日精選（{dataSpecial.length}）
        </button>
        <button
          onClick={() => {
            onSortSetStatus("bestSales");
            dispatch(setAmount(dataBestSales.length));
          }}
          className="list-group-item list-group-item-action h4"
        >
          人氣推薦（{dataBestSales.length}）
        </button>
        <button
          onClick={() => {
            onSortSetStatus("new");
            dispatch(setAmount(dataNew.length));
          }}
          className="list-group-item list-group-item-action h4"
        >
          新品上市（{dataNew.length}）
        </button>
      </div>
    </div>
  );
}
