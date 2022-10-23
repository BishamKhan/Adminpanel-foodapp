import { LeftOutlined } from "@ant-design/icons";
// import { Tabs,Button,Input,Space,Table,Tag } from 'antd'
import { useNavigate } from "react-router-dom";
import AddImage from "../Add Image/AddImage";
import "../../../pages/Restaurants/Profile/profile.css";

function Categories() {
  const navigate = useNavigate();
  return (
    <div className="addresmain">
      <div>
        {/* <div className='col-md-2'></div> */}
        <div className="main-div" style={{ display: "flex" }}>
          <h4>Add New Category</h4>
          <button onClick={() => navigate("/menu")}>
            <LeftOutlined className="categories-icon" />
            Category List
          </button>
        </div>
        <div
          className="row addmain"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-md-6 addresdiv1">
            <div>
              <p>NAME</p>
              <input placeholder="Name" />
            </div>
          </div>
          <div className="col-md-6 addresdiv1">
            <div>
              <p>NAME (ARABIC)</p>
              <input placeholder="NAME (ARABIC)" />
            </div>
          </div>

          <div className="col-md-6 addresdiv1">
            <div>
              <p>TAX(%)</p>
              <input placeholder="TAX(%)" />
            </div>
          </div>
          <div className="col-md-6 addresdiv1"></div>
          <div className="col-md-6 addresdiv1">
            <div>
              <p>DESCRIPTION</p>
              <input placeholder="DESCRIPTION" />
            </div>
          </div>

          <div className="col-md-6 addresdiv1">
            <div>
              <p>DESCRIPTION (ARABIC)</p>
              <input placeholder="DESCRIPTION (ARABIC)" />
            </div>
          </div>
          <div className="col-md-6 addresdiv1">
            <div>
              <p>WEBSITE IMAGE</p>
              <AddImage />
            </div>
          </div>

          <div className="col-md-6 addresdiv1">
            <div>
              <p>APP IMAGE</p>
              <AddImage />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 profilesavebtn">
              <button>Submit</button>
            </div>
          </div>
        </div>

        {/* <div className='col-md-2'></div> */}
      </div>
    </div>
  );
}

export default Categories;
