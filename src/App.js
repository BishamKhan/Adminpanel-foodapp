import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drivers from "./pages/Drivers";
import AddDriver from "./pages/Drivers/Adddrivers/adddriver";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <AddDriver/> */}
      <Drivers/>
        <Routes>
          {/* <Route path="/" element={<Drivers/>} /> */}
          {/* <Route path="/" element={<Restaurant />}/>
          <Route path="/addrestaurants" element={<Addrestaurants />}/>
          <Route path="/restaurantprofile" element={<Resprofile />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
