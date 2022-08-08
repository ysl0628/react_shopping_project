import React from "react";
import { useNavigate } from "react-router-dom";
import OrderList from "../../../components/Checkout/OderList";
import Summary from "../../../components/Checkout/Summary";
import { useDispatch } from "react-redux";
import { onDeliveryInput } from "../../../store/reducers/orderSlice";
import useDeliveryValidation from "./useDeliveryValidation";

const isShowErrorBorder = (isError) => (isError ? "border border-danger" : "");

export default function Delivery() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    address,
    addressError,
    onChangeAddress,
    onBlurAddress,
    city,
    onChangeCity,
    onBlurCity,
    cityError,
    region,
    onChangeRegion,
    onBlurRegion,
    regionError,
    lastname,
    lastnameError,
    onChangeLastname,
    onBlurLastname,
    firstname,
    firstnameError,
    onChangeFirstname,
    onBlurFirstname,
    phone,
    phoneError,
    onChangePhone,
    onBlurPhone,
    getIsAllValid,
  } = useDeliveryValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!getIsAllValid()) return;
    dispatch(onDeliveryInput({ phone, address: city + region + address }));
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
                      type="text"
                      className={
                        "form-control form-control-lg bg-primary-lighter" +
                        isShowErrorBorder(lastnameError)
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
                        isShowErrorBorder(firstnameError)
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
                    isShowErrorBorder(phoneError)
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
                      value={city}
                      onChange={onChangeCity}
                      onBlur={onBlurCity}
                    >
                      <option value="0">選擇城市</option>
                      <option value="高雄市">高雄市</option>
                    </select>
                    {cityError && (
                      <div style={{ color: "#F17C67" }}>請選擇城市</div>
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <select
                      name=""
                      id="region"
                      className="form-control form-control-lg bg-primary-lighter"
                      value={region}
                      onChange={onChangeRegion}
                      onBlur={onBlurRegion}
                    >
                      <option value="0">選擇行政區</option>
                      <option value="新興區">新興區</option>
                    </select>
                    {regionError && (
                      <div style={{ color: "#F17C67" }}>請選擇行政區</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-group mb-0 d-flex flex-column">
                <input
                  type="text"
                  className={
                    "form-control form-control-lg bg-primary-lighter" +
                    isShowErrorBorder(addressError)
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
