import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
// import { Modal } from "bootstrap";

export default function Modal({ show, close, title, children }) {
  return ReactDOM.createPortal(
    <>
      {/* <!-- Modal --> */}
      {show && (
        <div
          onClick={() => close()}
          className="modal fade"
          //   id="exampleModal"
          //   tabIndex="-1"
          //   aria-labelledby="exampleModalLabel"
          //   aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  //   data-bs-dismiss="modal"
                  //   aria-label="Close"
                  onClick={() => close()}
                ></button>
              </div>
              <div className="modal-body">{children}</div>
              <div className="modal-footer">
                <button
                  onClick={() => close()}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal")
  );
}
