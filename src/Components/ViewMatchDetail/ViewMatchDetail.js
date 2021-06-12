import React, { useState, useEffect } from "react";
import { formPostData, formGetData } from "../Api/ApiRequest";

const ViewMatchDetail = () => {
  const [matchId, setMatchId] = useState("");
  const [matches, setMatches] = useState([]);
  const [matchData, setMatchData] = useState();
  const [error, setError] = useState();

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
  matchData && console.log(matchData);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(matchId);
    try {
      const { data } = await formPostData(
        "/match-result/get",
        { matchId },
        sessionStorage.getItem("token")
      );
      console.log(data);
      setMatchData(data.matchResult);
      setError("");
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message);
      setMatchData();
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
              <select
                name="matches"
                onChange={({ target }) => setMatchId(target.value)}
              >
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
                {matchData &&
                  (matchData.isAwayTeamWon ? (
                    <p style={{ color: "white" }}>Away Team Won</p>
                  ) : matchData.isHomeTeamWon ? (
                    <p style={{ color: "white" }}>Home Team Won</p>
                  ) : (
                    <p style={{ color: "white" }}>Draw</p>
                  ))}
              </div>
              <div>
                {matchData &&
                  (matchData.isBtts ? (
                    <p style={{ color: "white" }}>Both Team Scored</p>
                  ) : (
                    <p style={{ color: "white" }}>Both Team did not score</p>
                  ))}
              </div>
              <div>
                {matchData &&
                  (matchData.isOver25 ? (
                    <p style={{ color: "white" }}>
                      Both Team Scored 3 goals or more
                    </p>
                  ) : (
                    <p style={{ color: "white" }}>
                      Both Team did not score 3 goals or more
                    </p>
                  ))}
              </div>
              <p style={{ color: "red" }}>{error}</p>

              <div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  class="btn btn-block btn-warning w-50 my-3"
                >
                  See Match Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMatchDetail;
