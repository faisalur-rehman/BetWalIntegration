import React from "react";
import "./Footer.css";
import logo from "../../../assets/img/logo.png";
import email_svg from "../../../assets/img/svg/email.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-6 col-lg-5 col-md-12">
            <div className="about-widget">
              <a className="logo" href="index.html">
                <img src={logo} alt="" />
              </a>
              <p>
                Betval offers you all the best online prediction from every
                corner of the planet with thousands of online prediction
                markets.
              </p>
              <div className="social">
                <ul>
                  <li>
                    <a href="https://facebook.com" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" className="social-icon">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="support">
                <ul>
                  <li>
                    <span className="icon">
                      <img src={email_svg} alt="" />
                    </span>
                    <span className="text">
                      <span className="title">Mail Us</span>
                      <span className="descr">admin@betval.co.uk</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-6  col-sm-6">
            <div className="useful-links">
              <h3>Connect With Us</h3>
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/my_bets">MY BETS</Link>
                </li>

                <li>
                  <Link to="/special">SPECIALS</Link>
                </li>
                <li>
                  <Link href="/football">FOOTBALL</Link>
                </li>
                <li>
                  <Link to="/login">SIGN TN</Link>
                </li>
                <li>
                  <Link to="/register">REGISTER</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
            <div className="useful-links">
              <h3>All Sports</h3>
              <ul>
                <li>
                  <Link to="">FOOTBALL</Link>
                </li>
                <li>
                  <Link to="">BASKETBALL</Link>
                </li>
                <li>
                  <Link to="">TENNIS</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="payment-method">
                  <div className="all-method">
                    <div>
                      <h1> Best Odds Guaranteed</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
