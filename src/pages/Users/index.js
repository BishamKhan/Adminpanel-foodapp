import React from "react";
import Tablecomp from "./Table/table";
import { FormOutlined } from "@ant-design/icons";
import "./users.css";
import { Input } from "antd";

import { useNavigate } from "react-router-dom";

function Users() {
  const { Search } = Input;

  return (
    <div className="users-main-div" style={{ display: "flex" }}>
      <div className="usersmain">
        <div className="row">
          <div className="col-md-12 usersdiv">
            <h4>Users</h4>
            <div className="usersdiv1">
              <div>
                <Search
                  placeholder="Search by Name/Email/Password"
                  enterButton
                />
              </div>
              <div className="usersdiv2">
                <button className="downloadbtn"><FormOutlined />Download CSV</button>
              </div>
            </div>
          </div>
        </div>
        <Tablecomp />
      </div>
    </div>
  );
}

export default Users;
