import React from "react";
import "./AccumulatorBody.css";
import { Link } from "react-router-dom";

const AccumulatorBody = () => {
  return (
    <section className="accumulator">
      <div className="pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="accumulator-top">
              <button
                className="btn mt-5"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="true"
                aria-controls="collapseExample"
              >
                Add New Accumulator
              </button>
              <div className="collapse show" id="collapseExample">
                <form action="" method="POST">
                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      Name of the Accumulator
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mt-3 mb-4 pt-3">
              <h1 className="text-center">Your Active Accumulators</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
              <div className="card bg-dark">
                <div className="card-body">
                  <h5 className="card-title text-center">PSG</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Status : Cancelled
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">Odds : 1.00</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Amount : £ -2</h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Payment Status : Completed
                  </h6>
                  <Link to="/accumulator_data">
                    <button type="button" className="btn btn-block mt-3">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
              <div className="card  bg-dark">
                <div className="card-body">
                  <h5 className="card-title">
                    PSG
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Status : Cancelled
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">Odds : 1.00</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Amount : £ -2</h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Payment Status : Completed
                  </h6>
                  <Link to="/accumulator_data">
                    <button type="button" className="btn btn-block mt-3">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
              <div className="card  bg-dark">
                <div className="card-body">
                  <h5 className="card-title">
                    PSG
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Status : Cancelled
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">Odds : 1.00</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Amount : £ -2</h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Payment Status : Completed
                  </h6>
                  <Link to="/accumulator_data">
                    <button type="button" className="btn btn-block mt-3">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
              <div className="card bg-dark">
                <div className="card-body">
                  <h5 className="card-title">
                    PSG
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Status : Cancelled
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">Odds : 1.00</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Amount : £ -2</h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Payment Status : Completed
                  </h6>
                  <Link to="/accumulator_data">
                    <button type="button" className="btn btn-block mt-3">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AccumulatorBody;
