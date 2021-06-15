import React from "react";
import Banner from "../Home/Banner/Banner";
// import Batting from "./Betting/Betting";
import CompleteFooter from "../Common/Footer/CompleteFooter";
// import TodaySpecial from "./TodaySpecial/TodaySpecial";
// import BettingModal from "./Betting/BettingModal/BettingModal";
import HeaderTop from "../Common/Header/HeaderTop";
import AdminHeaderBottom from "./AdminBottomHeader";
import "../Common/Header/Header.css";
const AdminHome = () => {
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
