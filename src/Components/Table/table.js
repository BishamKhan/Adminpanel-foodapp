
import { Space, Table, Tag } from 'antd';
import React from 'react';


function Tablecomp() {

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        //   render: (text) => <a>{text}</a>,
        },
        {
          title: 'RESTAURANT NAME',
          dataIndex: 'restaurantname',
          key: 'restaurantname',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'PHONE',
          key: 'phone',
          dataIndex: 'phone',
        //   render: (_, { tags }) => (
        //     <>
        //       {tags.map((tag) => {
        //         let color = tag.length > 5 ? 'geekblue' : 'green';
        //         if (tag === 'loser') {
        //           color = 'volcano';
        //         }
        //         return (
        //           <Tag color={color} key={tag}>
        //             {tag.toUpperCase()}
        //           </Tag>
        //         );
        //       })}
        //     </>
        //   ),
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'DELIVERY COMMISSION',
            dataIndex: 'deliverycommission',
            key: 'deliverycommission',
        },
        {
            title: 'PICK-UP COMMISSION',
            dataIndex: 'pickupcommission',
            key: 'pickupcommission',
        },
        {
            title: 'REVENUE',
            dataIndex: 'revenue',
            key: 'revenue',
        },
        {
            title: 'Stautus',
            dataIndex: 'status',
            key: 'status',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              {/* <a>Invite {record.name}</a> */}
              <button className='tablebtn'>View Analytics</button>
              {/* <a>View Analytics</a> */}
            </Space>
          ),
        },
      ];
      const data = [
        {
          id: '1',
          restaurantname:'hot n roll',
          address: 'New York No. 1 Lake Park',
          phone: '12344567899',
          email: 'david@gmail.com',
          deliverycommission:"100",
          pickupcommission:"50",
          revenue:13231,
          status:"on/off",
          tags: ['nice', 'developer'],
        },
        {
            id: '2',
            restaurantname:'hot n roll',
            address: 'New York No. 1 Lake Park',
            phone: '12344567899',
            email: 'david@gmail.com',
            deliverycommission:"100",
            pickupcommission:"50",
            revenue:13231,
            status:"on/off",
            tags: ['nice', 'developer'],
          },
          {
            id: '3',
            restaurantname:'hot n roll',
            address: 'New York No. 1 Lake Park',
            phone: '12344567899',
            email: 'david@gmail.com',
            deliverycommission:"100",
            pickupcommission:"50",
            revenue:13231,
            status:"on/off",
            tags: ['nice', 'developer'],
          },
          {
            id: '4',
            restaurantname:'hot n roll',
            address: 'New York No. 1 Lake Park',
            phone: '12344567899',
            email: 'david@gmail.com',
            deliverycommission:"100",
            pickupcommission:"50",
            revenue:13231,
            status:"on/off",
            tags: ['nice', 'developer'],
          },
          {
            id: '5',
            restaurantname:'hot n roll',
            address: 'New York No. 1 Lake Park',
            phone: '12344567899',
            email: 'david@gmail.com',
            deliverycommission:"100",
            pickupcommission:"50",
            revenue:13231,
            status:"on/off",
            tags: ['nice', 'developer'],
          },
          {
            id: '6',
            restaurantname:'hot n roll',
            address: 'New York No. 1 Lake Park',
            phone: '12344567899',
            email: 'david@gmail.com',
            deliverycommission:"100",
            pickupcommission:"50",
            revenue:13231,
            status:"on/off",
            tags: ['nice', 'developer'],
          },
          {
            id: '7',
            restaurantname:'hot n roll',
            address: 'New York No. 1 Lake Park',
            phone: '12344567899',
            email: 'david@gmail.com',
            deliverycommission:"100",
            pickupcommission:"50",
            revenue:13231,
            status:"on/off",
            tags: ['nice', 'developer'],
          },
          {
            id: '8',
            restaurantname:'hot n roll',
            address: 'New York No. 1 Lake Park',
            phone: '12344567899',
            email: 'david@gmail.com',
            deliverycommission:"100",
            pickupcommission:"50",
            revenue:13231,
            status:"on/off",
            tags: ['nice', 'developer'],
          },
         
      ];


  return (
    <div className="" style={{display:"flex"}}>
        {/* <div style={{width:"300px", backgroundColor:"skyblue"}}>
            <h1>sidebar</h1>
        </div> */}
    <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Tablecomp;
