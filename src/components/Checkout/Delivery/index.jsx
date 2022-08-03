import React from "react";
import { useNavigate } from "react-router-dom";
import OrderList from "../OderList";
import Summary from "../Summary";

export default function Delivery() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/cart/payment");
  };
  return (
    <section className="container my-lg-6">
      <div className="row ">
        <form className="col-lg-8 needs-validation" onSubmit={handleSubmit}>
          <div className="negative-row-margin mx-lg-0">
            <div className="p-5 bg-primary text-primary-lighter">
              <div className="form-row mb-5">
                <div className="col-6">
                  <h1 className="text-primary-lighter">運送</h1>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <div className="process-steps w-100">
                    <div className="step-circle material-icons active"></div>
                    <div className="step-circle material-icons"></div>
                    <div className="step-circle material-icons"></div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-6">
                  <div className="form-group">
                    <label className="h4" htmlFor="lastname">
                      姓氏
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control form-control-lg bg-primary-lighter"
                      id="lastname"
                      placeholder="王"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="h4" htmlFor="firstname">
                      名字
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control form-control-lg bg-primary-lighter"
                      id="firstname"
                      placeholder="小明"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="h4" htmlFor="tel">
                  電話
                </label>
                <input
                  required
                  type="tel"
                  className="form-control form-control-lg bg-primary-lighter"
                  id="tel"
                  placeholder="0912-345-678"
                />
              </div>

              <label className="h4" htmlFor="city">
                地址
              </label>
              <div className="form-row">
                <div className="col-6">
                  <div className="form-group">
                    <select
                      required
                      name=""
                      id="city"
                      className="form-control form-control-lg bg-primary-lighter"
                    >
                      <option value="高雄市">高雄市</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <select
                      required
                      name=""
                      id="region"
                      className="form-control form-control-lg bg-primary-lighter"
                    >
                      <option value="新興區">新興區</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group mb-0">
                <input
                  required
                  type="text"
                  className="form-control form-control-lg bg-primary-lighter"
                  id="address"
                  placeholder="幸福路 520 號"
                />
              </div>
            </div>
          </div>

          <div className="negative-row-margin mx-lg-0">
            <button
              className="btn btn-accent btn-block btn-lg py-3 text-primary"
              type="submit"
            >
              下一步
            </button>
          </div>
        </form>

        <div className="col-lg-4 d-none d-lg-block">
          <Summary />
          <OrderList />
        </div>
      </div>
    </section>
  );
}
