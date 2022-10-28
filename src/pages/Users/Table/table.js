import { Space, Table, Tag,Switch } from "antd";
import React from "react";
import './table.css'
import img from '../../../images/foodcover.jpg'
import { useNavigate } from "react-router-dom";

 

function Tablecomp() {
  
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

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
            <div className='imgdp'>
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
      title: "OTP VERIFIED",
      dataIndex: "otpverified",
      key: "otpverified",
    },
    {
      title: "FLAGGED",
      dataIndex: "flagged",
      key: "flagged",
    },
    {
      title: "JOINED ON",
      dataIndex: "joinedon",
      key: "joinedon",
    },
    {
        title: "Status",
        dataIndex:"status",
        render: (_, record) => (
            <Space size="middle">
              <Switch defaultChecked onChange={onChange} />
            </Space>
          ),
      },

      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <button className="tablebtn">Edit</button>
            <button className="tablebtn">Reset Password</button>
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
      otpverified: "Yes",
      flagged: "No",
      joinedon: "24 oct 2022"
    },
    {
      id: "2",
      name: "bisham",
      email: "david@gmail.com",
      phone: "12344567899",
      otpverified: "Yes",
      flagged: "No",
      joinedon: "24 oct 2022"
    },
    {
      id: "3",
      name: "bisham",
      email: "david@gmail.com",
      phone: "12344567899",
      otpverified: "Yes",
      flagged: "No",
      joinedon: "24 oct 2022"
    },
    {
      id: "4",
      name: "bisham",
      email: "david@gmail.com",
      phone: "12344567899",
      otpverified: "Yes",
      flagged: "No",
      joinedon: "24 oct 2022"
    },
  ];

  return (
    <div className="drivers-table" >
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Tablecomp;