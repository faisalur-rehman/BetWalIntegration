import "../Login/Login_Body/LoginBody.css";
import React, { useState } from "react";
import "../../assets/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const FileUpload = () => {
  const history = useHistory();
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
        accept: "application/json",
        "Content-Type": `multipart/form-data`,
      },
    };
    const data = new FormData();
    data.append("file", file);

    try {
      const response = await axios.post(
        "https://betval-app.herokuapp.com/football/upload",
        data,
        config
      );
      console.log(response);

      setError("");
      setClicked(true);
    } catch (error) {
      console.log(error.response);
      //   setError(error.response.data.message);
    }
  };
  return (
    <div class="login">
      <div class="container">
        <div class="row justify-content-center">
          <h1>Upload Matches File</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-5 col-md-6 col-sm-9">
            <div class="login-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  placeholder="Enter Your Mail"
                  required
                />

                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" class="btn btn-block">
                  Send File
                </button>
              </form>
              {!error && clicked && (
                <p style={{ color: "white" }}>File uploaded successfully</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FileUpload;
