import React from "react";
import Breadcrumb from "../Common/Breadcrumb/Breadcrumb";
import CompleteFooter from "../Common/Footer/CompleteFooter";
import Header from "../Common/Header/Header";
import AccumulatorData from "./AccumulatorData";

const AccumulatorMain = () => {
  return (
    <React.Fragment>
      <Header />
      <Breadcrumb detail="Special" />
      <AccumulatorData />
      <CompleteFooter />
    </React.Fragment>
  );
};
export default AccumulatorMain;
