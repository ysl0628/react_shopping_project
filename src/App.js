import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "./store/api/productsApi";
import Layout from "./layouts";
import "./scss/all.scss";
import { RouterAll } from "./routes";

export default function App() {
  return (
    <Layout>
      <RouterAll />
    </Layout>
  );
}
