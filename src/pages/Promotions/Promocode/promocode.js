import React from "react";
import { useNavigate } from "react-router-dom";

function Promocode() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-banner">
        <div className="main-div" style={{ display: "flex" }}>
          <h4>Add Promo</h4>
          <button
            onClick={() => navigate("/promotions")}
            className="category-list-btn"
          >
            Back
          </button>
        </div>
        <div
          className="row addmain"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-md-6 addresdiv1">
            <div>
              <p>PROMO CODE NAME</p>
              <input placeholder="Name" />
            </div>
          </div>
          <div className="col-md-6 addresdiv1">
            <div>
              <p>PROMO CODE DESCRIPTION</p>
              <input placeholder="NAME (ARABIC)" />
            </div>
          </div>

          <div className="col-md-6 addresdiv1">
            <div>
              <p>PROMO CODE DESCRIPTION</p>
              <input placeholder="TAX(%)" />
            </div>
          </div>
          <div className="col-md-6 addresdiv1">
            <div>
              <p>MINIMUM BASKET VALUE</p>
              <input placeholder="DESCRIPTION" />
            </div>
          </div>

          <div className="col-md-6 addresdiv1">
            <div>
              <p>PROMO BEARER</p>
              <input placeholder="DESCRIPTION (ARABIC)" />
            </div>
          </div>
          <div className="col-md-6 addresdiv1">
            <div>
              <p>COMMISSION ON</p>
              <input placeholder="DESCRIPTION (ARABIC)" />
            </div>
          </div>

          <div className="col-md-6 addresdiv1">
            <div>
              <p>TOTAL NO. OF VOUCHERS</p>
              <input placeholder="DESCRIPTION (ARABIC)" />
            </div>
          </div>
          <div className="col-md-6 addresdiv1">
            <div>
              <p>NO. OF REDEEMS ALLOWED (PER USER)</p>
              <input placeholder="DESCRIPTION (ARABIC)" />
            </div>
          </div>
          <div className="col-md-6 addresdiv1"></div>
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
export default Promocode;
