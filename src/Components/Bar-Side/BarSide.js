import React, { useState } from "react";
import {
  BarChartOutlined,
  FormOutlined,
  UserOutlined,
  MenuOutlined,
  BankOutlined,
  ContainerOutlined,
  FormatPainterOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

function BarSide() {
  const navigate = useNavigate();
  const [items] = useState([
    {
      key: "item-1",
      label: "Dashboard",
      icon: <BarChartOutlined />,
      link: "/dashboard",
    },
    {
      key: "item-2",
      label: "Menu",
      icon: <MenuOutlined />,
      link: "/menu",
    },
    {
      key: "item-3",
      label: "Restaurants",
      icon: <BankOutlined />,
      link: "/restaurant",
    },
    {
      key: "item-4",
      label: "Drivers",
      icon: <BarChartOutlined />,
      link: "/drivers",
    },
    {
      key: "item-5",
      label: "Orders",
      icon: <ContainerOutlined />,
      link: "/orders",
    },
    {
      key: "item-6",
      label: "Banners",
      icon: <FormatPainterOutlined />,
      link: "/banners",
    },
    {
      key: "item-7",
      label: "Promotions",
      icon: <NotificationOutlined />,
      link: "/promotions",
    },
    {
      key: "item-8",
      label: "Users",
      icon: <UserOutlined />,
      link: "/users",
    },
    {
      key: "item-9",
      label: "Sub Menu",
      icon: <UserOutlined />,
      link: "/submenu",
    },
    {
      key: "item-10",
      label: "Reports",
      icon: <FormOutlined />,
      link: "/reports",
    },
  ]);
  return (
    <>
      <div className="Main-Div">
        <div className="main-container">
          <div className="logo-img">
            <img
              className="img"
              src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
            />
          </div>
          <div className="My-container">
            <div className="titles">
              {items.map((item, i) => (
                <div
                  key={1}
                  className="title"
                  onClick={() => navigate(item.link)}
                  
                  id={window.location.pathname == item.link ? "active" : ""}
                >
                  <div className="sidebar-icon">{item.icon}</div>
                  <div className="sidebar-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BarSide;
