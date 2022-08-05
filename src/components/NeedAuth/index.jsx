import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function NeedAuth(props) {
  const isLogined = useSelector((state) => state.auth.isLogined);
  return isLogined ? props.children : <Navigate to={"/login"} replace />;
}
