import React from "react";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <section class="container my-lg-6">
      <div class="row">
        <div class="col-lg-8">
          <div class="negative-row-margin mx-lg-0">
            <div class="p-5 bg-primary text-primary-lighter">
              <div class="form-row mb-5">
                <div class="col-6">
                  <h1 class="text-primary-lighter">付款資訊</h1>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="process-steps w-100">
                    <div class="step-circle material-icons completed">
                      <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="step-circle material-icons active"></div>
                    <div class="step-circle material-icons"></div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="h4" for="credit">
                  信用卡卡號
                </label>
                <div class="input-group input-group-lg mb-3">
                  <input
                    type="text"
                    class="form-control bg-primary-lighter border-right-0"
                    id="credit"
                    placeholder="9012-3456-7890-1234"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text material-icons bg-primary-lighter text-primary">
                      <i class="fa-solid fa-credit-card"></i>
                    </span>
                  </div>
                </div>
              </div>
              <label class="h4" for="cardname">
                持卡人姓名
              </label>
              <div class="form-row">
                <div class="col-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-lg bg-primary-lighter"
                      id="cardname"
                      placeholder="王"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-lg bg-primary-lighter"
                      id="cardname-2"
                      placeholder="小明"
                    />
                  </div>
                </div>
              </div>

              <label class="h4" for="validity-period-month">
                有效期限
              </label>
              <div class="form-row">
                <div class="col-6">
                  <div class="form-group">
                    <select
                      name=""
                      id="validity-period-month"
                      class="form-control form-control-lg bg-primary-lighter"
                    >
                      <option value="">月</option>
                    </select>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <select
                      name=""
                      id="validity-period-year"
                      class="form-control form-control-lg bg-primary-lighter"
                    >
                      <option value="">年</option>
                    </select>
                  </div>
                </div>
              </div>

              <label class="h4" for="cvv2">
                信用卡安全碼
              </label>
              <div class="form-row">
                <div class="col-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-lg bg-primary-lighter"
                      id="cvv2"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="negative-row-margin mx-lg-0">
            <Link
              class="btn btn-accent btn-block btn-lg py-3 text-primary"
              to={"/cart/invoice"}
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
