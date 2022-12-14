import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPage, setPage, subPage } from "../../../store/reducers/pageSlice";

export default function Pagination({ data, pageSize }) {
  const dispatch = useDispatch();
  const pageInfo = useSelector((state) => state.page);
  const totalPages = Math.ceil(data.length / pageSize);
  const pageNumbers = [];
  if (!data) return;
  for (let n = 1; n <= totalPages; n++) {
    pageNumbers.push(n);
  }
  return (
    <nav className="mt-5" aria-label="Page navigation">
      <ul className="pagination justify-content-center pagination-lg">
        <li className="page-item">
          <button
            onClick={() => {
              dispatch(subPage(pageInfo.currentPage - 1));
            }}
            className="page-link"
            href="#"
            aria-label="Previous"
            disabled={pageInfo.currentPage === 1}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        {pageNumbers.map((number, index) => (
          <li
            //判斷
            className={`page-item ${
              number === pageInfo.activeNumber ? "active" : ""
            }`}
            key={index + 1}
          >
            <button
              onClick={() => {
                dispatch(setPage(number));
              }}
              className="page-link"
              href="#"
              value={number}
              disabled={pageInfo.currentPage === number}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={() => {
              dispatch(addPage(pageInfo.currentPage + 1));
            }}
            className="page-link"
            href="#"
            aria-label="Next"
            disabled={pageInfo.currentPage === totalPages}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
