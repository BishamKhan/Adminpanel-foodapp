import React from 'react';

import './configuration.css'

function Configuration() {

  return (
    <div className="configmain">
        <div className='configdiv1'>
            <div className='row configsubdiv1'>
                <h4>Delivery Timings</h4>
                <div className='col-md-3'>
                    <div>
                        <p>Prepration Time</p>
                        <input placeholder='10:10:10'/>
                    </div>
                </div>
                </div>
                
                    
                <div className='row configsubdiv1'>
                <div className='col-md-3'>
                    <div>
                        <p>Minimum Delivery Time</p>
                        <input placeholder='10:10:10'/>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div>
                        <p>Maximum Delivery Time</p>
                        <input placeholder='10:10:10'/>
                    </div>
                </div>
            <h5>SET TIME SLOT</h5>
            </div>

            <div className='configdiv2'>
            <div className='row configsubdiv2'>
                <div className='col-md-12 configsubdiv3'>
                <p>Monday</p>
                <input type="time"/>
                <p>To</p>
                <input type="time"/>
                <button>Tog</button>
                </div>

                <div className='col-md-12 configsubdiv3'>
                <p>Tuesday</p>
                <input type="time"/>
                <p>To</p>
                <input type="time"/>
                <button>Tog</button>
                </div>

                <div className='col-md-12 configsubdiv3'>
                <p>Wednesday</p>
                <input type="time"/>
                <p>To</p>
                <input type="time"/>
                <button>Tog</button>
                </div>

                <div className='col-md-12 configsubdiv3'>
                <p>Thursday</p>
                <input type="time"/>
                <p>To</p>
                <input type="time"/>
                <button>Tog</button>
                </div>

                <div className='col-md-12 configsubdiv3'>
                <p>Friday</p>
                <input type="time"/>
                <p>To</p>
                <input type="time"/>
                <button>Tog</button>
                </div>

                <div className='col-md-12 configsubdiv3'>
                <p>Saturday</p>
                <input type="time"/>
                <p>To</p>
                <input type="time"/>
                <button>Tog</button>
                </div>
                
                <div className='col-md-12 configsubdiv3'>
                <p>Sunday</p>
                <input type="time"/>
                <p>To</p>
                <input type="time"/>
                <button>Tog</button>
                </div>

            </div>                 
            </div>
        </div>
    </div>
  );
}

export default Configuration;
