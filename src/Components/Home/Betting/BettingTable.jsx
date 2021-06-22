import React, { useState } from "react";
import "./Betting.css";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const BettingTable = (props) => {
  const [teamOdd, setTeamOdd] = useState({});
  const [isBtts, setBtts] = useState({});
  const [isOver, setOver] = useState({});
  const [teamOddValue, setTeamOddValue] = useState("");
  const [bttsValue, setBttsValue] = useState("");
  const [overValue, setOverValue] = useState("");

  function changeTeamOdd(e, odd, i) {
    setTeamOdd({ [odd]: +e.target.value });
    setTeamOddValue(e.currentTarget.value + odd + i);
  }
  function changeBtts(e, btts, i) {
    setBtts({ [btts]: +e.target.value });
    setBttsValue(e.currentTarget.value + btts + i);
  }
  function changeOver(e, over, i) {
    setOver({ [over]: +e.target.value });
    setOverValue(e.currentTarget.value + over + i);
  }

  console.log("radio value", teamOdd);

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
              <div className="single-place-to-bet">
                <a href>
                  <span className="bet-price" style={{ display: "block" }}>
                    <ButtonGroup toggle>
                      <ToggleButton
                        type="radio"
                        variant="outline-warning"
                        name={`teamOdd${i}`}
                        value={single_match_data.homeOdd}
                        checked={
                          teamOddValue ===
                          single_match_data.homeOdd + "homeOdd" + i
                        }
                        onChange={(e) => changeTeamOdd(e, "homeOdd", i)}
                      >
                        {single_match_data.homeOdd}
                      </ToggleButton>
                    </ButtonGroup>
                  </span>
                </a>
              </div>
            </td>
            <td className="td">
              <div className="single-place-to-bet">
                <a href>
                  <span className="bet-price" style={{ display: "block" }}>
                    <ButtonGroup toggle>
                      <ToggleButton
                        type="radio"
                        variant="outline-warning"
                        name={`teamOdd${i}`}
                        value={single_match_data.drawOdd}
                        checked={
                          teamOddValue ===
                          single_match_data.drawOdd + "drawOdd" + i
                        }
                        onChange={(e) => changeTeamOdd(e, "drawOdd", i)}
                      >
                        {single_match_data.drawOdd}
                      </ToggleButton>
                    </ButtonGroup>
                  </span>
                </a>
              </div>
            </td>
            <td className="td">
              <div className="single-place-to-bet">
                <a href>
                  <ButtonGroup toggle>
                    <ToggleButton
                      type="radio"
                      variant="outline-warning"
                      name={`teamOdd${i}`}
                      value={single_match_data.awayOdd}
                      checked={
                        teamOddValue ===
                        single_match_data.awayOdd + "awayOdd" + i
                      }
                      onChange={(e) => changeTeamOdd(e, "awayOdd", i)}
                    >
                      {single_match_data.awayOdd}
                    </ToggleButton>
                  </ButtonGroup>
                </a>
              </div>
            </td>
            <td className="td">
              <ButtonGroup toggle>
                <ToggleButton
                  type="radio"
                  variant="outline-warning"
                  name={`btts${i}`}
                  value={single_match_data.bttsYes}
                  checked={
                    bttsValue === single_match_data.bttsYes + "bttsYes" + i
                  }
                  onChange={(e) => changeBtts(e, "bttsYes", i)}
                >
                  {single_match_data.bttsYes}
                </ToggleButton>
              </ButtonGroup>
            </td>
            <td className="td">
              <ButtonGroup toggle>
                <ToggleButton
                  type="radio"
                  variant="outline-warning"
                  name={`btts${i}`}
                  value={single_match_data.bttsNo}
                  checked={
                    bttsValue === single_match_data.bttsYes + "bttsNo" + i
                  }
                  onChange={(e) => changeBtts(e, "bttsNo", i)}
                >
                  {single_match_data.bttsNo}
                </ToggleButton>
              </ButtonGroup>
            </td>
            <td className="td">
              <ButtonGroup toggle>
                <ToggleButton
                  type="radio"
                  variant="outline-warning"
                  name={`over${i}`}
                  value={single_match_data.under25}
                  checked={
                    overValue === single_match_data.under25 + "under25" + i
                  }
                  onChange={(e) => changeOver(e, "under25", i)}
                >
                  {single_match_data.bttsNo}
                </ToggleButton>
              </ButtonGroup>
            </td>
            <td className="td">
              <ButtonGroup toggle>
                <ToggleButton
                  type="radio"
                  variant="outline-warning"
                  name={`over${i}`}
                  value={single_match_data.over25}
                  checked={
                    overValue === single_match_data.over25 + "over25" + i
                  }
                  onChange={(e) => changeOver(e, "over25", i)}
                >
                  {single_match_data.bttsNo}
                </ToggleButton>
              </ButtonGroup>
            </td>
            <td>
              <button
                style={{
                  backgroundColor: "#FFD800",
                  color: "black",
                  border: "none",
                  marginLeft: 5,
                }}
                type="submit"
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
                    single_match_data,
                    {
                      betValue:
                        Object.values(teamOdd)[0] +
                        Object.values(isBtts)[0] +
                        Object.values(isOver)[0],
                    }
                  )
                }
              >
                Bet now
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default BettingTable;
