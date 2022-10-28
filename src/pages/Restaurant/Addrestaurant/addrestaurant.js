
import React from 'react';
// import { Tabs,Button,Input,Space,Table,Tag } from 'antd'
import './addrestaurant.css'

import {useNavigate} from 'react-router-dom';

function Addrestaurants() {
    
    const navigate = useNavigate();
  return (
    <div className="addresmain">
        <div className='row addmain'>
            
            {/* <div className='col-md-2'></div> */}
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <h4>Restaurant Registration</h4>
            <button onClick={() => navigate("/")}>Back</button>
            </div>
            <div className='col-md-6 addresdiv1'>
                <div>
                <p>RESTAURANT NAME</p>
                <input placeholder='Restaurant Name'/>
                </div>

            </div>
            <div className='col-md-6 addresdiv1'>
                <div>
                <p>RESTAURANT EMAIL</p>
                <input placeholder='Restaurant Name'/>
                </div>
            </div>

            <div className='col-md-6 addresdiv1'>
                <div>
                <p>RESTAURANT PHONE</p>
                <input placeholder='Restaurant Name'/>
                </div>

            </div>
            <div className='col-md-6 addresdiv1'>
                <div>
                <p>RESTAURANT ADDRESS</p>
                <input placeholder='Restaurant Name'/>
                </div>
            </div>

            <div className='col-md-6 addresdiv1'>
                <div>
                <p>DELIVERY MODE</p>
                <input placeholder='Restaurant Name'/>
                </div>

            </div>
            <div className='col-md-6 addresdiv1'>
                <div>
                <p>ADMIN DELIVERY COMMISSION(%)</p>
                <input placeholder='Restaurant Name'/>
                </div>
            </div>

            <div className='col-md-6 addresdiv1'>
                <div>
                <p>ADMIN PICKUP COMMISSION(%)</p>
                <input placeholder='Restaurant Name'/>
                </div>

            </div>
            <div className='col-md-6 addresdiv1'>
                <div>
                <p>LICESENCE NUMBER</p>
                <input placeholder='Restaurant Name'/>
                </div>
            </div>


            {/* <div className='col-md-2'></div> */}
        </div>
    </div>
  );
}

export default Addrestaurants;
