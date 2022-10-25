
import React from 'react';
import Tablecomp from './Table/table';
import './driver.css'
import {Input} from 'antd'

import {useNavigate} from 'react-router-dom';

function Drivers() {
    
    const { Search } = Input;
    const navigate = useNavigate();
    
  return (
    <div className="drivermain">
        <div className='row'>
            <div className='col-md-12 driverdiv'>
                <h4>Drivers</h4>
                <div className="driverdiv1" >
            <div>
         <Search placeholder="input search text" enterButton />
            </div>
         <div className='drivdiv2'>
                <p>Admin level</p>
                <button>Tog</button>
                <input type="dropdown"/>
            <button className='refbtn'>Refresh</button>
            <button className='addresbtn'>+ Add Driver</button>
         </div>
         
    </div>
            </div>
        </div>
        <Tablecomp/>
    </div>
  );
}

export default Drivers;
