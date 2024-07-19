"use client";
import { useState } from "react";
import style from "../../styles/productDetail.module.css";
import Link from "next/link";
import styles from "../../styles/video.module.css";
import ReactPlayer from "react-player";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState(1);
  const [setectSize, setSelectSize] = useState(1);

  const handleClick = (id) => {
    setSelectedColor(id);
  };

  const colorHandleClick = (id) => {
    setSelectSize(id);
  };

  const colors = [
    {
      id: 1,
      color: "#614842",
    },
    {
      id: 2,
      color: "#707E6E",
    },
    {
      id: 3,
      color: "#FB9D52",
    },
    {
      id: 4,
      color: "#925513",
    },
  ];

  const size = [
    {
      id: 1,
      size: 40,
      stock: "#0A0B0B",
    },
    {
      id: 2,
      size: 40,
      stock: "#D2D1D3",
    },
    {
      id: 3,
      size: 40,
      stock: "#D2D1D3",
    },
    {
      id: 4,
      size: 40,
      stock: "",
    },
    {
      id: 5,
      size: 40,
      stock: "",
    },
    {
      id: 6,
      size: 40,
      stock: "",
    },
    {
      id: 7,
      size: 40,
      stock: "",
    },
  ];

  const options = [
    {
      id: 1,
      img: "/secureImg.svg",
      optType: "Secure payment",
    },
    {
      id: 2,
      img: "/Size&Fit.svg",
      optType: "Size & Fit",
    },
    {
      id: 3,
      img: "/truck.svg",
      optType: "Free shipping",
    },
    {
      id: 4,
      img: "/Returns.svg",
      optType: "Free Shipping & Returns",
    },
  ];

  // const productDetailList = [
  //   {
  //     id: 1,
  //     name: "",
  //     pro
  //   },
  // ];

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className={style.productDetailMainContainer}>
        <div className="container">
          <div className={style.productDetailInnerItems}>
            <div className={style.left}>
              <ul className={style.proImgGall}>
                <li>
                  <figure>
                    <img src="/pro-1-1.png" alt="" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/pro-1-2.png" alt="" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/pro-1-3.png" alt="" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/pro-1-4.png" alt="" />
                  </figure>
                </li>
              </ul>

              <div className={style.productDescrip}>
                <h3>Product Description</h3>
                <p className={style.proDesc}>
                  100% Bio-washed Cotton – makes the fabric extra soft & silky.
                  Flexible ribbed crew neck. Precisely stitched with no pilling
                  & no fading. Provide all-time comfort. Anytime, anywhere.
                  Infinite range of matte-finish HD prints.
                </p>

                <p className={style.proDesc}>
                  100% Bio-washed Cotton – makes the fabric extra soft & silky.
                  Flexible ribbed crew neck. Precisely stitched with no pilling
                  & no fading.
                </p>

                <ul>
                  <li>
                    <p>Brand</p>
                    <h4>Brand Name</h4>
                  </li>
                  <li>
                    <p>SKU</p>
                    <h4>66910-Brown</h4>
                  </li>
                  <li>
                    <p>Type</p>
                    <h4>Formal</h4>
                  </li>
                  <li>
                    <p>Sole Material</p>
                    <h4>TPR</h4>
                  </li>
                  <li>
                    <p>Toe Shape</p>
                    <h4>Round</h4>
                  </li>
                  <li>
                    <p>FASTENING</p>
                    <h4>Slip-Ons</h4>
                  </li>
                </ul>
              </div>
            </div>

            <div className={style.right}>
              <div className={style.productDetail}>
                <p className={style.tag}>New Release</p>
                <h2>ADIDAS 4DFWD X PARLEY RUNNING SHOES</h2>
                <h3>$125.00</h3>
                <div className={style.colorOpt}>
                  <h4>color</h4>
                  <ul>
                    {colors.map(({ id, color }) => {
                      return (
                        <li
                          onClick={() => handleClick(id)}
                          className={
                            selectedColor === id ? `${style.active}` : ""
                          }
                          key={id}
                        >
                          <i style={{ backgroundColor: `${color}` }}></i>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={style.sizeOpt}>
                  <div className={style.bar}>
                    <h4>Size</h4>
                    <Link href="/">Size chart</Link>
                  </div>

                  <ul>
                    {size.map(({ id, size }) => {
                      return (
                        <li
                          onClick={() => colorHandleClick(id)}
                          className={
                            setectSize === id ? `${style.selectSize}` : ""
                          }
                          key={id}
                        >
                          {size}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={style.buyOpt}>
                  <Link className={style.cartBtn} href="">
                    Add to cart
                  </Link>
                  <Link className={style.wishlist} href="">
                    <img src="/wishlist.png" alt="" />
                  </Link>
                </div>
                <div className={style.opt}>
                  <ul>
                    {options.map(({ id, img, optType }) => {
                      return (
                        <li key={id}>
                          <i>
                            <img src={img} alt="" />
                          </i>
                          <p>{optType}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={style.vedioSectionMain}>
                  {!isPlaying ? (
                    <div className="video-overlay" onClick={handlePlay}>
                      <img src="/vid_img.png" alt="Video Thumbnail" />
                      <button className="play-button">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="32" cy="32" r="32" fill="white" />
                          <path d="M25 20L45 32L25 44V20Z" fill="black" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="iframe-container">
                      <ReactPlayer
                        url="https://youtu.be/B_m8q9e9Osc"
                        playing={isPlaying}
                        controls
                        width="100%
                        "
                        height="422px"
                        className={style.reactPlayer}
                        onEnded={handleEnded}
                      />
                    </div>
                  )}

                  <style jsx>{`
                    .video-section {
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      text-align: center;
                    }
                    .video-overlay {
                      position: relative;
                      cursor: pointer;
                    }
                    .video-overlay img {
                      width: 100%;
                      height: auto;
                    }
                    .play-button {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      background: none;
                      border: none;
                      cursor: pointer;
                      animation: scaleUpDown 1.5s infinite ease-in-out;
                    }
                    .play-button svg {
                      width: 64px;
                      height: 64px;
                    }
                    @keyframes scaleUpDown {
                      0%,
                      100% {
                        transform: translate(-50%, -50%) scale(1);
                      }
                      50% {
                        transform: translate(-50%, -50%) scale(1.2);
                      }
                    }
                    .iframe-container {
                      width: 100%;
                      position: relative;
                      overflow: hidden;
                    }
                    .iframe-container iframe {
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      border: 0;
                    }
                  `}</style>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
