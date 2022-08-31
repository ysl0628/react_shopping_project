import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/reducers/authSlice";

const useAutoLogout = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const timeout = auth.expirationTime - Date.now();
    if (timeout < 60000) {
      dispatch(logout());
      return;
    }
    const timer = setTimeout(() => {
      dispatch(logout());
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [auth]);
};

export default useAutoLogout;
