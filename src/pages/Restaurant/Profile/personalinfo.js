import React from "react";
import coverpic from "../../../images/foodcover.jpg";
import "./profile.css";
import { Tabs } from "antd";

function Personalinfo() {
  return (
    <div className="personalinfomain">
      <div className="personalinfodiv1">
        <div className="row profmain">
          <h4>Personal Info</h4>
          <div className="col-md-4 profdiv1">
            <div>
              <p>NAME</p>
              <input placeholder="Name" />
            </div>
          </div>
          <div className="col-md-4 profdiv1">
            <div>
              <p>ADDRESS</p>
              <input placeholder="ADDRESS profdiv1" />
            </div>
          </div>
          <div className="col-md-4 profdiv1">
            <div>
              <p>PHONE</p>
              <input placeholder="PHONE " />
            </div>
          </div>

          <div className="col-md-4 profdiv1">
            <div>
              <p>EMAIL</p>
              <input placeholder="EMAIL" />
            </div>
          </div>
          <div className="col-md-4 profdiv1">
            <div>
              <p>BASE DELIVERY CHARGES</p>
              <input placeholder="BASE CHARGES" />
            </div>
          </div>
          <div className="col-md-4 profdiv1">
            <div>
              <p>DELIVERY CHARGES (PER KM)</p>
              <input placeholder="DELIVERY CHARGES (PER KM) " />
            </div>
          </div>

          <div className="col-md-4 profdiv1">
            <div>
              <p>DELIVERY MODE</p>
              <input placeholder="DELIVERY MODE" />
            </div>
          </div>
          <div className="col-md-4 profdiv1">
            <div>
              <p>ADMIN DELIVERY COMMISSION (%)</p>
              <input placeholder="ADMIN DELIVERY COMMISSION (%)" />
            </div>
          </div>
          <div className="col-md-4 profdiv1">
            <div>
              <p>ADMIN PICKUP COMMISSION (%)</p>
              <input placeholder="ADMIN PICKUP COMMISSION (%) " />
            </div>
          </div>
          <div className="col-md-4 profdiv1">
            <div>
              <p>MINIMUN ORDER AMOUNT</p>
              <input placeholder="MINIMUN ORDER AMOUNT" />
            </div>
          </div>
          <div className="col-md-4 profdiv1">
            <div>
              <p>LICESENCE NUMBER</p>
              <input placeholder="LICESENCE NUMBER" />
            </div>
          </div>
        </div>
      </div>

      <div className="personalinfodiv2">
        <div className="row">
          <div className="col-md-12 personalinfodiv3">
            <h4>Delivery Area</h4>
            <p>
              Enter a Radius from Store's central location in which you want to
              deliver.
            </p>

            <div className="personalinfodiv5">
              <div className="personalinfodiv4">
                <p>Enter Delivery Radius (KM)</p>
                <input placeholder="50 Km" />
              </div>
              <p>Note your store will deliver within the radius you enter.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 profilesavebtn">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Personalinfo;
