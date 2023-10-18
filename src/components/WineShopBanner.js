import React from "react";

import "./WineShopBanner.css";

function WineShopBanner() {
  return (
    <div className="banner-block">
      <div className="banner-shadow-block">
        <div className="banner-text-wrap">
          <div className="banner-title-text">
          Huge selection of wine<br />
          from all over the world
            <div className="banner-title-shadow-text">
            Huge selection of wine<br />
            from all over the world
            </div>
          </div>
          <div className="banner-slogan-shadow-block"></div>
          <div className="banner-slogan-block">
            <span className="banner-slogan-text">Prices will surprise you!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineShopBanner;