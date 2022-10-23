import React from "react";
import {
  DesktopOutlined,
  DollarCircleOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="main-navbar">
      <div className="nav-bar">
        <div class="navbar">
          <a href="#home">
            <DesktopOutlined className="icon-desk" />
            View Website
          </a>
          <a href="#news">
            <DollarCircleOutlined className="icon-bill" />
            Billing
          </a>
          <div>
            <button className="trail-btn">Free Trail: Expired</button>
          </div>
          <a href="#news">FOODS</a>
          <div class="dropdown">
            <button class="dropbtn">
              English
              <DownOutlined className="icon-drop" />
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
            </div>
          </div>
          <div className="nav-logo-img">
            <img
              className="img"
              src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
