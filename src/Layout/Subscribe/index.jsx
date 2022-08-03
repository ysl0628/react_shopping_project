import React from "react";

export default function Subscribe() {
  return (
    <section className="py-5 bg-primary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 d-flex align-items-center justify-content-center justify-content-md-start mb-4 mb-md-0">
            <img
              src={require("../../assets/images/logo-light.svg").default}
              width="40"
              height="40"
              alt=""
            />
            <span className="mx-3 text-white h4 mb-0">訂閱你我的甜蜜郵件</span>
          </div>
          <div className="col-md-5">
            <div className="form-square form-square-withicon d-flex justify-content-between">
              <label
                htmlFor="subscription"
                className="material-icons form-square-icon-left"
              >
                <i className="material-icons fa-solid fa-envelope"></i>
              </label>
              <input
                type="email"
                id="subscription"
                className="form-input w-100"
              />
              <button className="btn btn-accent btn-lg d-flex align-items-center">
                <i className="material-icons fa-solid fa-circle-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
