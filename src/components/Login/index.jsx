import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../../store/api/authApi";
import { login } from "../../store/reducers/authSlice";

export default function Login() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const usernameInput = useRef();
  const pwdInput = useRef();
  const emailInput = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signIn] = useLoginMutation();
  const [signUp] = useRegisterMutation();

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = usernameInput.current.value;
    const password = pwdInput.current.value;
    if (isLoginPage) {
      try {
        const res = await signIn({
          identifier: username,
          password,
        });
        console.log(res);
        if (res.error) throw Error(res.error);
        dispatch(login({ token: res.data.jwt, user: res.data.user }));
        navigate(-1);
        alert("登入成功");
      } catch (err) {
        alert("登入失敗，請輸入正確的帳號或密碼");
      }
      return;
    }
    const email = emailInput.current.value;
    try {
      const res = await signUp({ username, email, password });
      if (res.error) throw Error(res.error);
      setIsLoginPage(true);
      alert("註冊成功，請重新登入");
    } catch (err) {
      alert("註冊失敗，請輸入正確內容");
    }
  };

  return (
    <section className="container px-0 px-md-3 my-md-6">
      <div className="row no-gutters justify-content-center">
        <div className="col-md-10">
          <div className="p-5 bg-primary d-md-none">
            <h1 className="mt-2 mb-2 text-center text-white">
              {isLoginPage ? "會員登入" : "註冊會員"}
            </h1>
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
                <h1 className="mt-2 mb-2 text-center text-white">
                  {isLoginPage ? "會員登入" : "註冊會員"}
                </h1>
              </div>
              <form onSubmit={onSubmit}>
                <div className="p-5 pt-md-0 bg-primary">
                  {/*  */}
                  <div className="form-square form-square-withicon d-flex justify-content-between mb-3">
                    <label
                      htmfor="username"
                      className="material-icons form-square-icon-left"
                    >
                      <i className="fa-solid fa-user"></i>
                    </label>
                    <input
                      ref={usernameInput}
                      type="text"
                      id="username"
                      className="form-input w-100"
                      placeholder={isLoginPage ? "電子信箱/帳號" : "請輸入帳號"}
                    />
                  </div>
                  {/* <!-- 注意：電子信箱/手機號碼 所以 type 要用 text --> */}
                  {!isLoginPage && (
                    <div className="form-square form-square-withicon d-flex justify-content-between mb-3">
                      <label
                        htmfor="email"
                        className="material-icons form-square-icon-left"
                      >
                        <i className="fa-solid fa-envelope"></i>
                      </label>
                      <input
                        ref={emailInput}
                        type="email"
                        id="email"
                        className="form-input w-100"
                        placeholder="請輸入電子信箱"
                      />
                    </div>
                  )}
                  {/* <!-- 注意：電子信箱/手機號碼 所以 type 要用 text --> */}
                  <div className="form-square form-square-withicon d-flex justify-content-between mb-3">
                    <label
                      htmfor="password"
                      className="material-icons form-square-icon-left"
                    >
                      <i className="fa-solid fa-lock"></i>
                    </label>
                    <input
                      ref={pwdInput}
                      type="password"
                      id="password"
                      className="form-input w-100"
                      placeholder="請輸入使用者密碼"
                    />
                    {/* <!-- 注意：電子信箱/手機號碼 所以 type 要用 text --> */}
                  </div>
                  <div className="d-flex justify-content-between">
                    {/* 記住我按鈕 */}
                    <div className="custom-control custom-checkbox mb-0">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="rememberme"
                      />
                      <label
                        className="custom-control-label text-white"
                        htmfor="rememberme"
                      >
                        記住我
                      </label>
                    </div>
                    {/* 註冊登入切換鈕 */}
                    <div>
                      <a
                        href="#!"
                        role="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsLoginPage((preState) => !preState);
                        }}
                        className="text-white"
                      >
                        {isLoginPage
                          ? "點擊註冊，成為會員"
                          : "已是會員，點擊登入"}
                      </a>
                    </div>
                  </div>
                </div>
                <button className="btn btn-accent btn-block rounded-0 btn-lg py-3 text-primary">
                  {isLoginPage ? "登入帳號" : "註冊"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
