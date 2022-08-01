import React from "react";
import { Link } from "react-router-dom";

export default function Invoice() {
  return (
    <section class="container my-lg-6">
      <div class="row">
        <div class="col-lg-8">
          <div class="negative-row-margin mx-lg-0">
            <div class="p-5 bg-primary text-primary-lighter">
              <div class="form-row mb-5">
                <div class="col-6">
                  <h1 class="text-primary-lighter">發票</h1>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="process-steps w-100">
                    <div class="step-circle completed material-icons">
                      <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="step-circle completed material-icons">
                      <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="step-circle material-icons active"></div>
                  </div>
                </div>
              </div>

              <nav class="nav nav-pills nav-fill nav-dark mb-5">
                <a class="nav-item nav-link py-3 h4 active" href="#">
                  電子發票
                </a>
                <a class="nav-item nav-link py-3 h4" href="#">
                  郵寄發票
                </a>
              </nav>

              <div class="form-group">
                <label class="h4" for="email">
                  電子郵件信箱
                </label>
                <input
                  type="email"
                  class="form-control form-control-lg bg-primary-lighter"
                  id="email"
                  placeholder="example@email.com"
                />
              </div>
              <div class="form-group">
                <label class="h4" for="vat-number">
                  統一編號（選填）
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg bg-primary-lighter"
                  id="vat-number"
                  placeholder="12345678"
                />
              </div>
            </div>
          </div>

          <div class="negative-row-margin mx-lg-0">
            <Link
              class="btn btn-accent btn-block btn-lg py-3 text-primary"
              to={"/cart/success"}
            >
              下一步
            </Link>
          </div>
        </div>

        <div class="col-lg-4 d-none d-lg-block">
          <div class="card border-primary-lighter mb-4">
            <h2 class="card-header text-primary-light text-center bg-primary-lighter border-primary-lighter">
              訂單摘要
            </h2>
            <div class="card-body text-primary-light">
              <div class="d-flex justify-content-between mb-2">
                <span>小計</span>
                <span>NT$ 2,700</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span>運費</span>
                <span>NT$ 300</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="h5">總計</span>
                <span class="h5">NT$ 3000</span>
              </div>
            </div>
          </div>

          <div class="card border-primary-lighter">
            <h2 class="card-header text-primary-light text-center bg-primary-lighter border-primary-lighter">
              購物清單
            </h2>
            <div class="card-body carts">
              <div class="d-flex">
                <div
                  class="cart-image cart-image-sm mr-3"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce7267675921fc7e41b5610f49750a40&auto=format&fit=crop&w=685&q=80)`,
                  }}
                ></div>
                <div class="d-flex align-items-center">
                  <div class="flex-fill mr-lg-4 text-primary-light">
                    <span class="h5">抹茶馬卡龍 (2)</span>
                    <br />
                    <span>NT$ 450</span>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-3">
                <div
                  class="cart-image cart-image-sm mr-3"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce7267675921fc7e41b5610f49750a40&auto=format&fit=crop&w=685&q=80)`,
                  }}
                ></div>
                <div class="d-flex align-items-center">
                  <div class="flex-fill mr-lg-4 text-primary-light">
                    <span class="h5">抹茶馬卡龍 (2)</span>
                    <br />
                    <span>NT$ 450</span>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-3">
                <div
                  class="cart-image cart-image-sm mr-3"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce7267675921fc7e41b5610f49750a40&auto=format&fit=crop&w=685&q=80)`,
                  }}
                ></div>
                <div class="d-flex align-items-center">
                  <div class="flex-fill mr-lg-4 text-primary-light">
                    <span class="h5">抹茶馬卡龍 (2)</span>
                    <br />
                    <span>NT$ 450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
