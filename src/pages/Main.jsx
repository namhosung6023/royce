// Main.jsx
import React, { useEffect } from "react";
import './Main.css';

function Main() {
  const handleScroll = () => {
    const elements = document.querySelectorAll(".text-section");
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      // 요소가 화면에 50% 이상 보일 때 visible 클래스를 추가
      if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 컴포넌트 로딩 시 한번 실행

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="main-header">
        <video className="welcome-video" autoPlay muted loop>
          <source src="/videos/mainVideo.mp4" type="video/mp4" />
          브라우저가 동영상을 지원하지 않습니다.
        </video>
        <div className="text-overlay">
          <h1>신뢰할 수 있는 치료와</h1>
          <h1><span className="blue-text">'환자 중심의'</span> 특별한</h1>
          <h1>진료 서비스를 제공하는</h1>
          <h1><span className="blue-text">로이스치과 네트워크</span></h1>
        </div>
      </div>
      <div className="main-content">
        <section className="feature">
          <h2>
            치과 선택하는 <br /> 기준을 제시합니다.
          </h2>
        </section>
        {/* 텍스트 섹션에 스타일 적용 */}
        <section className="text-section">
          <p className="highlight-text">진료는 가까운 곳에서,</p>
          <p className="highlight-text">A/S 및 관리서비스는 전국 어디서나!</p>
          <p className="small-text">로이스치과 네트워크가 치료의 새로운 기준을 제공합니다.</p>
        </section>
      </div>
      <div className="main-footer">
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        <p>&copy; 2025 로이스치과. All Rights Reserved.</p>
        
      </div>
    </div>
  );
}

export default Main;
