import React from "react";
import Breadcrumb from "../Common/Breadcrumb/Breadcrumb";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import SpecialBody from "./Special_Body/SpecialBody";

const Special = () => {
  return (
    <React.Fragment>
      <Header />
      <Breadcrumb detail="Special" />
      <SpecialBody />
      <Footer />
    </React.Fragment>
  );
};
export default Special;
