import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../store/api/productsApi";

export default function useDataBase() {
  const { data, isSuccess } = useGetProductsQuery(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!isSuccess) return;
    const product = data.data.map((product) => ({
      key: product.id,
      id: product.id,
      title: product.attributes.name,
      price: product.attributes.price,
      onSale: product.attributes.onSale,
      image: product.attributes?.image?.data?.attributes?.formats?.small?.url,
      special: product.attributes.special,
      sales: product.attributes.sales,
      launchAt: product.attributes?.launchAt,
    }));
    setProducts(product);
  }, [isSuccess, data]);
  return products;
}
