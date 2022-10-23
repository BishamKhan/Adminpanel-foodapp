import "./card.css";
import { useNavigate } from "react-router-dom";
import {EditOutlined} from "@ant-design/icons";
function Card() {
  const navigate = useNavigate();

  return (
    <div className="menu-crd">
      <div className="tabl">
        <table className="Table">
          <tr>
            <th className="menu-container">
              <div>Categories</div>
              <div>
                <button  onClick={() => navigate("/categories")}>+</button>
                <button>-</button>
              </div>
            </th>
          </tr>
          <tr>
            <td style={{ paddingTop: "3%" }}>
              <div>Asian</div>
              <div>
                <EditOutlined className="edit-icon"/>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
                <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td>
              <div>INDIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>PAKISTANI</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>ITALIAN</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>CHINESE</div>
              <div>
              <EditOutlined />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Card;
