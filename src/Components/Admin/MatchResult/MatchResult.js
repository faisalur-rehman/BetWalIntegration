import React, { useState, useEffect } from "react";
import { formPostData, formGetData } from "../../Api/ApiRequest";
import "./MatchResult.css";
import MatchResultForm from "./MatchResultForm";

const MatchResult = () => {
  const [teamWon, setTeamWon] = useState("");
  const [, setMatchDrawn] = useState();
  const [btts, setBtts] = useState();
  const [moreThanThree, setMoreThanThree] = useState();
  const [matches, setMatches] = useState([]);
  const [matchId, setMatchId] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await formGetData("/football/matches/");
        console.log("matches", data.list);
        setMatches(data.list);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
  }, []);
  console.log(matches);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await formPostData(
        "match-result/add",
        {
          matchId,
          isHomeTeamWon: teamWon === "home",
          isAwayTeamWon: teamWon === "away",
          isDraw: teamWon === "draw",
          isBtts: btts === "yes",
          isOver25: moreThanThree === "yes",
        },
        sessionStorage.getItem("token")
      );
      setError("Updated successfully");

      console.log(data);
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data.message);
    }
  }
  return (
    <MatchResultForm
      handleSubmit={handleSubmit}
      setTeamWon={setTeamWon}
      setMatchDrawn={setMatchDrawn}
      setBtts={setBtts}
      setMoreThanThree={setMoreThanThree}
      matches={matches}
      setMatchId={setMatchId}
      error={error}
    />
  );
};

export default MatchResult;
