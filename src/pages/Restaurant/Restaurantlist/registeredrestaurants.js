
import React from 'react';
import {Input} from 'antd'
import '../restaurant.css'

import {useNavigate} from 'react-router-dom';


function Registeredrestaurants() {
    const { Search } = Input;
    const navigate = useNavigate();

  return (
    <div className="div1" style={{display:"flex"}} >
        {/* <div style={{width:"300px", backgroundColor:"skyblue"}}>
            <h1>sidebar</h1>
        </div> */}
            <div>
         <Search placeholder="input search text" enterButton />
            </div>
         <div className='regdiv2'>
            <button className='refbtn'>Refresh</button>
            <button className='addresbtn' onClick={() => navigate("/addrestaurants")}>+ Add restaurant</button>
         </div>
         
    </div>
  );
}

export default Registeredrestaurants;
