import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div>
      <div class="container mb-md-6">
        <header class="header">
          <div
            class="header-main-image bg-cover row justify-content-center align-items-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c5a2cf31c693f5c15fb08135bf1adf2&auto=format&fit=crop&w=1347&q=80)`,
            }}
          >
            <div class="col-md-4">
              <div class="process-steps process-steps-dark mb-5 mx-6">
                <div class="step-circle completed material-icons">
                  <i class="fa-solid fa-check"></i>
                </div>
                <div class="step-circle completed material-icons">
                  <i class="fa-solid fa-check"></i>
                </div>
                <div class="step-circle completed material-icons">
                  <i class="fa-solid fa-check"></i>
                </div>
              </div>

              <h1 class="text-hide text-center mb-5">
                付款成功
                <img src="/images/lg-付款成功.svg" width="190" alt="" />
              </h1>
              <Link
                class="btn btn-accent btn-block btn-lg py-3 text-primary d-none d-md-block"
                to={"/products"}
              >
                繼續逛逛
              </Link>
            </div>
          </div>
        </header>
      </div>
      <a
        href="products.html"
        class="btn btn-accent btn-block btn-lg py-3 text-primary d-md-none"
      >
        繼續逛逛
      </a>
    </div>
  );
}
