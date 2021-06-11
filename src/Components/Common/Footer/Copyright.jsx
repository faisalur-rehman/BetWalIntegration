import React from "react";
import "./Copyright.css";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="copyright-footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 d-lg-flex d-block align-items-center">
            <p className="copyright-text text-center">
              <Link to="/">Betval</Link> © 2020. PRIVACY POLICY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
