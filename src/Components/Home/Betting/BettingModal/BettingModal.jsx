import React, { useState } from "react";
import "./BettingModal.css";
import vs_icon from "../../../../assets/img/vs-icon.png";
import { formPostData } from "../../../Api/ApiRequest";

const Betting_Model = (props) => {
  const [bet_count, set_bet_count] = useState(0);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [balanceMethod, setBalanceMethod] = useState("");

  const handleDecrement = () => {
    var temp = bet_count;
    if (temp > 0) set_bet_count(temp - 1);
  };
  const handleIncrement = () => {
    var temp = bet_count;
    set_bet_count(temp + 1);
  };

  const handleCloseModal = () => {
    set_bet_count(0);
    props.onHideModal();
    setError("");
    setResponse("");
  };

  const handleBalanceChange = ({ target }) => {
    setBalanceMethod(target.value);
  };

  async function handleBet() {
    let method =
      balanceMethod === "freeBetBalance"
        ? { freeBetBalance: 1, normalBalance: 0 }
        : { normalBalance: 1, freeBetBalance: 0 };
    console.log("method", method);
    try {
      const { data } = await formPostData(
        "/user-betslip/add",
        {
          ...props.betData,
          stake: bet_count,
          ...method,
        },
        sessionStorage.getItem("token")
      );
      setResponse(data.message);
      setError("");
      console.log(data);
    } catch (error) {
      setResponse("");
      setError(error.response.data.message);
      console.log(error.response);
    }
  }

  console.log(props);

  return (
    <div class={props.bet_modal_bg}>
      <div class={props.bet_modal}>
        <div class="bet-header">
          <span class="title">Bet a game</span>
          <button class="cls-btn">
            <i class="fas fa-times" onClick={handleCloseModal}></i>
          </button>
        </div>
        <div class="bet-body">
          <div class="place-of-bet">
            <span class="place-of-bet-title">{props.betData.name}</span>
            <span class="altv-1">{props.betData.bet_value}</span>
          </div>
          <div class="bet-descr">
            <span class="team-name team-name-1st">
              {props.matchData.homeTeam}
            </span>
            <span class="img-ic">
              <img src={vs_icon} alt="" />
            </span>
            <span class="team-name team-name-2nd">
              {props.matchData.awayTeam}
            </span>
            {/* <div class="team-score">
              [<span class="team-first-score">2</span>:
              <span class="team-second-score">4</span>] 1X2 Live Prediction
            </div> */}
          </div>
          <div class="ctrl-buttons">
            <div class="butto-shadow">
              <button
                class="ctrl-button-for-number minus-number"
                onClick={handleDecrement}
              >
                -
              </button>
              <span class="altv-2">${bet_count}</span>

              <button
                class="ctrl-button-for-number plus-number"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
          <div className="balance-method">
            <p>Choose Balance Method</p>
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={handleBalanceChange}
            >
              <option selected disabled>
                Select
              </option>
              <option value="freeBetBalance">Free Balance</option>
              <option value="normalBalance">Normal Balance</option>
            </select>
          </div>
          <div class="bet-total">
            <ul>
              <li>
                <span class="number-of-stake-title">stake :</span>
                <span class="altv-3">{bet_count}</span>
              </li>
              <li>
                <span class="number-of-bet">Total Est. Returns :</span>
                {props.betValue && (
                  <span class="number-of-bet-count">
                    ${(bet_count * props.betValue.betValue).toFixed(2)}
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
        {response && <p>{response}</p>}
        {error && <p>{error}</p>}
        <div class="bet-footer">
          <button onClick={handleBet} disabled={bet_count <= 0 ? true : false}>
            Bet Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Betting_Model;
