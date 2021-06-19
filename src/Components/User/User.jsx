import Dashboard from "./Dashboard/Dashboard";
import UserStatics from "./User_Statics/UserStatics";
import PaymentHistory from "./Payment_History/PaymentHistory";
import Header from "../Common/Header/Header";
import CompleteFooter from "../Common/Footer/CompleteFooter";
import React, { useEffect, useState } from "react";
import { formGetData } from "../Api/ApiRequest";

const User = () => {
  const [balance, setBalance] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await formGetData(
          "/user-balance/get",
          sessionStorage.getItem("token")
        );
        setBalance(data.balance);
        console.log("user", data);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
  }, []);

  return (
    <div class="user-panel-dashboard">
      <Header />
      <Dashboard />
      {balance && <UserStatics balance={balance} />}
      {/* <PaymentHistory /> */}
      <CompleteFooter />
    </div>
  );
};
export default User;
