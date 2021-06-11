import React from "react";
import "./MyBetsBody.css";
import { Link } from "react-router-dom";
import { Name_here, Special, Accumulators } from "../../../assets/DummyData/Betting";

const MyBetsBody = () => {
  return (
    <section className="myBets">
      <div className="pt-4 pb-4">
        <div className="container">
          <h3 className="text-center mt-5">Hello Name here</h3>
          <div className="table-wrap">
            <table className="table table-dark table-hover table-striped mt-5 text-center table-bordered">
              <thead>
                <tr>
                  <th scope="col">Match</th>
                  <th scope="col">Bet Placed on Team</th>
                  <th scope="col">Status</th>
                  <th scope="col">Amount Won/Lost</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Name_here.map((bet) => (
                  <tr>
                    <td>{bet.match}</td>
                    <td>{bet.bet_placed_on_team}</td>
                    <td>{bet.status}</td>
                    <td>{bet.amount}</td>
                    <td>
                      <button className="btn">
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
               </tbody>
            </table>
          </div>

          <h3 className="text-center mt-5">Specials</h3>

          <div className="table-wrap">
            <table className="table table-dark table-hover table-striped mt-5 text-center table-bordered">
              <thead>
                <tr>
                  <th scope="col">Bet Description</th>
                  <th scope="col">Odds</th>
                  <th scope="col">Status</th>
                  <th scope="col">Amount Won/Lost</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {Special.map((bet) => (
                  <tr>
                    <td>{bet.match}</td>
                    <td>{bet.bet_placed_on_team}</td>
                    <td>{bet.odds}</td>
                    <td>{bet.amount}</td>
                    <td>
                      <button className="btn">
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
               </tbody>
            </table>
          </div>

          <h3 className="text-center mt-5">Accumulators</h3>

          <div className="table-wrap">
            <table className="table table-hover table-striped mt-5 text-center">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Total Odds</th>
                  <th scope="col">Number of Bets</th>
                  <th scope="col">Status</th>
                  <th scope="col">Amount Won/Lost</th>
                  <th scope="col">View</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {Accumulators.map((bet) => (
                  <tr>
                    <th>{bet.Name}</th>
                    <th>{bet.Total_odds}</th>
                    <th>{bet.No_of_bets}</th>
                    <th>{bet.status}</th>
                    <th>{bet.amount}</th>
                    <th>
                    <Link className="btn" to="/accumulator_data">
                      <i className="fa fa-eye"></i>
                    </Link>
                  </th>
                  <th>
                    <button className="btn">
                      <i className="fa fa-trash"></i>
                    </button>
                  </th>
                  </tr>
                ))}
               </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyBetsBody;
