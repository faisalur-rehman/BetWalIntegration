import React, { useState, useEffect } from "react";
import { formGetData } from "../Api/ApiRequest";
import AddBalance from "./AddBalance";
import Layout from "./Layout";

const GetUserBalance = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await formGetData(
          "/user-balance/all",
          sessionStorage.getItem("token")
        );
        setData(data.balance);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
  }, []);
  console.log("user", data);
  return (
    <Layout>
      <div class="login">
        <AddBalance />
        <div class="container">
          <div class="row justify-content-center">
            <h1>All User Balance</h1>
          </div>
          <div class="row justify-content-center">
            <div class="">
              <div class="login-form">
                <table style={{ color: "white", width: "100%" }}>
                  <tr>
                    <th className="th">Name</th>
                    <th className="th">Email</th>
                    <th className="th">Normal Balance</th>
                    <th className="th">Free Balance</th>
                  </tr>
                  {data.length > 0 &&
                    data.map((user) => (
                      <tr>
                        <td className="td">{user.userId.name}</td>
                        <td className="td">{user.userId.email}</td>
                        <td className="td">{user.freeBetBalance}</td>
                        <td className="td">{user.normalBalance}</td>
                      </tr>
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetUserBalance;
