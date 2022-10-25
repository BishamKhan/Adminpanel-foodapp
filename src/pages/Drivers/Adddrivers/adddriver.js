
import React from 'react';
import {Input, Radio } from 'antd'
import './adddriver.css'
import {useNavigate} from 'react-router-dom';
import img from "../../../images/dp.png"

function AddDriver() {
    
    const { Search } = Input;
    const navigate = useNavigate();
    
  return (
    <div className="adddriver">
        <div className='row addrive'>
            <div className='col-md-12 adsubdrive'>
                <div className='profimage'>
                    <img src={img}/>
                </div>
                <p>Add Profile Picture</p>
            </div>

            <div className='col-md-6 adddriv1'>
                <p>Driver Access</p>
                <Radio>All Restaurant</Radio>
                <Radio>Choose Restaurant</Radio>
            </div>

            <div className='col-md-6 adddriv2'>
                <p>Name</p>
                <input />
            </div>

            <div className='col-md-6 adddriv1'>
                <p>Email</p>
                <input />
            </div>

            <div className='col-md-6 adddriv2'>
                <p>Phone Number</p>
                <input />
            </div>

            <div className='col-md-6 adddriv1'>
                <p>Occupation</p>
                <input />
            </div>

            <div className='col-md-6 adddriv2'>
                <div style={{display:"flex"}}>
                <p>Commission</p>
                <Radio>%</Radio>
                <Radio>Flat</Radio>
                </div>
                <input />
            </div>

            <div className='col-md-6 adddriv1'>
                <p>Id No.</p>
                <input />
            </div>
            

            </div>

    </div>
  );
}

export default AddDriver;
