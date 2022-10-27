import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userindex from "./pages/Userreport";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Userindex/>} />
          {/* <Route path="/adddrivers" element={<AddDriver/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
