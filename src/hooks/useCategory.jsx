import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../store/api/productsApi";

export default function useCategory() {
  const { data, isSuccess } = useGetProductsQuery();
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState();
  useEffect(() => {
    console.log("render");
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
      description: product.attributes?.description,
    }));
    setProducts(product);
    setSuccess(isSuccess);
  }, [isSuccess, data]);
  return { products, success };
}
