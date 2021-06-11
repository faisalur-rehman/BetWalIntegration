import { useState } from "react";
import "./RegisterBody.css";
import { Link, useHistory } from "react-router-dom";
import { postData } from "../../Api/ApiRequest";
import axios from "axios";
import HistoryPush from "../../HistoryPush/HistoryPush";

const Register_Body = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  const handleUsername = ({ target }) => {
    setName(target.value);
  };
  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handlePassword = ({ target }) => {
    if (target.value.length < 5 || target.value.length > 10) {
      setError("Password must be between 5 to 10 characters long");
    } else {
      setError("");
    }
    setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await postData("/user/register", {
        name,
        email,
        password,
      });
      setClicked(true);
      console.log(data);
      setError("");
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div class="login">
      <div class="container">
        <div class="row justify-content-center">
          <h1>Sign Up</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-5 col-md-6 col-sm-9">
            <div class="login-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={handleUsername}
                  placeholder="Enter Username"
                />
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Enter Your Mail"
                />
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder="Enter Your Password"
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" class="btn btn-block">
                  Register
                </button>
              </form>
              {!error && clicked && history.push("/login")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register_Body;
