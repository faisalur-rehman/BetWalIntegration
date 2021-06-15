import React, { useState } from "react";

const MatchResultForm = ({
  handleSubmit,
  setMatchDrawn,
  setTeamWon,
  setBtts,
  setMoreThanThree,
  matches,
  setMatchId,
  error,
}) => {
  return (
    <div class="login">
      <div class="container">
        <div class="row justify-content-center">
          <h1>Match Result</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-5 col-md-6 col-sm-9">
            <div class="login-form">
              <form onSubmit={handleSubmit}>
                <label className="label">Select Match</label>
                <br />
                <select
                  name="matches"
                  onChange={({ target }) => setMatchId(target.value)}
                >
                  <option value="select" selected disabled>
                    Select
                  </option>
                  {matches.map((match, index) => (
                    <option value={match._id}>Match {index + 1}</option>
                  ))}
                </select>
                <br />
                <br />

                <label className="label">Which team won?</label>
                <br />
                <label className="label">
                  <input
                    style={{ width: "fit-content", height: "10px" }}
                    type="radio"
                    name="team"
                    value="home"
                    onChange={(e) => setTeamWon(e.target.value)}
                    required
                  />
                  <span style={{ padding: 5 }}>Home Team</span>
                </label>
                <br />
                <label className="label">
                  <input
                    style={{ width: "fit-content", height: "10px" }}
                    type="radio"
                    name="team"
                    value="away"
                    onChange={(e) => setTeamWon(e.target.value)}
                  />
                  <span style={{ padding: 5 }}>Away Team</span>
                </label>

                <br />
                <label className="label">
                  <input
                    style={{ width: "fit-content", height: "10px" }}
                    type="radio"
                    name="team"
                    value="draw"
                    onChange={(e) => setTeamWon(e.target.value)}
                    required
                  />
                  <span style={{ padding: 5 }}>Draw</span>
                </label>
                <br />
                <label className="label">Did both team score?</label>
                <br />
                <label>
                  <input
                    style={{ width: "fit-content", height: "10px" }}
                    type="radio"
                    name="score"
                    value="yes"
                    onChange={(e) => setBtts(e.target.value)}
                    required
                  />
                  <span style={{ color: "white", padding: 5 }}>Yes</span>
                </label>
                <br />
                <label className="label">
                  <input
                    style={{ width: "fit-content", height: "10px" }}
                    type="radio"
                    name="score"
                    value="no"
                    onChange={(e) => setBtts(e.target.value)}
                  />
                  <span style={{ color: "white", padding: 5 }}>No</span>
                </label>
                <br />
                <label className="label">
                  Did both team score 3 or more goals?
                </label>
                <br />
                <label>
                  <input
                    style={{ width: "fit-content", height: "10px" }}
                    type="radio"
                    name="moreThan3"
                    value="yes"
                    onChange={(e) => setMoreThanThree(e.target.value)}
                    required
                  />
                  <span style={{ color: "white", padding: 5 }}>Yes</span>
                </label>
                <br />
                <label className="label">
                  <input
                    style={{ width: "fit-content", height: "10px" }}
                    type="radio"
                    name="moreThan3"
                    value="no"
                    onChange={(e) => setMoreThanThree(e.target.value)}
                  />
                  <span style={{ color: "white", padding: 5 }}>No</span>
                </label>
                <br />

                <p style={{ color: "red" }}>{error}</p>

                <button type="submit" class="btn btn-block">
                  Update Match Results
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchResultForm;
