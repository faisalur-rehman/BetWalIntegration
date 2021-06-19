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
        console.log("data", data);
        console.log("betslp", data);
        setData(data.betslips);
      } catch (error) {
        console.log("error", error.response);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>User Betslip</h2>
      <div className="betslip">
        {data.length > 0 &&
          data.map((bet) => (
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                {bet.awayOdd > 0 && <p>Away Odd: {bet.awayOdd}</p>}
                {bet.betReturn > 0 && <p>Bet Return: {bet.betReturn}</p>}
                {bet.bttsNo > 0 && <p>BTTS No: {bet.bttsNo}</p>}
                {bet.bttsYes > 0 && <p>BTTS Yes: {bet.bttsYes}</p>}
                {bet.drawOdd > 0 && <p>Draw odd: {bet.drawOdd}</p>}
                {bet.homeOdd > 0 && <p>Home Odd: {bet.homeOdd}</p>}
                {bet.over25 > 0 && <p>Over 2.5 Goals: {bet.over25}</p>}
                {bet.under25 > 0 && <p>Under 2.5 Goals: {bet.under25}</p>}
                <p>Total Odds: {bet.totalOdds}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Betslip;
