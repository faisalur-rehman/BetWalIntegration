import "./AccumulatorData.css";

const AccumulatorData = () => {
  return (
    <div class="accumulator-data">
      <div class="container">
        <h3 class="text-center mt-5">Bets in My beets</h3>
        <div class="row">
          <div class=" card bg-dark p-4 d-flex mx-auto flex-column col-lg-4 col-md-5 col-sm-6 col-11">
            <div class="d-flex justify-content-between">
              <p> Accumulator Returns :</p>
              <p class="decorated-text"> £ -8.00</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Status :</p>
              <p class="decorated-text"></p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Amount :</p>
              <p class="decorated-text">£ -8</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Odds :</p>
              <p class="decorated-text">1.00</p>
            </div>
          </div>
        </div>

        <table class="table table-dark table-striped table-hover mt-5">
          <thead>
            <tr>
              <th scope="col">Match</th>
              <th scope="col">Bet Placed on Team</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >Dummy</td>
              <td >Dummy</td>
              <td >Dummy</td>
            </tr>
            <tr>
              <td >Dummy</td>
              <td >Dummy</td>
              <td >Dummy</td>
            </tr>
            <tr>
              <td >Dummy</td>
              <td >Dummy</td>
              <td >Dummy</td>
            </tr>
          </tbody>
        </table>
        <p className="small_text"> 
          <em>
            <span class="decorated-text">*</span> Results get updated from the
            home page. Proceed to the home page to refresh wallet balance.{" "}
            <a class="decorated-text" href="/">
              Click here
            </a>
          </em>
        </p>
      </div>
    </div>
  );
};

export default AccumulatorData;
