import React, { useState } from "react";
import Banner from "../Home/Banner/Banner";
// import Batting from "./Betting/Betting";
import CompleteFooter from "../Common/Footer/CompleteFooter";
// import TodaySpecial from "./TodaySpecial/TodaySpecial";
// import BettingModal from "./Betting/BettingModal/BettingModal";
import HeaderTop from "../Common/Header/HeaderTop";
import AdminHeaderBottom from "./AdminBottomHeader";
import "../Common/Header/Header.css";
const AdminHome = () => {
  const [show_Modal, set_show_Modal] = useState("bet-modal-bg");
  const [open_Modal, set_open_Modal] = useState("bet-modal");
  const [Bet_Data, set_Bet_Data] = useState({});
  const [Match_Data, set_Match_Data] = useState({});

  const showModalHandler = (bet_data, match_data) => {
    console.log("show clicked");
    set_show_Modal("bet-modal-bg show");
    set_open_Modal("bet-modal open");
    set_Bet_Data({ ...bet_data });
    set_Match_Data({ ...match_data });
  };
  console.log("isAdmin", sessionStorage.getItem("isAdmin"));
  const hideModalHandler = () => {
    set_show_Modal("bet-modal-bg");
    set_open_Modal("bet-modal");
  };

  return (
    <React.Fragment>
      <HeaderTop />
      {/* <HeaderBottom /> */}
      <AdminHeaderBottom />
      <Banner />
      <CompleteFooter />
    </React.Fragment>
  );
};
export default AdminHome;
