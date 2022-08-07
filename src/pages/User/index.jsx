import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Order from "../../components/Order";
import { useGetUserByIdQuery } from "../../store/api/userApi";

export default function User() {
  const [orders, setOrders] = useState([]);
  const username = useSelector((state) => state.auth.user.username);
  const { id } = JSON.parse(localStorage.getItem("user"));
  const { data: user, isSuccess } = useGetUserByIdQuery(id);

  useEffect(() => {
    if (!isSuccess) return;
    setOrders(user.orders);
    console.log("user", user.orders);
  }, [user, isSuccess]);

  return (
    <div>
      <div className="flex-wrap justify-content-center mb-3">
        <h1 className="bg-primary-lighter h4 mb-0 py-4 px-5 text-start">
          您好，{username}
        </h1>
        <h3 className="mt-3 mb-3 text-center">您的訂單</h3>
        <div className="mx-5">
          {orders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}
