import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductsByPageQuery } from "../store/api/productsApi";

export default function useDataBase() {
  const currentPage = useSelector((state) => state.page.currentPage);
  const { data, isSuccess } = useGetProductsByPageQuery(currentPage);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState();
  const [success, setSuccess] = useState();
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
    const pagination = {
      totalPages: data.meta?.pageCount || "",
      pageSize: data.meta?.pageSize,
      totalAmount: data.meta?.total,
      currentPage: data.meta?.page,
    };
    setProducts(product);
    setPage(pagination);
    setSuccess(isSuccess);
  }, [isSuccess, data]);
  return { products, page, success };
}
