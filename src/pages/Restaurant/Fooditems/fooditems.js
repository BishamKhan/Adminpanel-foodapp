import React from "react";
import { Col } from "antd";
import Card from "../../../Components/Menucard/card";

import "./fooditem.css";

function Fooditem() {
  return (
    <div className="fooditemmain">
      <div className="foodcat">
      <button className="foodcatbtn">Asian Categories</button>
      </div>
      <div className="row">
        <div className="col-md-4">
        <Col
        // span={7}
        className="menu-cont"
        style={{
          paddingBottom: "0px",
          paddingRight: "0px",
          paddingLeft: "0px",
        }}
      >
        <Card />
      </Col>
    
        </div>

        <div className="col-md-4">
        <Col
        // span={7}
        className="menu-cont"
        style={{
          paddingBottom: "0px",
          paddingRight: "0px",
          paddingLeft: "0px",
        }}
      >
        <Card />
      </Col>
    
        </div>

      </div>
     </div>
  );
}

export default Fooditem;
