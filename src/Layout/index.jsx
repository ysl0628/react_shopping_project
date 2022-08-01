import React from "react";
import Footer from "./Footer";
import Header2 from "./Header/Header2";
import Subscribe from "./Subscribe";

export default function Layout(props) {
  return (
    <>
      <Header2 />
      {props.children}
      <Subscribe />
      <Footer />
    </>
  );
}
