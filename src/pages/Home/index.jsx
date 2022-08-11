import React from "react";
import Recommendation from "../../components/Home/Recommendation";
import useCategory from "../../hooks/useCategory";

export default function Home() {
  const { products: dataAll } = useCategory();
  const dataSpecial = dataAll.filter((item) => item.special).slice(0, 3);
  return (
    <div>
      <div className="container px-0 px-md-3">
        <header className="header">
          <div
            className="header-main-image bg-cover"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/4686833/pexels-photo-4686833.jpeg)`,
            }}
          ></div>
          <h1 className="text-hide">六角甜點工坊</h1>
          <div className="row no-gutters justify-content-center rectangle-section">
            <div className="col-md-10">
              <div className="row no-gutters">
                <a href="#!" className="col-4 rectangle-image-wrap">
                  <span className="rectangle-text">本日精選</span>
                  <div className="four-sides rectangle-over zindex--1"></div>
                  <div
                    className="rectangle-image bg-cover"
                    style={{
                      backgroundImage: `url(https://images.pexels.com/photos/1543800/pexels-photo-1543800.jpeg)`,
                    }}
                  ></div>
                </a>
                <a href="#!" className="col-4 rectangle-image-wrap">
                  <span className="rectangle-text">人氣推薦</span>
                  <div className="four-sides rectangle-over zindex--1"></div>
                  <div
                    className="rectangle-image bg-cover"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1525059337994-6f2a1311b4d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ce5bbf66bdb4ed3b6965f0b3618aa43&auto=format&fit=crop&w=654&q=80)`,
                    }}
                  ></div>
                </a>
                <a href="#!" className="col-4 rectangle-image-wrap">
                  <span className="rectangle-text">新品上市</span>
                  <div className="four-sides rectangle-over zindex--1"></div>
                  <div
                    className="rectangle-image bg-cover"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73ed228f25bdefd2291c242f6d390fca&auto=format&fit=crop&w=634&q=80)`,
                    }}
                  ></div>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>

      <section className="section my-md-9">
        <div className="row justify-content-center no-gutters d-md-none">
          <div className="col-6">
            <img
              src="/images/sm-為什麼選擇了做甜點.svg"
              className="my-5 img-fluid"
              alt=""
            />
          </div>
        </div>

        <div className="bg-primary-lighter">
          <div className="container">
            <div className="row">
              <div className="col-md-6 break-vertical-block">
                <div
                  className="bg-cover h-100 section-intro-image"
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/1543800/pexels-photo-1543800.jpeg)`,
                  }}
                ></div>
              </div>
              <div className="col-md-6 vertical-content d-flex justify-content-end">
                <div className="writing-md-vertical py-md-7 py-5 text-primary-light mr-auto">
                  <p className="mb-0">青山依舊在，幾度夕陽紅。慣看秋月春風。</p>
                  <p className="mb-0">
                    一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                  </p>
                  <p className="mb-0">
                    是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                  </p>
                </div>
                <div className="break-vertical-block d-none d-md-block">
                  <img
                    src="/images/lg-為什麼選擇了做甜點.svg"
                    width="88"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section my-md-9">
        <div className="row justify-content-center no-gutters d-md-none">
          <div className="col-6">
            <img
              src="/images/sm-為什麼一定要吃甜點.svg"
              className="my-5 img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="bg-primary-lighter">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-md-6 break-vertical-block">
                <div
                  className="bg-cover h-100 section-intro-image"
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/3913295/pexels-photo-3913295.jpeg)`,
                  }}
                ></div>
              </div>
              <div className="col-md-6 vertical-content d-flex justify-content-end">
                <div className="writing-md-vertical py-md-7 py-5 text-primary-light mr-auto">
                  <p className="mb-0">青山依舊在，幾度夕陽紅。慣看秋月春風。</p>
                  <p className="mb-0">
                    一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                  </p>
                  <p className="mb-0">
                    是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                  </p>
                </div>
                <div className="break-vertical-block d-none d-md-block">
                  <img
                    src="/images/lg-為什麼一定要吃甜點.svg"
                    width="88"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center my-5 my-md-9">
        <img
          src="/images/lg-想吃甜點是不需要理由的.svg"
          className="img-fluid d-none d-md-inline-block"
          width="89"
          alt=""
        />
        <img
          src="/images/sm-想吃甜點是不需要理由的.svg"
          className="img-fluid d-md-none"
          width="256"
          alt=""
        />
      </section>

      <section className="container my-5 my-md-7">
        <div className="row">
          {dataSpecial.map((product) => (
            <Recommendation key={product.id} item={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
