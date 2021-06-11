import React, { useState } from "react";
import "./BettingModal.css";
import vs_icon from "../../../../assets/img/vs-icon.png";

const Betting_Model = (props) => {
  const [bet_count, set_bet_count] = useState(0);

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
  };

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
            <span class="team-name team-name-1st">Arsenal</span>
            <span class="img-ic">
              <img src={vs_icon} alt="" />
            </span>
            <span class="team-name team-name-2nd">everton</span>
            <div class="team-score">
              [<span class="team-first-score">2</span>:
              <span class="team-second-score">4</span>] 1X2 Live Prediction
            </div>
          </div>
          <div class="ctrl-buttons">
            <div class="butto-shadow">
              <button
                class="ctrl-button-for-number minus-number"
                onClick={handleDecrement}
              >
                -
              </button>
              <span class="altv-2">{bet_count}</span>

              <button
                class="ctrl-button-for-number plus-number"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
          <div class="bet-total">
            <ul>
              <li>
                <span class="number-of-stake-title">stake :</span>
                <span class="altv-3">{bet_count}</span>
              </li>
              <li>
                <span class="number-of-bet">Total Est. Returns :</span>
                <span class="number-of-bet-count">
                  {(bet_count * props.betData.bet_value).toFixed(2)}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="bet-footer">
          <button>Bet Now</button>
        </div>
      </div>
    </div>
  );
};
export default Betting_Model;
