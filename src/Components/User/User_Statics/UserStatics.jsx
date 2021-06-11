import "./UserStatics.css";

const User_Statics = () => {
  return (
    <div class="player-statics">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="user-panel-title">
              <h3>User Statics</h3>
            </div>
          </div>
        </div>
        <div class="row  mx-auto">
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="single-static">
              <div class="part-icon">
                <img
                  src="http://iamubaidah.com/html/peredion/demo/assets/img/svg/money1.svg"
                  alt=""
                />
              </div>
              <div class="part-text">
                <span class="number">$584.00</span>
                <span class="title">Available Balance</span>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="single-static">
              <div class="part-icon">
                <img
                  src="http://iamubaidah.com/html/peredion/demo/assets/img/svg/payment.svg"
                  alt=""
                />
              </div>
              <div class="part-text">
                <span class="number">$464.00</span>
                <span class="title">Total Winnings </span>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="single-static">
              <div class="part-icon">
                <img
                  src="http://iamubaidah.com/html/peredion/demo/assets/img/svg/money2.svg"
                  alt=""
                />
              </div>
              <div class="part-text">
                <span class="number">$24k.00</span>
                <span class="title">Deposits Total</span>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="single-static">
              <div class="part-icon">
                <img
                  src="http://iamubaidah.com/html/peredion/demo/assets/img/svg/cash.svg"
                  alt=""
                />
              </div>
              <div class="part-text">
                <span class="number">$158.00</span>
                <span class="title">Your Total Profit or Losses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User_Statics;
