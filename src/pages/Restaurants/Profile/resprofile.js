import React from "react";
import coverpic from "../../../images/foodcover.jpg";
import "./profile.css";
import { Tabs } from "antd";
import Personalinfo from "./personalinfo";
import Review from "../../../Components/reviews/review";

function Resprofile() {
  return (
    <div className="profilemain">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Restaurants Details" key="1">
          <Personalinfo />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Food Items" key="2">
          FOOD ITEMS
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ratings & Reviews" key="3">
          <Review />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Config" key="4">
          Content of Tab Pane 4
        </Tabs.TabPane>
      </Tabs>

      {/* </div> */}
    </div>
  );
}

export default Resprofile;
