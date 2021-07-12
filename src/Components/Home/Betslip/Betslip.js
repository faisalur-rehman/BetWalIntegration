import React, { useState, useEffect } from "react";
import { formGetData } from "../../Api/ApiRequest";
import "./Betslip.css";

const Betslip = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await formGetData(
          "/user-betslip/get",
          sessionStorage.getItem("token")
        );
        console.log("betslp", data);
        setData(data.betslips);
      } catch (error) {
        console.log("error", error.response);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="betslip-bg">
      <h2>User Betslip</h2>
      <div className="betslip">
        {data.length > 0 &&
          data.map((bet) => (
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p>
                  Bet Status:{" "}
                  <span style={{ color: "#ffd800" }}>
                    {bet.isBetWon === null
                      ? "Pending"
                      : bet.isBetWon === true
                      ? "Won"
                      : "Lost"}
                  </span>
                </p>
                {bet.awayOdd > 0 && <p>Away Odd: {bet.awayOdd}</p>}
                {bet.betReturn > 0 && <p>Bet Return: {bet.betReturn}</p>}
                {bet.bttsNo > 0 && <p>BTTS No: {bet.bttsNo}</p>}
                {bet.bttsYes > 0 && <p>BTTS Yes: {bet.bttsYes}</p>}
                {bet.drawOdd > 0 && <p>Draw odd: {bet.drawOdd}</p>}
                {bet.homeOdd > 0 && <p>Home Odd: {bet.homeOdd}</p>}
                {bet.over25 > 0 && <p>Over 2.5 Goals: {bet.over25}</p>}
                {bet.under25 > 0 && <p>Under 2.5 Goals: {bet.under25}</p>}
                <p>Total Odds: {bet.totalOdds.toFixed(2)}</p>
                <p>Total Stake: {bet.stake}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Betslip;
