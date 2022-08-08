import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderList from "../../../components/Checkout/OderList";
import Summary from "../../../components/Checkout/Summary";
import { onPaymentInput } from "../../../store/reducers/orderSlice";
import "./index.css";
import usePaymentValidation from "./usePaymentValidation";

let optionMonth = [];
for (let i = 1; i <= 12; i++) {
  optionMonth.push(
    <option key={i} value={i}>
      {i < 10 ? "0" + i : i}
    </option>
  );
}
let optionYear = [];
for (let i = 2022; i <= 2040; i++) {
  optionYear.push(
    <option key={i} value={i}>
      {i}
    </option>
  );
}

const isShowErrorBorder = (isError) => (isError ? "border border-danger" : "");

export default function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    card,
    cardError,
    onChangeCard,
    onBlurCard,
    lastname,
    lastnameError,
    onChangeLastname,
    onBlurLastname,
    firstname,
    firstnameError,
    onChangeFirstname,
    onBlurFirstname,
    csc,
    cscError,
    onChangeCsc,
    onBlurCsc,
    getIsAllValid,
  } = usePaymentValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!getIsAllValid()) return;
    dispatch(onPaymentInput(getIsAllValid()));
    navigate("/cart/invoice");
  };

  return (
    <section className="container my-lg-6">
      <div className="row form-group needs-validation">
        <form className="col-lg-8" onSubmit={handleSubmit}>
          <div className="negative-row-margin mx-lg-0">
            <div className="p-5 bg-primary text-primary-lighter">
              <div className="form-row mb-5">
                <div className="col-6">
                  <h1 className="text-primary-lighter">付款資訊</h1>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <div className="process-steps w-100">
                    <div className="step-circle material-icons completed">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="step-circle material-icons active"></div>
                    <div className="step-circle material-icons"></div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="h4" htmlFor="credit">
                  信用卡卡號
                </label>
                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    className={
                      "form-control bg-primary-lighter border-right-0 " +
                      isShowErrorBorder(cardError)
                    }
                    id="credit"
                    placeholder="9012 3456 7890 1234"
                    onInput={(e) => {
                      e.target.value = e.target.value
                        .replace(/\D/gi, "")
                        .replace(/(.{4})/g, "$1 ")
                        .trim();
                    }}
                    value={card}
                    onChange={onChangeCard}
                    onBlur={onBlurCard}
                    maxLength={"19"}
                  />

                  <div className="input-group-append">
                    <span className="input-group-text material-icons bg-primary-lighter text-primary">
                      <i className="fa-solid fa-credit-card"></i>
                    </span>
                  </div>
                </div>
                {cardError && (
                  <div style={{ color: "#F17C67" }}>請輸入正確的信用卡號碼</div>
                )}
              </div>
              <label className="h4" htmlFor="cardname">
                持卡人姓名
              </label>
              <div className="form-row">
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className={
                        "form-control form-control-lg bg-primary-lighter" +
                        isShowErrorBorder(lastnameError)
                      }
                      id="cardname"
                      placeholder="王"
                      onChange={onChangeLastname}
                      onBlur={onBlurLastname}
                      value={lastname}
                    />
                    {lastnameError && (
                      <div style={{ color: "#F17C67" }}>請輸入姓氏</div>
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className={
                        "form-control form-control-lg bg-primary-lighter" +
                        isShowErrorBorder(firstnameError)
                      }
                      id="cardname-2"
                      placeholder="小明"
                      onChange={onChangeFirstname}
                      onBlur={onBlurFirstname}
                      value={firstname}
                    />
                    {firstnameError && (
                      <div style={{ color: "#F17C67" }}>請輸入名字</div>
                    )}
                  </div>
                </div>
              </div>

              <label className="h4" htmlFor="validity-period-month">
                有效期限
              </label>
              <div className="form-row">
                <div className="col-6">
                  <div className="form-group">
                    <select
                      name=""
                      id="validity-period-month"
                      className="form-control form-control-lg bg-primary-lighter"
                    >
                      <option value={0}>月</option>
                      {optionMonth}
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <select
                      name=""
                      id="validity-period-year"
                      className="form-control form-control-lg bg-primary-lighter"
                    >
                      <option value={0}>年</option>
                      {optionYear}
                    </select>
                  </div>
                </div>
              </div>

              <label className="h4" htmlFor="cvv2">
                信用卡安全碼
              </label>
              <div className="form-row">
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="number"
                      className={
                        "form-control form-control-lg bg-primary-lighter" +
                        isShowErrorBorder(cscError)
                      }
                      id="cvv2"
                      placeholder="123"
                      onInput={(e) =>
                        (e.target.value = e.target.value.slice(0, 3))
                      }
                      value={csc}
                      onChange={onChangeCsc}
                      onBlur={onBlurCsc}
                    />
                    {cscError && (
                      <div style={{ color: "#F17C67" }}>請輸入正確安全碼</div>
                    )}
                  </div>
                </div>
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
