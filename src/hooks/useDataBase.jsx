import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsByPageQuery } from "../store/api/productsApi";

export default function useDataBase() {
  const currentPage = useSelector((state) => state.page.currentPage);
  const { data, isSuccess } = useGetProductsByPageQuery(currentPage);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState();
  useEffect(() => {
    if (!isSuccess) return;
    let products = data.data.map((product) => ({
      key: product.id,
      id: product.id,
      title: product.attributes.name,
      price: product.attributes.price,
      onSale: product.attributes.onSale,
      image: product.attributes?.image?.data?.attributes?.formats?.small?.url,
      special: product.attributes.special,
      sales: product.attributes.sales,
      launchAt: product.attributes?.launchAt,
      amount: 0,
    }));
    const pagination = {
      totalPages: data.meta?.pageCount || "",
      pageSize: data.meta?.pageSize,
      totalAmount: data.meta?.total,
      currentPage: data.meta?.page,
    };
    setProducts(products);
    setPage(pagination);
  }, [isSuccess, data]);
  return { products, page };
}
