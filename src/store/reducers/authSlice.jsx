import { createSlice } from "@reduxjs/toolkit";
// import { clearToken, getToken, isLogined, setToken } from "../../../utlis/auth";

export const authSlice = createSlice({
  name: "auth",
  initialState: () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return {
        isLogined: false,
        token: "",
        user: null,
        expirationTime: 0,
      };
    }
    // 頁面刷新時可保留登錄資訊
    return {
      isLogined: true,
      token,
      user: JSON.parse(localStorage.getItem("user")),
      expirationTime: +JSON.parse(localStorage.getItem("expirationTime")),
    };
  },
  reducers: {
    login(state, action) {
      console.log(action);
      state.isLogined = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      // 取得當前的時間戳
      const currentTime = Date.now();
      // 設置登錄的有效時間
      const timeout = 1000 * 60 * 60;
      // 設置失效日期
      state.expirationTime = currentTime + timeout;

      // 將數據同時儲存到本地的存儲中
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("expirationTime", state.expirationTime + "");
    },
    logout(state, action) {
      state.isLogined = false;
      state.token = null;
      state.user = null;

      // 將數據同時於本地的存儲中刪除
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("expirationTime");
    },
  },
});

export const { login, logout } = authSlice.actions;
