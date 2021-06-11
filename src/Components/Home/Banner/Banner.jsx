import React from "react";
import "./Banner.css";
import banner_img from "../../../assets/img/img-2-removebg-preview.png";

const Banner = () => {
  return (
    <div className="banner">
        <div className="container">
            <div className="banner-content">
                <div className="row justify-content-xl-start justify-content-lg-center justify-content-md-center">
                    <div className="col-xl-7 col-lg-11 col-md-10 col-12 d-xl-flex d-lg-flex d-block align-items-center">
                        <div className="text-content">
                            <h1>Welcome to BetVal </h1>
                            <h4>Best Pre-match Odds are Guaranteed!.</h4>
                            <p>We're football fanatics and inside our prediction hub you'll find all manner of game
                                prediction, aids and insights on everything the game has to offer.</p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4">
                        <div className="banner-img">
                            <img src={banner_img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Banner;
