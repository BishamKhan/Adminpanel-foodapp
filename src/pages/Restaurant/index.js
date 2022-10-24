import React from "react";
import { Tabs, Button, Input, Space, Table, Tag } from "antd";
import "./restaurant.css";
import Registeredrestaurants from "./Restaurantlist/registeredrestaurants";
import Tablecomp from "./Table/table";
import "./restaurant.css";

function Restaurant() {
  return (
    <div className="" style={{ display: "flex" }}>
      {/* <div style={{ width: "300px", backgroundColor: "#3c9ca7" }}>
        <h1>sidebar</h1>
      </div> */}
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Registered Restaurants" key="1">
          <Registeredrestaurants />
          <Tablecomp />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Blocked Restaurants" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Restaurant;
