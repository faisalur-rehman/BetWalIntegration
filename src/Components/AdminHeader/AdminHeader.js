import React from "react";
import Banner from "../Home/Banner/Banner";
import CompleteFooter from "../Common/Footer/CompleteFooter";
import AdminHeaderBottom from "./AdminBottomHeader";
import "../Common/Header/Header.css";
const AdminHome = () => {
  return (
    <React.Fragment>
      {/* <HeaderTop /> */}
      <AdminHeaderBottom />
      <Banner />
      <CompleteFooter />
    </React.Fragment>
  );
};
export default AdminHome;
