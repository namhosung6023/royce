import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppProvider"; // AppProvider 임포트
import Aboutus from "./pages/Aboutus";
import Creator from "./pages/Creator";
import Creatordetail from "./pages/Creatordetail";
import News from "./pages/News";
import Community from "./pages/Community";
import Main from "./pages/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/news" element={<News />} />
          <Route path="/creatordetail" element={<Creatordetail />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
