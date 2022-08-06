import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useValidation from "../../../hooks/useValidation";
import OrderList from "../OderList";
import Summary from "../Summary";

let optionMonth = [];
for (let i = 1; i < 9; i++) {
  optionMonth.push(
    <option key={i} value={i}>
      {"0" + i}
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

const creditRule = /^\d{4}\s\d{4}\s\d{4}\s\d{4}\s$/;
const cscRule = /^\d{4}$/;

const isCardFormat = (value) => creditRule.test(value);
const isCscFormat = (value) => cscRule.test(value);
const isNotEmpty = (value) => value.trim() !== "";

export default function Payment() {
  const [cardNum, setCardNum] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/cart/invoice");
  };

  const {
    value: card,
    isValid: cardIsValid,
    isError: cardError,
    onChangeValue: onChangeCard,
    onBlurValue: onBlurCard,
  } = useValidation(isCardFormat);

  const formats = (e) => {
    console.log(e.target.value);
    if (e.key) {
      e.key = card.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
    }
    setCardNum(e.key);
    console.log(e.key);
  };
  console.log(cardNum);
  return (
    <section className="container my-lg-6">
      <div className="row form-group needs-validation" onSubmit={handleSubmit}>
        <form className="col-lg-8">
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
                <div className="input-group input-group-lg mb-3">
                  <input
                    type="text"
                    className="form-control bg-primary-lighter border-right-0"
                    id="credit"
                    placeholder="9012 3456 7890 1234"
                    onChange={onChangeCard}
                    onBlur={onBlurCard}
                    onKeyDown={(e) => formats(e)}
                    maxLength={"19"}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text material-icons bg-primary-lighter text-primary">
                      <i className="fa-solid fa-credit-card"></i>
                    </span>
                  </div>
                </div>
              </div>
              <label className="h4" htmlFor="cardname">
                持卡人姓名
              </label>
              <div className="form-row">
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-primary-lighter"
                      id="cardname"
                      placeholder="王"
                      required
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <input
                      required
                      type="text"
                      className="form-control form-control-lg bg-primary-lighter"
                      id="cardname-2"
                      placeholder="小明"
                    />
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
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
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
                      type="text"
                      className="form-control form-control-lg bg-primary-lighter"
                      id="cvv2"
                      placeholder="123"
                      required
                    />
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
            {/* <Link
              className="btn btn-accent btn-block btn-lg py-3 text-primary"
              to={"/cart/invoice"}
            >
              下一步
            </Link> */}
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
