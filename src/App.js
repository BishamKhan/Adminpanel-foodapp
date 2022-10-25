import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Users/>
        <Routes>
          {/* <Route path="/" element={<Drivers/>} /> */}
          {/* <Route path="/" element={<Restaurant />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
