import React from "react";
import { Card, Col, Row, Tabs, Divider } from "antd";
import "./Order.css";

function Order() {
  return (
    <>
      <div className="main-orders-container" style={{ display: "flex" }}>
       
        <div>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Pending" key="1">
              <div className="site-card-wrapper">
                <div>
                  <Row gutter={16}>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>
                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-rej"> Reject </button>
                            <button className="btn-con">Confirm</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>

                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-rej"> Reject </button>
                            <button className="btn-con">Confirm</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>

                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-rej"> Reject </button>
                            <button className="btn-con">Confirm</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>

                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-rej"> Reject </button>
                            <button className="btn-con">Confirm</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>

                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-rej"> Reject </button>
                            <button className="btn-con">Confirm</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>

                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-rej"> Reject </button>
                            <button className="btn-con">Confirm</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Active" key="2">
              <div className="site-card-wrapper">
                <div>
                  <Row gutter={16}>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>
                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-con">Confirmed</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>
                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-con">Confirmed</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>
                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-con">Confirmed</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>
                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-con">Confirmed</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="History" key="3">
              <div className="site-card-wrapper">
                <div>
                  <Row gutter={16}>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>
                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-con">Confirmed</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>
                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-con">Confirmed</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>
                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-con">Confirmed</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                    <Col
                      span={12}
                      className="Column"
                      style={{ paddingBottom: "14px" }}
                    >
                      <Card className="order-card">
                        <div class="row">
                          <h6 className="col-md-6">ORDER ID - 123</h6>
                          <p
                            style={{ textAlign: "right" }}
                            className="col-md-6"
                          >
                            ORDER DATE - <b>May 11, 2020, 05:50 PM</b>
                          </p>
                        </div>
                        <div className="food-name">
                          <img
                            alt="Food Image"
                            className="image"
                            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                          ></img>
                          <p className="col-xd-6 para">
                            Tocipapas x 7 <b>more</b>
                          </p>
                        </div>
                        <p
                          className="col-xd-6"
                          style={{ textAlign: "right", fontWeight: 700 }}
                        >
                          Payment - Cash
                        </p>
                        <Divider />
                        <div class="row">
                          <div class="col-md-6">
                            <h6>Order Price - $200</h6>
                            <p>Contact User - 5137511</p>
                          </div>
                          <div class="col-md-6" style={{ textAlign: "right" }}>
                            <button className="btn-con">Confirmed</button>
                          </div>
                        </div>
                        <div class="row"></div>
                        <div className="col-xs-6"></div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tabs.TabPane>
          </Tabs>   
        </div>
      </div>
    </>
  );
}
export default Order;
