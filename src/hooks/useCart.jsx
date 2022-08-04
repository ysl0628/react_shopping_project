import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useCart() {
  const products = useSelector((state) => state.cart.products);
  const [totalAmount, setTotalAmount] = useState();
  const [totalPrice, setTotalPrice] = useState();
  useEffect(() => {
    let amount = 0;
    let price = 0;
    products.forEach((product) => {
      amount += product.amount;
      price += product.amount * product.price;
    });
    setTotalAmount(amount);
    setTotalPrice(price);
  }, [products]);
  return { totalAmount, totalPrice };
}
