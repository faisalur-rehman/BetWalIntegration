import React from "react";
import "./Betting.css";

const BettingTable = (props) => {
  return (
    <div
      className="tab-pane fade show active"
      id="all-sports"
      role="tabpanel"
      aria-labelledby="all-sports-tab"
    >
      <div className="sport-content-title">
        <h3>
          {props.name}
          <span className="sport-content-conter">{`[${props.data.length}]`}</span>
        </h3>
      </div>
      <div className="sports-list">
        <h4 className="title">{props.league_name}</h4>
        {props.data.map((single_match_data) => (
          <div className="single-sport-box">
            <div className="part-icon">
              <i className="far fa-futbol"></i>
            </div>
            <div className="part-match">
              {single_match_data.bet.map((bet) => (
                <div
                  className="single-place-to-bet"
                  onClick={() => props.onShowModal(bet, single_match_data)}
                >
                  <a href>
                    <span className="bet-price">{bet.bet_value}</span>
                    <span className="result-for-final">{bet.name}</span>
                  </a>
                </div>
              ))}
            </div>
            <div className="part-team">
              <ul>
                {single_match_data.teams.map((team) => (
                  <li>
                    <span className="team-name">{team.team_name}</span>
                    <span className="score-number">{team.team_score}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="part-bnonus">
              <span className="bonus-number">{`+${single_match_data.bonus_number}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BettingTable;
