import React from "react";
import { Col, Row, Tabs, Divider } from "antd";
import Card from "../../Components/Menucard/card";
import "./menu.css";

function menu() {
  return (
    <div className="main-menu">
      <h4>Menu</h4>
      <div className="card-container">
        <Row gutter={16}>
          <Col span={7} className="menu-cont" style={{ paddingBottom: "0px", paddingRight:"0px", paddingLeft:"0px" }}>
            <Card />
          </Col>
          <Col span={7} className="menu-cont"  style={{ paddingBottom: "0px", paddingRight:"0px", paddingLeft:"0px" }}>
            <Card />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default menu;
