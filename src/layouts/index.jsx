import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Subscribe from "./Subscribe";

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Subscribe />
      <Footer />
    </>
  );
}
