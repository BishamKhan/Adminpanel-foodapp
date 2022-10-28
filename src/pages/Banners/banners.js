import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Input, Row, Col, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./banners.css";

const { Meta } = Card;

function Banners() {
  const { Search } = Input;
  const navigate = useNavigate();

  return (
    <>
      <div className="main-banner">
        <h4>Banners</h4>
        <div>
          <div className="div-banner" style={{ display: "flex" }}>
            <div>
              <Search placeholder="Search By Name" enterButton className="search-icon" />
            </div>
            <div>
              <button
                className="bannerBtn"
                onClick={() => navigate("/addbanners")}
              >
                + Banner
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
                // style={{
                //   width: 240,
                // }}
                cover={
                  <div className="button-container">
                    <Button className="ban-btn" type="primary" shape="circle">
                    <EditOutlined />
                    </Button>
                    <Button className="ban-btn-right" type="primary" shape="circle">
                    <DeleteOutlined />
                    </Button>
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
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
                // style={{
                //   width: 240,
                // }}
                cover={
                  <div className="button-container">
                    <Button className="ban-btn" type="primary" shape="circle">
                    <EditOutlined />
                    </Button>
                    <Button className="ban-btn-right" type="primary" shape="circle">
                    <DeleteOutlined />
                    </Button>
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
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
            </Col><Col
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
                // style={{
                //   width: 240,
                // }}
                cover={
                  <div className="button-container">
                    <Button className="ban-btn" type="primary" shape="circle">
                    <EditOutlined />
                    </Button>
                    <Button className="ban-btn-right" type="primary" shape="circle">
                    <DeleteOutlined />
                    </Button>
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
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
            </Col><Col
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
                // style={{
                //   width: 240,
                // }}
                cover={
                  <div className="button-container">
                    <Button className="ban-btn" type="primary" shape="circle">
                    <EditOutlined />
                    </Button>
                    <Button className="ban-btn-right" type="primary" shape="circle">
                    <DeleteOutlined />
                    </Button>
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
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
            </Col><Col
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
                // style={{
                //   width: 240,
                // }}
                cover={
                  <div className="button-container">
                    <Button className="ban-btn" type="primary" shape="circle">
                    <EditOutlined />
                    </Button>
                    <Button className="ban-btn-right" type="primary" shape="circle">
                    <DeleteOutlined />
                    </Button>
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
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
            </Col><Col
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
                // style={{
                //   width: 240,
                // }}
                cover={
                  <div className="button-container">
                    <Button className="ban-btn" type="primary" shape="circle">
                    <EditOutlined />
                    </Button>
                    <Button className="ban-btn-right" type="primary" shape="circle">
                    <DeleteOutlined />
                    </Button>
                    <img
                      className="ban-image"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
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
export default Banners;
