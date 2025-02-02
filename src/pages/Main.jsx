import React, { useState, useEffect } from "react";
import royceLogo from "../images/royce.png";
import icon1 from "../images/install.png";
import icon2 from "../images/blog.png";
import icon3 from "../images/you.png";
import talk from "../images/talk.png";
import "./Main.css";

function Main() {
  const [showIcons, setShowIcons] = useState(false);  // 아이콘 보이기/숨기기 상태
  const [selectedVideo, setSelectedVideo] = useState(null);
  

  const handleLogoClick = () => {
    setShowIcons(!showIcons);
  };

  // 스크롤 이벤트 처리
  const handleScroll = () => {
    const sections = document.querySelectorAll(".text-section, .text-section2, .text-section3, .text-section4, .second-title, .second-subtitle");
    sections.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight * 0.6) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  };

  // 스크롤 시 애니메이션 실행
window.addEventListener('scroll', function () {
  const secondContent = document.querySelector('.second-content');
  
  if (secondContent.getBoundingClientRect().top <= window.innerHeight) {
    secondContent.classList.add('visible');
  }
});

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 로딩 시 실행

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const branches = [
    { name: "로이스 덕영대구점", url: "https://roycedental-masan.com/" },
    { name: "로이스 대구점", url: "http://www.doctorsdental.co.kr/html/main/index.html" },
    { name: "로이스 CK울산점", url: "https://ckdental.co.kr/" },
    { name: "로이스 영천점", url: "https://doctorsdental-yeongcheon.co.kr/default/" },
    { name: "로이스 경주점", url: "http://www.doctorsdental-gyeongju.co.kr/" },
    { name: "로이스 서울김해점", url: "http://roycedental-gimhae.com/" },
    { name: "로이스 마산점", url: "https://roycedental-masan.com/" },
    { name: "로이스 밀양점", url: "http://mysoodent.co.kr/" },
    { name: "로이스 제일안동점", url: "https://andong1st.com/default/" },
    { name: "로이스 제천점", url: "https://m.booking.naver.com/booking/13/bizes/433083/items/3654575?startDate=2025-01-29" },
    { name: "로이스 영천점", url: "https://doctorsdental-yeongcheon.co.kr/default/" },
    { name: "로이스 진주점", url: "https://www.roycedental-jinju.com/html/main/index.html" },
    { name: "로이스 창원점", url: "" },
    { name: "로이스 포항죽도점", url: "https://im-plant.co.kr/" },
    { name: "로이스 포항오천점", url: "https://roycedental-pohangocheon.com/" },
    { name: "로이스 구제주점", url: "http://roycedental-jejuido2dong.com/html/main/index.html" },
    { name: "로이스 신제주점", url: "https://leadm12.cafe24.com/" },
    { name: "로이스 여수점", url: "https://roycedental-yeosu.com/" },
    { name: "로이스 수원점", url: "http://www.suwon-1st.com/html/main/" },
    { name: "로이스 호치민점", url: "https://roycedental-vn.com/" },
    { name: "로이스 싱가폴점", url: "" },
  ];

  const videoLinks = [
    "Hnmn32nbokY",
    "1fB9dXDV2jk",
    "Jr5pRYXj5H8",
    "lgwwZxbCFG8",
    "z0_dNx_kjMk",
    "Ru2i0LT0dt4",
    "MjXOM--Vus0",
  ];

  return (
    <div className="main-container">
      <div className="main-header">
        <video className="welcome-video" autoPlay muted loop>
          <source src="/videos/mainVideo.mp4" type="video/mp4" />
          브라우저가 동영상을 지원하지 않습니다.
        </video>
        <div className="logo-overlay" onClick={handleLogoClick}>
          <img src={royceLogo} alt="Royce Logo" className="logo" />
        </div>
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
      <div className="logo-overlay talk-logo" onClick={handleLogoClick}>
        <img src={talk} alt="Talk Icon" className="logo" />
        <div className="speech-bubble">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* 아이콘이 보일 때 나타나는 섹션 */}
      {showIcons && (
        <div className={`icons-container ${showIcons ? "show" : ""}`}>
          <a href="https://www.instagram.com/royce.dental?igsh=NXd5aTFsZG05MzZ5" target="_blank" rel="noopener noreferrer" className="icon">
            <img src={icon1} alt="설치 안내" className="icon-img" />
          </a>
          <a href="https://blog.naver.com/gripia84" target="_blank" rel="noopener noreferrer" className="icon">
            <img src={icon2} alt="블로그" className="icon-img" />
          </a>
          <a href="https://www.youtube.com/@royce-dental-kr/videos" target="_blank" rel="noopener noreferrer" className="icon">
            <img src={icon3} alt="유튜브" className="icon-img" />
          </a>
        </div>
      )}

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
        <section className="branch-container">
          <div className="branch-list">
            {branches.map((branch, index) => {
              const branchParts = branch.name.split(" ");
              const prefix = branchParts[0];
              const boldPart = branchParts.slice(1).join(" ");

              return (
                <React.Fragment key={index}>
                  <div className="branch-card">
                    <p className="branch-name">
                      <span className="branch-prefix">{prefix} </span>
                      <span className="branch-bold">{boldPart}</span>
                    </p>
                    <a className="branch-btn" href={branch.url} target="_blank" rel="noopener noreferrer">
                      바로가기
                    </a>
                  </div>
                  {(index + 1) % 6 === 0 && <hr className="dotted-line" />}
                </React.Fragment>
              );
            })}
          </div>
        </section>
        <div className="video-container">
          <video className="branch-video" autoPlay muted loop>
            <source src="/videos/main1.mp4" type="video/mp4" />
            브라우저가 동영상을 지원하지 않습니다.
          </video>
        </div>
        <div className="video-description">
          <p className="intro-text">20개 로이스치과 네트워크, 하나의 시스템으로 통합 관리!</p>
          <p className="service-text">
            통합 A/S 및 관리로 더 빠르고 혁신적인 서비스를 제공하는, 
            <span className="highlight-text">믿을 수 있는 주치의치과</span> 입니다.
          </p>
        </div>
      </div>
      <div className="second">
      <div className="second-content">
  Difference of the <span className="bold-royce">ROYCE</span>
  <p className="second-title">로이스치과 네트워크는 신뢰를 바탕으로</p>
  <p className="second-subtitle">
    <span className="highlight-text">예측 가능한 진료</span>를 제공합니다.
  </p>
  <p className='second-bold'>철저한 관리와 헌신 <span className="second-test">으로 환자의 건강과 삶의 질을 향상시키고, 40년 임상 데이터를 통해 최고의 치료 결과를 약속합니다.</span></p>
  <p className="royce-tv">ROYCE TV</p>
  <div className="video-grid">
        {videoLinks.map((videoId, index) => (
          <div key={index} className="video-thumbnail" onClick={() => setSelectedVideo(videoId)}>
            <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt={`Video ${index + 1}`} />
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div className="video-popup" onClick={() => setSelectedVideo(null)}>
          <div className="video-popup-content">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
</div>

      </div>
      
    </div>
  );
}

export default Main;
