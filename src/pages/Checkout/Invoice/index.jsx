import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "../../../components/Checkout/OderList";
import Summary from "../../../components/Checkout/Summary";
import useInvoiceValidation from "./useInvoiceValidation";
import { onInvoiceInput } from "../../../store/reducers/orderSlice";
import useCart from "../../../hooks/useCart";
import Confirm from "./Confirm";

const isShowErrorBorder = (isError) => (isError ? "border border-danger" : "");

export default function Invoice() {
  const [showConfirm, setShowConfirm] = useState(false);
  const dispatch = useDispatch();
  const { totalPrice: total } = useCart();
  const deliveryFee = total > 500 ? 0 : 100;

  const {
    email,
    emailIsError,
    onChangeEmail,
    onBlurEmail,
    taxNumber,
    taxNumberIsError,
    onChangeTaxNumber,
    onBlurTaxNumber,
    getIsAllValid,
  } = useInvoiceValidation();

  const onClose = () => {
    setShowConfirm((pre) => !pre);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!getIsAllValid()) return;
    dispatch(
      onInvoiceInput({ taxNumber, email, totalPrice: total + deliveryFee })
    );
    setShowConfirm((pre) => !pre);
  };

  return (
    <section className="container my-lg-6">
      {showConfirm && (
        <Confirm onClose={onClose} setShowConfirm={setShowConfirm} />
      )}
      <div className="row form-group needs-validation" onSubmit={handleSubmit}>
        <form className="col-lg-8">
          <div className="negative-row-margin mx-lg-0">
            <div className="p-5 bg-primary text-primary-lighter">
              <div className="form-row mb-5">
                <div className="col-6">
                  <h1 className="text-primary-lighter">發票</h1>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <div className="process-steps w-100">
                    <div className="step-circle completed material-icons">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="step-circle completed material-icons">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="step-circle material-icons active"></div>
                  </div>
                </div>
              </div>

              <nav className="nav nav-pills nav-fill nav-dark mb-5">
                <a className="nav-item nav-link py-3 h4 active" href="#!">
                  電子發票
                </a>
              </nav>

              <div className="form-group">
                <label className="h4" htmfor="email">
                  電子郵件信箱
                </label>
                <input
                  type="email"
                  className={
                    "form-control form-control-lg bg-primary-lighter" +
                    isShowErrorBorder(emailIsError)
                  }
                  id="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={onChangeEmail}
                  onBlur={onBlurEmail}
                />
                {emailIsError && (
                  <div style={{ color: "#F17C67" }}>電子信箱格式錯誤</div>
                )}
              </div>
              <div className="form-group">
                <label className="h4" htmfor="vat-number">
                  統一編號（選填）
                </label>
                <input
                  type="text"
                  className={
                    "form-control form-control-lg bg-primary-lighter" +
                    isShowErrorBorder(taxNumberIsError)
                  }
                  id="vat-number"
                  placeholder="12345678"
                  value={taxNumber}
                  onChange={onChangeTaxNumber}
                  onBlur={onBlurTaxNumber}
                />
                {taxNumberIsError && (
                  <div style={{ color: "#F17C67" }}>統一編號格式錯誤</div>
                )}
              </div>
            </div>
          </div>

          <div className="negative-row-margin mx-lg-0">
            <button
              className="btn btn-accent btn-block btn-lg py-3 text-primary"
              type="submit"
              disabled={!getIsAllValid}
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
