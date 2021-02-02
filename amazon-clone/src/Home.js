import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />

        <div className="home_row">
          {" "}
          <Product
            id={132}
            title="Mouse"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31ACyIDOCXL.jpg"
            rating={3}
          />
          <Product />
        </div>

        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
