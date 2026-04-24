import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Donate from "./pages/Donate";
import HowIt from "./pages/HowIt";
import About from "./pages/About";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >0000
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/how-it-works" element={<HowIt />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default App;
