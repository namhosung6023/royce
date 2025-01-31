import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../images/footerLog.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Header ${scrolled ? "scrolled" : ""}`}>
      <img src={logo} alt="로이스치과 로고" className="logo" />
      <div className="introduce">로이스치과소개</div>
      <div className="special">로이스임플란트의특별함</div>
      <div className="manageCenter">평생관리센터</div>
      <div className="tv">로이스TV</div>
      <div className="community">커뮤니티</div>
    </div>
  );
}

export default Header;
