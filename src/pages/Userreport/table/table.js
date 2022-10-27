import { Space, Table, Tag,Switch, Checkbox } from "antd";
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
        title: "Checkbox",
        key: "checkbox",
        render: () => (
            <Space size="middle">
                <Checkbox/>
            </Space>
          ),
      },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
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
      title: "REGISTERED ON",
      dataIndex: "registeredon",
      key: "registeredon",
    },
    {
      title: "TOTAL ORDERS",
      dataIndex: "totalorders",
      key: "totalorders",
    },
  ];
  const data = [
    {
      id: "1",
      name: "bisham",
      email: "david@gmail.com",
      phone: "12344567899",
      registeredon: "Feb 13th 2022 8:00",
      totalorders: "10",
    },
    {
      id: "2",      
      name: "bisham",
      email: "david@gmail.com",
      phone: "12344567899",
      registeredon: "Feb 13th 2022 8:00",
      totalorders: "10",
    },
    {
      id: "3",
      name: "bisham",
      email: "david@gmail.com",
      phone: "12344567899",
      registeredon: "Feb 13th 2022 8:00",
      totalorders: "10",
    },
    {
      id: "4",
      name: "bisham",
      email: "david@gmail.com",
      phone: "12344567899",
      registeredon: "Feb 13th 2022 8:00",
      totalorders: "10",
    },
    {
        id: "5",
        name: "bisham",
        email: "david@gmail.com",
        phone: "12344567899",
        registeredon: "Feb 13th 2022 8:00",
        totalorders: "10",
      },
      {
        id: "6",
        name: "bisham",
        email: "david@gmail.com",
        phone: "12344567899",
        registeredon: "Feb 13th 2022 8:00",
        totalorders: "10",
      },
      {
        id: "7",
        name: "bisham",
        email: "david@gmail.com",
        phone: "12344567899",
        registeredon: "Feb 13th 2022 8:00",
        totalorders: "10",
      },
      {
        id: "8",
        name: "bisham",
        email: "david@gmail.com",
        phone: "12344567899",
        registeredon: "Feb 13th 2022 8:00",
        totalorders: "10",
      },
  ];

  return (
    <div className="" >
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Tablecomp;