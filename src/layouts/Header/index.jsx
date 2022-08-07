import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/reducers/authSlice";

export default function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalAmount } = useCart();

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
            {totalAmount !== 0 && (
              <span className="position-absolute top-0 start-200 translate-middle badge rounded-pill bg-danger text-light">
                {totalAmount}
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
              {auth.isLogined ? (
                <Link className="nav-link" to={"user"}>
                  {auth.user.username}
                </Link>
              ) : (
                <Link className="nav-link" to={"login"}>
                  登入
                </Link>
              )}
            </li>
            {auth.isLogined && (
              <li className="nav-item <% if (current === 'register') { %>active<%} %>">
                <Link
                  to={"/"}
                  className="nav-link"
                  onClick={() => {
                    if (window.confirm("您確定要登出嗎?")) dispatch(logout());
                  }}
                >
                  登出
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
