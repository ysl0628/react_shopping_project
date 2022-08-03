import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header2() {
  const total = useSelector((state) => state.cart.totalAmount);
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white">
      <div className="container">
        <button
          className="navbar-toggler d-md-none d-flex align-items-center"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars material-icons"></i>
        </button>
        <Link className="navbar-brand" to={"home"}>
          <img
            src={require("../../assets/images/logo-all-dark.svg").default}
            width="220"
            height="40"
            alt=""
            className="d-none d-md-inline-block"
          />
          <img
            src={require("../../assets/images/logotype-sm-dark.svg").default}
            width="114"
            height="18"
            alt=""
            className="d-inline-block d-md-none"
          />
        </Link>

        <Link
          className="nav-link d-flex align-items-center order-md-1"
          to={"cart"}
        >
          <i className="material-icons fa-solid fa-cart-shopping position-relative">
            {total !== 0 && (
              <span className="position-absolute top-0 start-200 translate-middle badge rounded-pill bg-danger text-light">
                {total}
              </span>
            )}
          </i>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item <% if (current === 'index') { %>active<%} %>">
              <Link className="nav-link" to={"home"}>
                首頁
              </Link>
            </li>
            <li className="nav-item <% if (current === 'products') { %>active<%} %>">
              <Link className="nav-link" to={"products"}>
                甜點
              </Link>
            </li>
            <li className="nav-item <% if (current === 'register') { %>active<%} %>">
              <Link className="nav-link" to={"login"}>
                登入
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
