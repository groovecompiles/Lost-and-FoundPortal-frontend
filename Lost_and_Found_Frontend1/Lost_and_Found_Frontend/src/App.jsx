import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import LostItem from "./pages/LostItem";
import LostItems from "./pages/LostItems";

import FoundItem from "./pages/FoundItem";
import FoundItems from "./pages/FoundItems";

function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        {/* Lost Items */}
        <Route path="/lost-items" element={<LostItem />} />
        <Route path="/view-lost-items" element={<LostItems />} />

        {/* Found Items */}
        <Route path="/found-items" element={<FoundItem />} />
        <Route path="/view-found-items" element={<FoundItems />} />

      </Routes>

    </>
  );
}

export default App;