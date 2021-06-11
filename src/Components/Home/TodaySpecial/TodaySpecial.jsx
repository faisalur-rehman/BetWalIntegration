import React from "react";
import "./TodaySpecial.css";
import match1 from "../../../assets/img/match1.png";
import match2 from "../../../assets/img/match2.jpg";
import match3 from "../../../assets/img/match3.jpg";

const TodaySpecial = () => {
  return (
    <div className="latest-result">
      <div className="container">
        <div className="section-title">
          <h2>Today's Special</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="single-match">
              <img className="img-fluid" src={match1} alt="" />
            </div>
          </div>
          <div className="col-12">
            <div className="single-match">
              <img className="img-fluid" src={match2} alt="" />
            </div>
          </div>
          <div className="col-12">
            <div className="single-match">
              <img className="img-fluid" src={match3} alt="" />
            </div>
          </div>
          <div className="col-12">
            <div className="single-match">
              <img className="img-fluid" src={match1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodaySpecial;
