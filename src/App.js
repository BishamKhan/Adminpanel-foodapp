import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Menu from "./pages/Menu/menu";
import BarSide from "./Components/Bar-Side/BarSide";
import NavBar from "./Components/NavBar/NavBar";
import Addrestaurants from "./pages/Restaurant/Addrestaurant/addrestaurant";
import Categories from "./Components/Menucard/Categories/categories";
import Order from "./pages/Orders/Order";
import Resprofile from "./pages/Restaurant/Profile/resprofile";
import Restaurant from "./pages/Restaurant";
import Drivers from "./pages/Drivers";
import Banners from "./pages/Banners/banners";
import Promotion from "./pages/Promotions/promotion";
import Addbanners from "./pages/Banners/Addbanners/Addbanners";
import Promocode from "./pages/Promotions/Promocode/promocode";
import AddDriver from "./pages/Drivers/Adddrivers/adddriver";

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
          <Route path="/menu" element={<Menu />} />
          <Route path="/restaurant" element={<Restaurant/>} />
          <Route path="/orders" element={<Order/>} />
          <Route path="/addrestaurants" element={<Addrestaurants />} />
          <Route path="/restaurantprofile" element={<Resprofile/>}/>
          <Route path="/categories" element={<Categories/>} />
          <Route path="/banners" element={<Banners/>} />
          <Route path="/promotions" element={<Promotion/>} />
          <Route path="/addbanners" element={<Addbanners/>} />
          <Route path="/promocode" element={<Promocode/>} />
          <Route path="/drivers" element={<Drivers/>} />
          <Route path="/adddrivers" element={<AddDriver/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
