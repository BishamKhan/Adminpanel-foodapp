import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
// import Menu from "./pages/Menu/menu";
// import Restaurant from "./pages/Restaurants/index";
// import Resprofile from "./pages/restaurants/profile/resprofile";
import BarSide from "./Components/Bar-Side/BarSide";
import NavBar from "./Components/NavBar/NavBar";
// import Addrestaurants from "./pages/Restaurants/Addrestaurant/addrestaurant";
// import Categories from "./Components/Menucard/Categories/categories";
// import Order from "./pages/Orders/Order";

function App() {
  return (
    <BrowserRouter>
      <BarSide />
      <div className="Home">
        <NavBar />
        {/* <Resprofile/> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          {/* <Route path="/restaurant" element={<Restaurant />} /> */}
          {/* <Route path="/orders" element={<Order/>} /> */}
          {/* <Route path="/addrestaurants" element={<Addrestaurants />} /> */}
          {/* <Route path="/categories" element={<Categories/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
