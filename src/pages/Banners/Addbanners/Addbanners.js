import React from "react";
// import { Input } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./Addbanners.css";
import { useNavigate } from "react-router-dom";

function Addbanners() {
  // const { Search } = Input;
  const navigate = useNavigate();
  return (
    <>
      <div className="main-banner">
        <div className="main-div" style={{ display: "flex" }}>
          <h4>Add Banners</h4>
          <button onClick={() => navigate("/banners")} className="back-btn">
            <LeftOutlined />
            Back
          </button>
        </div>
        <div
          className="row addmain"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-md-6 addresdiv1">
            <div>
              <p>RESTUARANT</p>
              <input placeholder="Name" />
            </div>
          </div>
          <div className="col-md-6 addresdiv1">
            <div>
              <p>RESTUARANT BRANCH</p>
              <input placeholder="NAME (ARABIC)" />
            </div>
          </div>

          <div className="col-md-6 addresdiv1">
            <div>
              <p>CATEGORIES</p>
              <input placeholder="TAX(%)" />
            </div>
          </div>
          <div className="col-md-6 addresdiv1">
            <div>
              <p>BANNER VALIDITY</p>
              <input placeholder="DESCRIPTION" />
            </div>
          </div>

          <div className="col-md-6 addresdiv1">
            <div>
              <p>BANNER NAME</p>
              <input placeholder="DESCRIPTION (ARABIC)" />
            </div>
          </div>
          <div className="col-md-6 addresdiv1">
            <div>
              <p>BANNER NAME (ARABIC)</p>
              <input placeholder="DESCRIPTION (ARABIC)" />
            </div>
          </div>

          <div className="col-md-6 addresdiv1">
            <div>
              <p>BANNER IMAGE (WEBSITE)</p>
              <div className="col-md-12 profilesavebtn">
                <button>Choose Web Banner Image</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 addresdiv1">
            <div>
              <p>BANNER IMAGE (MOBILE)</p>
              <div className="col-md-12 profilesavebtn">
                <button>Choose Mobile Banner Image</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 profilesavebtn">
              <button>SAVE CHANGES</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Addbanners;
