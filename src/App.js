import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Aboutus from "./pages/Aboutus";
import Creator from "./pages/Creator";
import Creatordetail from "./pages/Creatordetal";
import News from "./pages/News";
import Footer from "./component/Footer";
import Community from "./pages/Community";
import Main from "./pages/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/creator" element={<Creator />} />
            <Route path="/news" element={<News />} />
            <Route path="/creatordetail" element={<Creatordetail />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
