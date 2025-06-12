import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HoverCards from "./components/Card";
import ICTPage from "./pages/ICTPage";
 
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HoverCards />} />
        <Route path="/schools/ict" element={<ICTPage />} />
        {/* Add more <Route> entries here for other schools if needed */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
