import React from "react";
import Tablecomp from "./Table/table";
import "./driver.css";
import { Input, Select, Switch } from "antd";
import { useNavigate } from "react-router-dom";

function Drivers() {
  const navigate = useNavigate();

  const { Search } = Input;
  const { Option } = Select;

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="drivermain">
      <div className="row">
        <div className="col-md-12 driverdiv">
          <h4>Drivers</h4>
          <div className="driverdiv1">
            <div>
              <Search placeholder="input search text" enterButton />
            </div>
            <div className="drivdiv2">
              <p>Admin level</p>
              <Switch defaultChecked onChange={onChange} />
              <div className="dropdown1">
                <Input.Group compact>
                  <Select defaultValue="Option2">
                    <Option value="Option2">All</Option>
                    <Option value="Option3">Fast foods</Option>
                    <Option value="Option4">Desi</Option>
                    <Option value="Option5">Chinese</Option>
                  </Select>
                </Input.Group>
              </div>
              <button className="refbtn">Refresh</button>
              <button
                className="addresbtn"
                onClick={() => navigate("/adddrivers")}
              >
                + Add Driver
              </button>
            </div>
          </div>
        </div>
      </div>
      <Tablecomp />
    </div>
  );
}

export default Drivers;
