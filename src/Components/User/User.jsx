import Dashboard from "./Dashboard/Dashboard";
import UserStatics from "./User_Statics/UserStatics";
import PaymentHistory from "./Payment_History/PaymentHistory";
import Header from "../Common/Header/Header";
import CompleteFooter from "../Common/Footer/CompleteFooter";

const User = () => {
  return <div class="user-panel-dashboard">
      <Header />
      <Dashboard />
      <UserStatics />
      <PaymentHistory />
      <CompleteFooter />
  </div>;
};
export default User;
