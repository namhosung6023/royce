import React, { useEffect } from "react";
import "./Main.css";

function Main() {
  const handleScroll = () => {
    const sections = document.querySelectorAll(".text-section, .text-section2, .text-section3, .text-section4"); // ✅ 추가
    sections.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight * 0.6) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 로딩 시 실행

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
          <h1>
            <span className="blue-text">'환자 중심의'</span> 특별한
          </h1>
          <h1>진료 서비스를 제공하는</h1>
          <h1>
            <span className="blue-text">로이스치과 네트워크</span>
          </h1>
        </div>
      </div>
      <div className="main-content">
        <section className="feature">
          <h2>
            치과 선택하는 <br /> 기준을 제시합니다.
          </h2>
        </section>
        <section className="text-section">
          <p className="highlight-text">"진료는 가까운 곳에서,</p>
          <p className="highlight-text">A/S 및 관리서비스는 전국 어디서나!</p>
          <p className="small-text">로이스치과 네트워크가 치료의 새로운 기준을 제공합니다."</p>
        </section>
        <br />
        <section className="text-section2">
          <p className="highlight-text1">잘하는 치과 어디갈지 찾고 계시나요?</p>
        </section>
        <section className="text-section3">
          <p className="highlight-text2">이제 서울까지 가지 마세요!</p>
          <p className="highlight-text3">가까운 곳에서 서울 이상의 진료를 만날 수 있습니다.</p>
        </section>
        <br />
        {/* ✅ 새로운 문단 추가 */}
        <section className="text-section4">
  <p className="highlight-text4">
    이제 나에게 가까운 도시에서 안심하고 진료 받을 수 있습니다.
  </p>
  <p className="normal-text">
    로이스치과의 전문의가 대학병원 수준의 최신 진료 장비와 최신 치료법으로 직접 상담부터 진료까지 책임집니다.
  </p>
  <p className="bold-text">
    고객이 어디에 있든, 더 편리하고, 더 전문적으로 전국 통합 관리 시스템으로 끊김 없는 구강 케어를 제공합니다.
  </p>
  <p className="last-text">
    지방에서도 믿을 수 있는 진료, 통합 관리는 로이스치과라 가능합니다.
  </p>
  <section className="place-text">
  <p>
    <span className="bold-text">로이스치과 네트워크</span> 바로가기
  </p>
</section>
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
        
      </div>
    </div>
  );
}

export default Main;
