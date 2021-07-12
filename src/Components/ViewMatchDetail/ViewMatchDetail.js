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
        "/won-users/get",
        { matchId },
        sessionStorage.getItem("token")
      );
      console.log("matchData", data);
      setMatchData(data);
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
                {matches.map((match) => (
                  <option value={match._id}>
                    {match.homeTeam} vs {match.awayTeam}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <div>
                {matchData && (
                  <>
                    <p style={{ color: "white" }}>{matchData.message}</p>
                    <p style={{ color: "white" }}>
                      Bet Return:{" "}
                      <span style={{ color: "orange" }}>
                        {matchData.betReturn}
                      </span>
                    </p>
                  </>
                )}
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
