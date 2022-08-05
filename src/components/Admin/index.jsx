import React from "react";
import { useSelector } from "react-redux";

export default function Admin() {
  const username = useSelector((state) => state.auth.user.username);
  return (
    <div>
      <div className="flex-wrap justify-content-center mb-3">
        <h1 className="bg-primary-lighter h4 mb-0 py-4 px-5 text-start">
          您好，{username}
        </h1>
        <h5 className="mt-3 mb-3 text-center">您的訂單</h5>
      </div>
    </div>
  );
}
