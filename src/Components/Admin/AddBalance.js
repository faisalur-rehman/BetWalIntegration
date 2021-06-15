// import "./LoginBody.css";
import React, { useState, useEffect } from "react";
import "../../assets/bootstrap.min.css";
import { formGetData, formPostData } from "../Api/ApiRequest";

const AddBalance = () => {
  const [freeBetBalance, setFreeBalance] = useState("");
  const [normalBalance, setNormalBalance] = useState("");
  const [error, setError] = useState("");
  // const [clicked, setClicked] = useState(false);
  const [user, setUser] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await formGetData(
          "/user-balance/users",
          sessionStorage.getItem("token")
        );
        console.log(data);
        setAllUsers(data.user);
      } catch (error) {
        console.log(error.response);
        setError(error.response.data.message);
      }
    }
    fetchData();
  }, []);

  const handleChange = ({ target }) => {
    setUser(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await formPostData(
        "/user-balance/add",
        {
          userId: user,
          freeBetBalance,
          normalBalance,
        },
        sessionStorage.getItem("token")
      );
      console.log(data);

      setError(data.message);
      // setClicked(true);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message);
    }
  };
  return (
    <div class="login">
      <div class="container">
        <div class="row justify-content-center">
          <h1>Add User Balance</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-5 col-md-6 col-sm-9">
            <div class="login-form">
              <form onSubmit={handleSubmit}>
                <label className="label">Select Match</label>
                <br />
                <select
                  name="user"
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    height: "45px",
                    margin: "10px 0",
                    borderRadius: "5px",
                  }}
                >
                  <option value="select" disabled selected>
                    Select
                  </option>
                  {allUsers.map(
                    (user) =>
                      !user.isAdmin && (
                        <option value={user._id}>{user.name}</option>
                      )
                  )}
                </select>
                <input
                  type="number"
                  value={freeBetBalance}
                  onChange={(e) => setFreeBalance(e.target.value)}
                  placeholder="Enter free bet balance"
                  required
                />
                <input
                  type="number"
                  value={normalBalance}
                  onChange={(e) => setNormalBalance(e.target.value)}
                  placeholder="Enter Normal Balance"
                  required
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" class="btn btn-block">
                  Add Balance
                </button>
              </form>
              {/* {!error && clicked && history.push("/")} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddBalance;
