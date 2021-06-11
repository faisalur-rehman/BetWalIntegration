import "./PaymentHistory.css";

const Payment_History = () => {
  return (
    <div class="payment-history">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8">
            <div class="user-panel-title">
              <h3>Payment History</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="transaction-area">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Transaction Type</th>
                    <th scope="col">Confirmation Number </th>
                    <th scope="col">Date</th>
                    <th scope="col">Transaction Method </th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" class="d-flex">
                      Funds Transfers
                    </th>
                    <td>X N 0465 4364 74 457</td>
                    <td>Oct 24,2018</td>
                    <td>Payoneer</td>
                    <td>001 Days Ago</td>
                  </tr>

                  <tr>
                    <th scope="row" class="d-flex">
                      Payments
                    </th>
                    <td>X N 0465 4364 74 457</td>
                    <td>Oct 24,2018</td>
                    <td>Skrill</td>
                    <td>001 Days Ago</td>
                  </tr>

                  <tr>
                    <th scope="row" class="d-flex">
                      withdrawal
                    </th>
                    <td>X N 0465 4364 74 457</td>
                    <td>Oct 24,2018</td>
                    <td>Master Card</td>
                    <td>001 Days Ago</td>
                  </tr>

                  <tr>
                    <th scope="row" class="d-flex">
                      Funds Transfers
                    </th>
                    <td>X N 0465 4364 74 457</td>
                    <td>Oct 24,2018</td>
                    <td>Paypal</td>
                    <td>001 Days Ago</td>
                  </tr>

                  <tr>
                    <th scope="row" class="d-flex">
                      Payments
                    </th>
                    <td>X N 0465 4364 74 457</td>
                    <td>Oct 24,2018</td>
                    <td>Payoneer</td>
                    <td>001 Days Ago</td>
                  </tr>
                  <tr>
                    <th scope="row" class="d-flex">
                      withdrawal
                    </th>
                    <td>X N 0465 4364 74 457</td>
                    <td>Oct 24,2018</td>
                    <td>Skrill</td>
                    <td>001 Days Ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment_History;
