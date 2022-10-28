import React from "react";
import "./profile.css";
import { Tabs } from "antd";
import Personalinfo from "./personalinfo";
import Review from "../../../Components/Reviews/review";
import Configuration from "../Configuration/configuration";
import Fooditem from "../Fooditems/fooditems";

function Resprofile() {
  return (
    <div className="main-profile-div">
      <div className="profilemain">
        <div>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Restaurants Details" key="1">
              <div>
                <Personalinfo />
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Food Items" key="2">
              <Fooditem />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Ratings & Reviews" key="3">
              <Review />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Configuration" key="4">
              <Configuration />
            </Tabs.TabPane>
          </Tabs>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
}

export default Resprofile;
