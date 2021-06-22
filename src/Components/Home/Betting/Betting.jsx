import React, { useEffect, useState } from "react";
import "./Betting.css";

import BettingTable from "./BettingTable";
import { formGetData } from "../../Api/ApiRequest";

const Batting = (props) => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await formGetData("/football/matches/", "");
        console.log("matches", data.list);
        setMatches(data.list);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <div className="betting" id="in_play">
        <div className="container">
          <div className="betting-table">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="tab-content bet-tab-content" id="myTabContent">
                  <BettingTable
                    onShowModal={props.onShowModal}
                    name="FOOTBALL MATCHES"
                    league_name="ENGLAND INTERNATIONAL LEAGUE"
                    data={matches}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Batting;
