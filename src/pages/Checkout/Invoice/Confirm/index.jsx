import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useCart from "../../../../hooks/useCart";
import { useAddOrderMutation } from "../../../../store/api/orderApi";
import { useAddOrderProductMutation } from "../../../../store/api/orderProductApi";
import { removeAll } from "../../../../store/reducers/cartSlice";
import Backdrop from "../../../../UI/Backdrop";

export default function Confirm({ onClose, setShowConfirm }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addOrder] = useAddOrderMutation();
  const [addOrderProduct] = useAddOrderProductMutation();
  const cart = useSelector((state) => state.cart.products);
  const orderInfo = useSelector((state) => state.order);
  const { id } = JSON.parse(localStorage.getItem("user"));

  const onConfirm = async (event) => {
    event.preventDefault();
    if (orderInfo) {
      try {
        const res = await addOrder({
          phone: orderInfo.phone,
          address: orderInfo.address,
          status: orderInfo.status,
          email: orderInfo.email,
          tax_number: orderInfo.taxNumber,
          total_price: orderInfo.totalPrice,
          user: id,
        });
        if (res.error) throw Error(res.error);
        console.log(res);
        const orderId = res.data.data.id;
        console.log(orderId);
        cart.forEach(async (product) => {
          const res = await addOrderProduct({
            title: product.title,
            amount: product.amount,
            price: product.price,
            image_url: `http://localhost:1337${product.image}`,
            order: orderId,
          });
        });
        navigate("/cart/success");
        dispatch(removeAll());
        alert("訂單已送出");
        setShowConfirm(false);
      } catch (err) {
        console.log(err);
        alert("訂單送出失敗！");
      }
    }
  };

  return (
    <Backdrop>
      {/* <!-- Modal --> */}
      <div onClick={onClose} className=" d-flex justify-content-center  ">
        {/* onClick={(e) => e.stopPropagation()} 防止點選視窗而關閉畫面 */}
        <div className="m-0 " onClick={(e) => e.stopPropagation()}>
          <div className="card" style={{ width: "24rem" }}>
            <div className="card-header d-flex justify-content-between">
              <button type="button" className="btn" onClick={onClose}>
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
            <div className="card-body">
              <h3 className="card-text text-center">確定送出訂單嗎？</h3>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-sm mx-1"
                onClick={onConfirm}
              >
                確認
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm mx-1"
                onClick={onClose}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}
