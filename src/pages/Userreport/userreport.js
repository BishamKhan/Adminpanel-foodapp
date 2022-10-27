
import React from 'react';
import Tablecomp from './table/table';
import './userreport.css'

function Userreport() {

  return (
    <div className="urepmain">
        <div className='row urepdiv1'>
            <div className='col-lg-4 urepsubdiv1'>
                <p>Search</p>
                <input placeholder='Search By Id/Name/Email/Phone number'/>
            </div>

            <div className='col-lg-4 urepsubdiv2'>
                <p>Select Date</p>
                <input placeholder='Select Date' type="date"/>
            </div>

            <div className='col-lg-4 urepsubdiv3'>
                <button className='downbtn'>Download CSV</button>
                <button className='resetbtn'>Reset</button>
                <button className='filterbtn'>Filter</button>
            </div>
        </div>

        <div className='row urepdiv2'>
            <div className='col-md-12'>
                <Tablecomp/>
            </div>
        </div>
        </div>
  );
}

export default Userreport;
