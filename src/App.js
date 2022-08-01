import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "./store/api/productsApi";
import Layout from "./Layout";
import "./scss/all.scss";
import { RouterAll } from "./routes";

export default function App() {
  return (
    <Layout>
      <RouterAll />
    </Layout>
  );
}
