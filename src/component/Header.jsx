import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../images/footerLog.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return; // 요소가 존재하는지 체크
      setScrolled(window.scrollY > 100);
    };

    // DOM이 로드된 후 실행되도록 setTimeout 추가
    const timeoutId = setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={headerRef} className={`Header ${scrolled ? "scrolled" : ""}`}>
      <img src={logo} alt="로이스치과 로고" className="logo" onClick={() => navigate("/")} />
      <div className="introduce" onClick={() => navigate("/aboutus")}>로이스치과소개</div>
      <div className="special" onClick={() => navigate("/creator")}>로이스임플란트의특별함</div>
      <div className="manageCenter" onClick={() => navigate("/news")}>평생관리센터</div>
      <div className="tv" onClick={() => navigate("/creatordetail")}>로이스TV</div>
      <div className="community" onClick={() => navigate("/community")}>커뮤니티</div>
    </div>
  );
}

export default Header;
