import React from "react";
import "./review.css";
import img from "../../images/foodcover.jpg";

function Review() {
  return (
    <div className="reviewmain">
      <div className="row">
        <div className="col-md-12 reviewdiv1">
          <div className="revdp">
            <img src={img} />
          </div>
          <div className="userinfo">
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "0%",
              }}
            >
              Bisham
            </p>
            <p style={{ fontSize: "16px", color: "#bbb", marginBottom: "0%" }}>
              Oct 11, 2022
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "0%",
              }}
            >
              3
            </p>
          </div>
        </div>

        <div className="col-md-12 reviewdiv1">
          <div className="revdp">
            <img src={img} />
          </div>
          <div className="userinfo">
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "0%",
              }}
            >
              Bisham
            </p>
            <p style={{ fontSize: "16px", color: "#bbb", marginBottom: "0%" }}>
              Oct 11, 2022
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "0%",
              }}
            >
              3
            </p>
          </div>
        </div>

        <div className="col-md-12 reviewdiv1">
          <div className="revdp">
            <img src={img} />
          </div>
          <div className="userinfo">
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "0%",
              }}
            >
              Bisham
            </p>
            <p style={{ fontSize: "16px", color: "#bbb", marginBottom: "0%" }}>
              Oct 11, 2022
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "0%",
              }}
            >
              3
            </p>
          </div>
        </div>

        <div className="col-md-12 reviewdiv1">
          <div className="revdp">
            <img src={img} />
          </div>
          <div className="userinfo">
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "0%",
              }}
            >
              Bisham
            </p>
            <p style={{ fontSize: "16px", color: "#bbb", marginBottom: "0%" }}>
              Oct 11, 2022
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "0%",
              }}
            >
              3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
