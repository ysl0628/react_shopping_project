import React from "react";
import Layout from "./layouts";
import "./scss/all.scss";
import { RouterAll } from "./routes";
import useAutoLogout from "./hooks/useAutoLogout";

export default function App() {
  useAutoLogout();
  return (
    <Layout>
      <RouterAll />
    </Layout>
  );
}
