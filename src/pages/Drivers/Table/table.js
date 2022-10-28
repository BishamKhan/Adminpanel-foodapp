import { Space, Table, Tag } from "antd";
import React from "react";
import './table.css'
import img from '../../../images/foodcover.jpg'
import { useNavigate } from "react-router-dom";

function Tablecomp() {
  const navigate = useNavigate();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "IMAGE",
      key: "image",
      render: () => (
        <Space size="middle">
            <div className='revdp'>
                <img className="" src={img} />
                </div>
        </Space>
      ),

    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "EMAIL",
      key: "email",
      dataIndex: "email",
      
    },
    {
      title: "PHONE",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "OCCUPATION",
      dataIndex: "occupation",
      key: "occupation",
    },
    {
      title: "RESTAURANT",
      dataIndex: "Restaurant",
      key: "Restaurant",
    },
    {
      title: "COMMISSION",
      dataIndex: "commission",
      key: "commission",
    },
    {
      title: "REVENUE",
      dataIndex:"revenue",
      key: "revenue",
    },
    {
        title: "Status",
        dataIndex:"status",
        render: (_, record) => (
            <Space size="middle">
              <button className="">open</button>
            </Space>
          ),
      },

      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <button className="tablebtn">Edit</button>
            <button>...</button>
          </Space>
        ),
      },
  ];
  const data = [
    {
      id: "1",
      name: "bisham",
      email: "david@gmail.com",
      phone: "12344567899",
      occupation: "delivery agent",
      Restaurant: "All",
      commission: "5(flat)",
      revenue: "$1312",
    },
    {
        id: "2",
        name: "raheel",
        email: "david@gmail.com",
        phone: "12344567899",
        occupation: "delivery agent",
        Restaurant: "All",
        commission: "5(flat)",
        revenue: "$1312",
      },
      {
        id: "3",
        name: "maha",
        email: "david@gmail.com",
        phone: "12344567899",
        occupation: "delivery agent",
        Restaurant: "All",
        commission: "5(flat)",
        revenue: "$1312",
      },
      {
        id: "4",
        name: "bisham",
        email: "david@gmail.com",
        phone: "12344567899",
        occupation: "delivery agent",
        Restaurant: "All",
        commission: "5(flat)",
        revenue: "$1312",
      },
    
  ];

  return (
    <div className="drivers-table" >
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Tablecomp;