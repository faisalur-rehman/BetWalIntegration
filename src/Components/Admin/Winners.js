import React, { useState, useEffect } from "react";
import { formPostData, formGetData } from "../Api/ApiRequest";

const Winners = () => {
  const [matches, setMatches] = useState([]);
  const [winners, setWinners] = useState([]);
  const [error, setError] = useState();
  const [result, setResult] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await formGetData("/football/matches/");
        setMatches(data.list);
        setError("");
      } catch (error) {
        console.log(error.response);
        setError(error.response.data.message);
      }
    }
    fetchData();
  }, []);

  async function handleChange({ target }) {
    try {
      const { data } = await formPostData(
        "/won-users/",
        { matchId: target.value },
        sessionStorage.getItem("token")
      );
      setWinners(data.wonUsers);
      console.log(data);
      setResult(data.message);
      setError("");
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message);
      setResult("");
    }
  }

  return (
    <div class="login">
      <div class="container">
        <div class="row justify-content-center">
          <h1>Match Result</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-5 col-md-6 col-sm-9">
            <div class="login-form">
              <label className="label">Select Match</label>
              <br />
              <select name="matches" onChange={handleChange}>
                <option value="select" disabled selected>
                  Select
                </option>
                {matches.map((match, index) => (
                  <option value={match._id}>Match {index + 1}</option>
                ))}
              </select>
              <br />
              <br />
              <div>
                <ul>
                  {winners.map((winner) => (
                    <li>{winner}</li>
                  ))}
                </ul>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              {result && <p style={{ color: "red" }}>{result}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
