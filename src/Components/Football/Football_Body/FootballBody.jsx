import React from "react";
import "./FootballBody.css";
import first_img from "../../../assets/img/1.png";
import sec_image from "../../../assets/img/2.png";
import third_image from "../../../assets/img/3.svg";
import { Link } from "react-router-dom";

const FootballBody = () => {
  return (
    <div class="standing">
      <div class="container">
        <div class="col-md-8 mx-auto">
          <div class="standing-list-cover">
            <div class="standing-team-list">
              <h4 class="result-title text-left">COMPETITIONS</h4>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                          <a href="leagues.html">
                            <img src={first_img} alt="" />
                          </a>
                        </span>
                        <span class="text-center">
                          <Link to="">Champions League</Link>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                    <Link to="">0 Matches Active</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                        <Link to="">
                            <img src={sec_image} alt="" />
                          </Link>
                        </span>
                        <span class="text-center">
                        <Link to="">Premier League</Link>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                    <Link to="">0 Matches Active</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                        <Link to="">
                            <img src={third_image} alt="" />
                          </Link>
                        </span>
                        <span class="text-center">
                        <Link to="">La Liga</Link>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                    <Link to="">0 Matches Active</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                        <Link to="">
                            <img src={first_img} alt="" />
                          </Link>
                        </span>
                        <span class="text-center">
                        <Link to="">Champions League</Link>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                    <Link to="">0 Matches Active</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                        <Link to="">
                            <img src={sec_image} alt="" />
                          </Link>
                        </span>
                        <span class="text-center">
                        <Link to="">Premier League</Link>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                    <Link to="">0 Matches Active</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                          <Link to="">
                            <img src={third_image} alt="" />
                          </Link>
                        </span>
                        <span class="text-center">
                        <Link to="">La Liga</Link>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                    <Link to="">0 Matches Active</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FootballBody;
