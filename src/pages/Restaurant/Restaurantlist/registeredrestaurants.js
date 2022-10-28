
import React from 'react';
import {Input} from 'antd'
import { RetweetOutlined } from "@ant-design/icons";

import '../restaurant.css'

import {useNavigate} from 'react-router-dom';


function Registeredrestaurants() {
    const { Search } = Input;
    const navigate = useNavigate();

  return (
    <div className="div1" style={{display:"flex"}} >
            <div>
         <Search placeholder="input search text" enterButton className="search-icon"/>
            </div>
         <div className='regdiv2'>
            <button className='col-md-6 refbtn'>
               
            <RetweetOutlined />
               Refresh</button>
            <button className='addresbtn' onClick={() => navigate("/addrestaurants")}>+ Add restaurant</button>
         </div>
         
    </div>
  );
}

export default Registeredrestaurants;
