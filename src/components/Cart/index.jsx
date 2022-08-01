import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <section className="container my-md-5">
      <div className="row carts">
        <div className="col-md-8">
          <h1 className="bg-primary-lighter h4 mb-0 py-4 text-center">
            您的購物車
          </h1>
          <div className="cart-row d-flex flex-column flex-md-row py-3">
            <div className="d-flex align-items-center flex-grow-1 mr-md-3">
              <div className="my-4 mr-4 flex-grow-1 flex-md-grow-0">
                <div
                  className="cart-image"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce7267675921fc7e41b5610f49750a40&auto=format&fit=crop&w=685&q=80)`,
                  }}
                ></div>
              </div>
              <div className="d-flex align-items-md-center flex-column flex-md-row flex-md-grow-1">
                <div className="flex-fill mr-md-4">
                  <span className="h5">抹茶馬卡龍</span>
                  <br />
                  <span>NT$ 450</span>
                </div>
                <div className="cart-control ml-md-auto mt-3 mt-md-0">
                  <div className="input-group carts-input-group">
                    <div className="input-group-prepend">
                      <button
                        type="button"
                        className="btn btn-brand-light text-primary-light material-icons text-base-size"
                      >
                        <i className="fa-solid fa-circle-minus"></i>
                      </button>
                    </div>
                    <input type="text" className="form-control" value="2" />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn btn-brand-light text-primary-light material-icons text-base-size"
                      >
                        <i className="fa-solid fa-circle-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="price ml-md-auto align-items-center py-3 justify-content-end d-flex flex-md-row-reverse">
              <a href="#" className="btn d-none d-md-block">
                <span className="material-icons">
                  <i className="fa-solid fa-trash-can"></i>
                </span>
              </a>
              <span className="h5 mb-0 mr-md-3">NT$ 900</span>
            </div>
          </div>
          <div className="cart-row d-flex flex-column flex-md-row py-3">
            <div className="d-flex align-items-center flex-grow-1 mr-md-3">
              <div className="my-4 mr-4 flex-grow-1 flex-md-grow-0">
                <div
                  className="cart-image"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce7267675921fc7e41b5610f49750a40&auto=format&fit=crop&w=685&q=80)`,
                  }}
                ></div>
              </div>
              <div className="d-flex align-items-md-center flex-column flex-md-row flex-md-grow-1">
                <div className="flex-fill mr-md-4">
                  <span className="h5">抹茶馬卡龍</span>
                  <br />
                  <span>NT$ 450</span>
                </div>
                <div className="cart-control ml-md-auto mt-3 mt-md-0">
                  <div className="input-group carts-input-group">
                    <div className="input-group-prepend">
                      <button
                        type="button"
                        className="btn btn-brand-light text-primary-light material-icons text-base-size"
                      >
                        <i className="fa-solid fa-circle-minus"></i>
                      </button>
                    </div>
                    <input type="text" className="form-control" value="2" />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn btn-brand-light text-primary-light material-icons text-base-size"
                      >
                        <i className="fa-solid fa-circle-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="price ml-md-auto align-items-center py-3 justify-content-end d-flex flex-md-row-reverse">
              <a href="#" className="btn d-none d-md-block">
                <span className="material-icons">
                  <i className="fa-solid fa-trash-can"></i>
                </span>
              </a>
              <span className="h5 mb-0 mr-md-3">NT$ 900</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-md-3 py-3 pt-0 cart-msg-box">
            <h2 className="text-center cart-msg-title h4 py-3">訂單摘要</h2>
            <hr className="border-white mt-0" />
            <div className="d-flex justify-content-between mb-2">
              <span>小計</span>
              <span>NT$ 2,700</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>運費</span>
              <span>NT$ 300</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="h5">總計</span>
              <span className="h5">NT$ 3000</span>
            </div>
          </div>
          <div className="negative-row-margin mx-md-0">
            <Link
              className="btn btn-accent btn-block btn-lg py-3 text-primary"
              to={"delivery"}
            >
              結帳
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
