import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { formGetData } from "../../Api/ApiRequest";

const HeaderTop = () => {
  //code to find current time and date
  const locale = "en";
  const [today, setDate] = useState(new Date());
  const [balance, setBalance] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await formGetData(
          "/user-balance/get",
          sessionStorage.getItem("token")
        );
        setBalance(data.balance);
        console.log("user", data);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  // Creating Date Format
  const date = `${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}, ${today.getFullYear()}\n\n`;
  const hour = today.getHours();
  const minute = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-sm-6">
            <div className="left-area">
              <ul>
                <li>
                  <span className="icon">
                    <i className="fa fa-calendar-alt"></i>
                  </span>
                  <span className="text">{date}</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="fa fa-clock"></i>
                  </span>
                  <span className="text clocks">
                    <span id="hours">{hour}</span>:
                    <span id="minutes">{minute}</span>:
                    <span id="seconds">{sec}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-6">
            <div className="right-area">
              <ul>
                {balance && <li>Normal Balance: ${balance.normalBalance}</li>}
                {balance && (
                  <li>
                    Free Balance:
                    <span style={{ color: "yellow" }}>
                      ${balance.freeBetBalance}
                    </span>
                  </li>
                )}
                <li>
                  <Link className="link" to="/user">
                    <i className="fal fa-user-circle fa-1x"></i>
                    Hi, {sessionStorage.getItem("name")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
