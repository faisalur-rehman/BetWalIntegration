import React, { useState } from "react";
import Banner from "./Banner/Banner";
import Batting from "./Betting/Betting";
import CompleteFooter from "../Common/Footer/CompleteFooter";
import Header from "../Common/Header/Header";
import TodaySpecial from "./TodaySpecial/TodaySpecial";
import BettingModal from "./Betting/BettingModal/BettingModal";
import Betslip from "./Betslip/Betslip";

const Home = () => {
  const [show_Modal, set_show_Modal] = useState("bet-modal-bg");
  const [open_Modal, set_open_Modal] = useState("bet-modal");
  const [Bet_Data, set_Bet_Data] = useState({});
  const [Match_Data, set_Match_Data] = useState({});
  const [betValue, setBetValue] = useState();

  const showModalHandler = (bet_data, match_data, betValue) => {
    set_show_Modal("bet-modal-bg show");
    set_open_Modal("bet-modal open");
    set_Bet_Data({ ...bet_data });
    set_Match_Data({ ...match_data });
    setBetValue(betValue);
  };
  const hideModalHandler = () => {
    set_show_Modal("bet-modal-bg");
    set_open_Modal("bet-modal");
  };

  return (
    <React.Fragment>
      <BettingModal
        onHideModal={hideModalHandler}
        bet_modal_bg={show_Modal}
        bet_modal={open_Modal}
        betData={Bet_Data}
        matchData={Match_Data}
        betValue={betValue}
      />
      <Header />
      <Banner />
      <Batting onShowModal={showModalHandler} />
      <TodaySpecial />
      <Betslip />
      <CompleteFooter />
    </React.Fragment>
  );
};
export default Home;
