import "./LoginBody.css";
import React, { useState } from "react";
import "../../../assets/bootstrap.min.css";
import { postData } from "../../Api/ApiRequest";
import { useHistory } from "react-router-dom";

const LoginBody = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [clicked, setClicked] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await postData("/user/login", { email, password });
      console.log(data);
      setAdmin(data.isAdmin);
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("name", data.name);
      sessionStorage.setItem("isAdmin", data.isAdmin ? "admin" : "user");
      sessionStorage.setItem("reloadCount", 1);
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
              {!error && clicked && !admin && history.push("/")}
              {!error && clicked && admin && history.push("/admin")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginBody;
