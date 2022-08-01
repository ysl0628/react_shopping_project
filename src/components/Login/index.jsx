import React from "react";

export default function Login() {
  return (
    <section className="container px-0 px-md-3 my-md-6">
      <div className="row no-gutters justify-content-center">
        <div className="col-md-10">
          <div className="p-5 bg-primary d-md-none">
            <h1 className="mt-2 mb-2 text-center text-white">會員登入</h1>
          </div>
          <div className="row no-gutters flex-md-row-reverse">
            <div className="col-md-6 py-md-3">
              <div className="bg-primary-lighter p-5">
                <h2 className="h4 text-center text-primary-light mb-5 d-none d-md-block">
                  —— 連結社群帳號 ——
                </h2>
                <div className="row no-gutters">
                  <div className="col-4 col-md-12 mb-md-4">
                    <button className="btn btn-brand-light btn-block btn-lg py-3 h-100">
                      <img
                        src={
                          require("../../assets/images/ic-facebook-logotype.svg")
                            .default
                        }
                        className="img-fluid"
                        width="108"
                        alt=""
                      />
                    </button>
                  </div>
                  <div className="col-4 col-md-12 mb-md-4">
                    <button className="btn btn-brand-light btn-block btn-lg py-3 h-100">
                      <img
                        src={
                          require("../../assets/images/ic-google.svg").default
                        }
                        className="img-fluid"
                        width="94"
                        alt=""
                      />
                    </button>
                  </div>
                  <div className="col-4 col-md-12 mb-md-4">
                    <button className="btn btn-brand-light btn-block btn-lg py-3 h-100">
                      <img
                        src={
                          require("../../assets/images/ic-yahoo.svg").default
                        }
                        className="img-fluid"
                        width="97"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-5 bg-primary d-md-block d-none">
                <h1 className="mt-2 mb-2 text-center text-white">會員登入</h1>
              </div>
              <div className="p-5 pt-md-0 bg-primary">
                <div className="form-square form-square-withicon d-flex justify-content-between mb-3">
                  <label
                    for="username"
                    className="material-icons form-square-icon-left"
                  >
                    <i class="fa-solid fa-user"></i>
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-input w-100"
                    placeholder="電子信箱/手機號碼"
                  />
                  {/* <!-- 注意：電子信箱/手機號碼 所以 type 要用 text --> */}
                </div>
                <div className="form-square form-square-withicon d-flex justify-content-between mb-3">
                  <label
                    for="password"
                    className="material-icons form-square-icon-left"
                  >
                    <i class="fa-solid fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-input w-100"
                    placeholder="請輸入使用者密碼"
                  />
                  {/* <!-- 注意：電子信箱/手機號碼 所以 type 要用 text --> */}
                </div>
                <div className="custom-control custom-checkbox mb-0">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="rememberme"
                  />
                  <label
                    className="custom-control-label text-white"
                    for="rememberme"
                  >
                    記住我
                  </label>
                </div>
              </div>
              <button className="btn btn-accent btn-block rounded-0 btn-lg py-3 text-primary">
                登入帳號
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
