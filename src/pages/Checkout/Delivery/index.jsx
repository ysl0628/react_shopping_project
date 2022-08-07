import React from "react";
import { useNavigate } from "react-router-dom";
import useValidation from "../../../hooks/useValidation";
import OrderList from "../../../components/Checkout/OderList";
import Summary from "../../../components/Checkout/Summary";

const phoneRule = /^09\d{8}$/;

const isNotEmpty = (value) => value.trim() !== "";
const isPhoneFormat = (value) => phoneRule.test(value);

export default function Delivery() {
  const navigate = useNavigate();

  const {
    value: lastname,
    isValid: lastnameIsValid,
    isError: lastnameError,
    onChangeValue: onChangeLastname,
    onBlurValue: onBlurLastname,
  } = useValidation(isNotEmpty);
  const {
    value: firstname,
    isValid: firstnameIsValid,
    isError: firstnameError,
    onChangeValue: onChangeFirstname,
    onBlurValue: onBlurFirstname,
  } = useValidation(isNotEmpty);
  const {
    value: address,
    isValid: addressIsValid,
    isError: addressError,
    onChangeValue: onChangeAddress,
    onBlurValue: onBlurAddress,
  } = useValidation(isNotEmpty);
  const {
    value: phone,
    isValid: phoneIsValid,
    isError: phoneError,
    onChangeValue: onChangePhone,
    onBlurValue: onBlurPhone,
  } = useValidation(isPhoneFormat);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !lastnameIsValid ||
      !firstnameIsValid ||
      !addressIsValid ||
      !phoneIsValid
    )
      return;
    navigate("/cart/payment");
  };

  const lastnameInputClasses = lastnameError ? "border border-danger" : "";
  const firstnameInputClasses = firstnameError ? "border border-danger" : "";
  const addressInputClasses = addressError ? "border border-danger" : "";
  const phoneInputClasses = phoneError ? "border border-danger" : "";

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
                      type="text"
                      className={
                        "form-control form-control-lg bg-primary-lighter" +
                        lastnameInputClasses
                      }
                      id="lastname"
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
                    <label className="h4" htmlFor="firstname">
                      名字
                    </label>
                    <input
                      type="text"
                      className={
                        "form-control form-control-lg bg-primary-lighter" +
                        firstnameInputClasses
                      }
                      id="firstname"
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

              <div className="form-group">
                <label className="h4" htmlFor="tel">
                  手機號碼
                </label>
                <input
                  type="tel"
                  className={
                    "form-control form-control-lg bg-primary-lighter" +
                    phoneInputClasses
                  }
                  id="tel"
                  placeholder="0912345678"
                  onChange={onChangePhone}
                  onBlur={onBlurPhone}
                  value={phone}
                />
                {phoneError && (
                  <div style={{ color: "#F17C67" }}>手機號碼格式錯誤</div>
                )}
              </div>

              <label className="h4" htmlFor="city">
                地址
              </label>
              <div className="form-row">
                <div className="col-6">
                  <div className="form-group">
                    <select
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
                      name=""
                      id="region"
                      className="form-control form-control-lg bg-primary-lighter"
                    >
                      <option value="新興區">新興區</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="input-group mb-0 d-flex flex-column">
                <input
                  type="text"
                  className={
                    "form-control form-control-lg bg-primary-lighter" +
                    addressInputClasses
                  }
                  style={{ width: "100%" }}
                  id="address"
                  placeholder="幸福路 520 號"
                  onChange={onChangeAddress}
                  onBlur={onBlurAddress}
                  value={address}
                />
                {addressError && (
                  <div style={{ color: "#F17C67" }}>請輸入正確的地址</div>
                )}
              </div>
            </div>
          </div>

          <div className="negative-row-margin mx-lg-0">
            <button
              className="btn btn-accent btn-block btn-lg py-3 text-primary"
              type="submit"
              disabled={
                !lastnameIsValid ||
                !firstnameIsValid ||
                !addressIsValid ||
                !phoneIsValid
              }
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
