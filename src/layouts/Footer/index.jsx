import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 bg-primary-lighter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 d-flex flex-column justify-content-between">
            <div>
              <img
                src={
                  require("../../assets/images/cake_shop_logo@1.5x.svg").default
                }
                height="27"
                alt=""
              />
            </div>
            <ul className="list-unstyled mt-5">
              <li>02-1234-5678</li>
              <li>
                <a href="mailto:sweetaste@email.com">whatsulook@email.com</a>
              </li>
              <li>111 台北市中正區快樂街 520 號</li>
            </ul>
          </div>
          <div className="col-md-5 text-right d-none d-md-block">
            <img
              src={
                require("../../assets/images/sm-今天是個吃甜點的好日子.svg")
                  .default
              }
              width="60"
              alt=""
            />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-5 mt-2">
            <img
              src={require("../../assets/images/instagram_icon.svg").default}
              height="32"
              width="32"
              className="mr-1"
              alt=""
            />
            <img
              src={require("../../assets/images/facebook_icon.svg").default}
              height="32"
              width="32"
              alt=""
            />
          </div>
          <div className="col-md-5 text-md-right mt-2">
            <span>© 2022 CAKE SHOP All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
