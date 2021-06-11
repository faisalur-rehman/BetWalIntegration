import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = (props) => {
  let classes = "breadcrumb-bettix ";
  classes += props.type === "reg" ? "standing-page-register" : "standing-page";

  return (
    <div className={classes}>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="breadcrumb-content">
              <h2>{props.detail}</h2>
              <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                  <i className=" fas fa-caret-right "></i>
                </li>
                <li>
                  <Link>{props.detail}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
