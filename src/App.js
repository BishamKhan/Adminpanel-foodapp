import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Addrestaurants from "./pages/Restaurant/Addrestaurant/addrestaurant";
import Restaurant from "./pages/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resprofile from "./pages/Restaurant/Profile/resprofile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Restaurant />}/>
          <Route path="/addrestaurants" element={<Addrestaurants />}/>
          <Route path="/restaurantprofile" element={<Resprofile />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
