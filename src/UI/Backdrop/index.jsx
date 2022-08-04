import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default function Backdrop(props) {
  return ReactDOM.createPortal(
    <div className={`backdrop`}>{props.children}</div>,
    document.getElementById("backdrop-modal")
  );
}
