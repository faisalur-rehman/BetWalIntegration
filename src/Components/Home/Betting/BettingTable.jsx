import React, { useState } from "react";
import "./Betting.css";

const BettingTable = (props) => {
  const [teamOdd, setTeamOdd] = useState({});
  const [isBtts, setBtts] = useState({});
  const [isOver, setOver] = useState({});
  const [count, setCount] = useState(0);

  function changeTeamOdd(e, odd) {
    console.log("hello");
    setTeamOdd({ [odd]: +e.target.value });
  }
  function changeBtts(e, btts) {
    setBtts({ [btts]: +e.target.value });
  }
  function changeOver(e, over) {
    setOver({ [over]: +e.target.value });
  }
  function handleBetClick() {
    console.log(teamOdd);
    console.log(isBtts);
    console.log(isOver);
  }
  return (
    <div
      className="tab-pane fade show active"
      id="all-sports"
      role="tabpanel"
      aria-labelledby="all-sports-tab"
    >
      <table style={{ color: "white", width: "100%" }}>
        <tr>
          <th className="th">Home Team</th>
          <th className="th">Away Team</th>
          <th className="th">Home Odds</th>
          <th className="th">Draw Odds</th>
          <th className="th">Away Odds</th>
          <th className="th">BTTS Yes</th>
          <th className="th">BTTS No</th>
          <th className="th">Under 2.5</th>
          <th className="th">Over 2.5</th>
        </tr>
        {props.data.map((single_match_data, i) => (
          <tr>
            <td className="td">{single_match_data.homeTeam}</td>
            <td className="td">{single_match_data.awayTeam}</td>
            <td className="td">
              <div
                className="single-place-to-bet"
                // onClick={() =>
                //   props.onShowModal(single_match_data, single_match_data)
                // }
              >
                <a href>
                  <span className="bet-price" style={{ display: "block" }}>
                    <label>
                      <input
                        type="radio"
                        value={single_match_data.homeOdd}
                        name={`teamOdd${i}`}
                        onChange={(e) => changeTeamOdd(e, "homeOdd")}
                      />
                      {single_match_data.homeOdd}
                    </label>
                  </span>
                  {/* <span className="result-for-final">
                    {single_match_data.homeTeam}
                  </span> */}
                </a>
              </div>
            </td>
            <td className="td">
              <div
                className="single-place-to-bet"
                // onClick={() =>
                //   props.onShowModal(single_match_data, single_match_data)
                // }
              >
                <a href>
                  <span className="bet-price" style={{ display: "block" }}>
                    <label>
                      <input
                        type="radio"
                        value={single_match_data.drawOdd}
                        name={`teamOdd${i}`}
                        onChange={(e) => changeTeamOdd(e, "drawOdd")}
                      />
                      {single_match_data.drawOdd}
                    </label>
                  </span>
                  {/* <span className="result-for-final">Draw</span> */}
                </a>
              </div>
            </td>
            <td className="td">
              <div
                className="single-place-to-bet"
                // onClick={() =>
                //   props.onShowModal(single_match_data, single_match_data)
                // }
              >
                <a href>
                  <label>
                    <input
                      type="radio"
                      value={single_match_data.awayOdd}
                      name={`teamOdd${i}`}
                      onChange={(e) => changeTeamOdd(e, "awayOdd")}
                    />
                    {single_match_data.awayOdd}
                  </label>
                  {/* <span className="result-for-final">
                    {single_match_data.awayTeam}
                  </span> */}
                </a>
              </div>
            </td>
            <td className="td">
              <label>
                <input
                  type="radio"
                  value={single_match_data.bttsYes}
                  name={`btts${i}`}
                  onChange={(e) => changeBtts(e, "bttsYes")}
                />
                {single_match_data.bttsYes}
              </label>
            </td>
            <td className="td">
              <label>
                <input
                  type="radio"
                  value={single_match_data.bttsNo}
                  name={`btts${i}`}
                  onChange={(e) => changeBtts(e, "bttsNo")}
                />
                {single_match_data.bttsNo}
              </label>
            </td>
            <td className="td">
              <label>
                <input
                  type="radio"
                  value={single_match_data.under25}
                  name={`over${i}`}
                  onChange={(e) => changeOver(e, "under25")}
                />
                {single_match_data.under25}
              </label>
            </td>
            <td className="td">
              <label>
                <input
                  type="radio"
                  value={single_match_data.over25}
                  name={`over${i}`}
                  onChange={(e) => changeOver(e, "over25")}
                />
                {single_match_data.over25}
              </label>
            </td>
            <td>
              <button
                onClick={() =>
                  props.onShowModal(
                    {
                      homeOdd: 0,
                      awayOdd: 0,
                      drawOdd: 0,
                      ...teamOdd,
                      bttsYes: 0,
                      bttsNo: 0,
                      ...isBtts,
                      under25: 0,
                      over25: 0,
                      ...isOver,
                      matchId: single_match_data._id,
                    },
                    single_match_data
                  )
                }
              >
                Bet now
              </button>
            </td>
          </tr>
        ))}
      </table>

      {/* <div className="sport-content-title">
        <h3>
          {props.name}
          <span className="sport-content-conter">{`[${props.data.length}]`}</span>
        </h3>
      </div>
      <div className="sports-list">
        <h4 className="title">{props.league_name}</h4>
        {props.data.map((single_match_data) => (
          <div className="single-sport-box">
            {/* <div className="part-icon">
              <i className="far fa-futbol"></i>
            </div> 
            <div className="part-match">
              <div
                className="single-place-to-bet"
                onClick={() =>
                  props.onShowModal(single_match_data, single_match_data)
                }
              >
                <a href>
                  <span className="bet-price">{single_match_data.homeOdd}</span>
                  <span className="result-for-final">
                    {single_match_data.homeTeam}
                  </span>
                </a>
              </div>
              <div
                className="single-place-to-bet"
                onClick={() =>
                  props.onShowModal(single_match_data, single_match_data)
                }
              >
                <a href>
                  <span className="bet-price">{single_match_data.drawOdd}</span>
                  <span className="result-for-final">Draw</span>
                </a>
              </div>
              <div
                className="single-place-to-bet"
                onClick={() =>
                  props.onShowModal(single_match_data, single_match_data)
                }
              >
                <a href>
                  <span className="bet-price">{single_match_data.awayOdd}</span>
                  <span className="result-for-final">
                    {single_match_data.awayTeam}
                  </span>
                </a>
              </div>
            </div>
            <div className="part-team">
              <div
                className="single-place-to-bet"
                onClick={() =>
                  props.onShowModal(single_match_data, single_match_data)
                }
              >
                <a href>
                  <span className="bet-price">{single_match_data.bttsYes}</span>
                </a>
              </div>
            </div>

            <div className="part-bnonus">
              <span className="bonus-number">{`+${single_match_data.bonus_number}`}</span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default BettingTable;
