import "./LoginBody.css";
import React, { useState, useEffect } from "react";
import "../../../assets/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import { postData } from "../../Api/ApiRequest";

const LoginBody = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    sessionStorage.getItem("name") && sessionStorage.removeItem("name");
    sessionStorage.getItem("token") && sessionStorage.removeItem("token");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await postData("/user/login", { email, password });
      console.log(data);
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("name", data.name);
      setError("");
      setClicked(true);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message);
    }
  };
  return (
    <div class="login">
      <div class="container">
        <div class="row justify-content-center">
          <h1>Sign In</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-5 col-md-6 col-sm-9">
            <div class="login-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Mail"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  required
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" class="btn btn-block">
                  Login
                </button>
              </form>
              {!error && clicked && history.push("/")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginBody;
