import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyBets from "./Components/MyBets/MyBets";
import Accumulator from "./Components/Accumulator/Accumulator";
import Special from "./Components/Special/Special";
import Football from "./Components/Football/Football";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import User from "./Components/User/User";
import AccumulatorMain from "./Components/Accumulator_Data/AccumulatorDataMain";
import FileUpload from "./Components/Admin/FileUpload";
import MatchResult from "./Components/Admin/MatchResult/MatchResult";
import ViewMatchDetail from "./Components/ViewMatchDetail/ViewMatchDetail";
import WonUser from "./Components/WonUsers/WonUsers";
import Winners from "./Components/Admin/Winners";
import AddBalance from "./Components/Admin/AddBalance";
import AdminHome from "./Components/AdminHeader/AdminHeader";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(sessionStorage.getItem("isAdmin"));
    // let reloadCount = sessionStorage.getItem("reloadCount");
    // console.log("reloadcount", reloadCount);
    // if (reloadCount < 2) {
    //   console.log(user);
    //   sessionStorage.setItem("reloadCount", +reloadCount + 1);
    //   window.location.reload();
    // } else {
    //   sessionStorage.removeItem("reloadCount");
    // }
    // window.location.reload();
  }, []);
  console.log("user", user);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/my_bets" component={MyBets} />
        <Route exact path="/accumulator" component={Accumulator} />
        <Route path="/special" component={Special} />
        <Route path="/football" component={Football} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/user" component={User} />
        <Route path="/view-result" component={ViewMatchDetail} />
        <Route path="/accumulator_data" component={AccumulatorMain} />
        <Route path="/won-user" component={WonUser} />

        {
          // admin routes
        }
        <Route path="/admin" component={AdminHome} />

        <Route path="/file-upload" component={FileUpload} />
        <Route path="/match-results" component={MatchResult} />
        <Route path="/winners" component={Winners} />
        <Route path="/add-balance" component={AddBalance} />
      </Switch>
    </Router>
    // <div className="App">
    //   <Home />
    // </div>
  );
}

export default App;
