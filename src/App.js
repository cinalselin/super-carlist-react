import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// IMPORT CSS
import "./App.css";

// IMPORT PAGES
import Home from "./Pages/Home.js";
import CarDetails from "./Pages/CarDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Super Carlist</h1>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CarDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
