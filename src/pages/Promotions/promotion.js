import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Input, Row, Col, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./promotion.css";

const { Meta } = Card;

function Promotion() {
  const { Search } = Input;
  const navigate = useNavigate();

  return (
    <>
      <div className="main-banner">
        <h4>Promo Code</h4>
        <div>
          <div className="div-banner" style={{ display: "flex" }}>
            <div>
              <Search placeholder="Search By Name" enterButton />
            </div>
            <div>
              <button
                className="promoBtn"
                onClick={() => navigate("/promocode")}
              >
                + Promo Code
              </button>
            </div>
          </div>
        </div>
        <div className="banner-cards">
          <Row gutter={16}>
            <Col
              span={7}
              className="banner-cont"
              style={{
                paddingBottom: "18px",
                paddingRight: "0px",
                paddingLeft: "0px",
              }}
            >
              <Card
                hoverable
                className="banner-image"
                cover={
                  <div className="button-container">
                    <EditOutlined className="ban-btn" />
                    <DeleteOutlined className="ban-btn-right" />
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://static.vecteezy.com/system/resources/previews/002/297/065/original/abstract-blue-wave-background-free-vector.jpg"
                    />
                  </div>
                }
              >
                <div className="banner-div">
                  <h5>Mexican</h5>
                  <p>By : Paradise</p>
                  <p>Starting Date : Oct 29, 2022</p>
                  <p>Expiry Date : Oct 30, 2022</p>
                </div>
              </Card>
            </Col>
            <Col
              span={7}
              className="banner-cont"
              style={{
                paddingBottom: "18px",
                paddingRight: "0px",
                paddingLeft: "0px",
              }}
            >
              <Card
                hoverable
                className="banner-image"
                cover={
                  <div className="button-container">
                    <EditOutlined className="ban-btn" />
                    <DeleteOutlined className="ban-btn-right" />
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://static.vecteezy.com/system/resources/previews/002/297/065/original/abstract-blue-wave-background-free-vector.jpg"
                    />
                  </div>
                }
              >
                <div className="banner-div">
                  <h5>Mexican</h5>
                  <p>By : Paradise</p>
                  <p>Starting Date : Oct 29, 2022</p>
                  <p>Expiry Date : Oct 30, 2022</p>
                </div>
              </Card>
            </Col>
            <Col
              span={7}
              className="banner-cont"
              style={{
                paddingBottom: "18px",
                paddingRight: "0px",
                paddingLeft: "0px",
              }}
            >
              <Card
                hoverable
                className="banner-image"
                cover={
                  <div className="button-container">
                    <EditOutlined className="ban-btn" />
                    <DeleteOutlined className="ban-btn-right" />
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://static.vecteezy.com/system/resources/previews/002/297/065/original/abstract-blue-wave-background-free-vector.jpg"
                    />
                  </div>
                }
              >
                <div className="banner-div">
                  <h5>Mexican</h5>
                  <p>By : Paradise</p>
                  <p>Starting Date : Oct 29, 2022</p>
                  <p>Expiry Date : Oct 30, 2022</p>
                </div>
              </Card>
            </Col>
            <Col
              span={7}
              className="banner-cont"
              style={{
                paddingBottom: "18px",
                paddingRight: "0px",
                paddingLeft: "0px",
              }}
            >
              <Card
                hoverable
                className="banner-image"
                cover={
                  <div className="button-container">
                    <EditOutlined className="ban-btn" />
                    <DeleteOutlined className="ban-btn-right" />
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://static.vecteezy.com/system/resources/previews/002/297/065/original/abstract-blue-wave-background-free-vector.jpg"
                    />
                  </div>
                }
              >
                <div className="banner-div">
                  <h5>Mexican</h5>
                  <p>By : Paradise</p>
                  <p>Starting Date : Oct 29, 2022</p>
                  <p>Expiry Date : Oct 30, 2022</p>
                </div>
              </Card>
            </Col>
            <Col
              span={7}
              className="banner-cont"
              style={{
                paddingBottom: "18px",
                paddingRight: "0px",
                paddingLeft: "0px",
              }}
            >
              <Card
                hoverable
                className="banner-image"
                cover={
                  <div className="button-container">
                    <EditOutlined className="ban-btn" />
                    <DeleteOutlined className="ban-btn-right" />
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://static.vecteezy.com/system/resources/previews/002/297/065/original/abstract-blue-wave-background-free-vector.jpg"
                    />
                  </div>
                }
              >
                <div className="banner-div">
                  <h5>Mexican</h5>
                  <p>By : Paradise</p>
                  <p>Starting Date : Oct 29, 2022</p>
                  <p>Expiry Date : Oct 30, 2022</p>
                </div>
              </Card>
            </Col>
            <Col
              span={7}
              className="banner-cont"
              style={{
                paddingBottom: "18px",
                paddingRight: "0px",
                paddingLeft: "0px",
              }}
            >
              <Card
                hoverable
                className="banner-image"
                cover={
                  <div className="button-container">
                    <EditOutlined className="ban-btn" />
                    <DeleteOutlined className="ban-btn-right" />
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://static.vecteezy.com/system/resources/previews/002/297/065/original/abstract-blue-wave-background-free-vector.jpg"
                    />
                  </div>
                }
              >
                <div className="banner-div">
                  <h5>Mexican</h5>
                  <p>By : Paradise</p>
                  <p>Starting Date : Oct 29, 2022</p>
                  <p>Expiry Date : Oct 30, 2022</p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
export default Promotion;
