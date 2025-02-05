import React from "react";
import "./Creatordetail.css";

function Creatordetail() {
  return (
    <div className="creatordetail">
      {/* 동영상 섹션 */}
      <div className="video-section">
        <video
          className="creator-video"
          src="/path/to/your/video.mp4"
          controls
          poster="/path/to/video-poster.jpg"
        >
          브라우저에서 동영상을 지원하지 않습니다.
        </video>
      </div>

      {/* 페이지 소개 섹션 */}
      <div className="intro-section">
        <div className="title-royce">ROYCE TV</div>
        <div className="youtube-icon">YOUTUBE</div>
        <p><span>로이스 TV는</span><br/>
        로이스 TV는 로이스치과 소식, 구강 건강 팁, 최신 치과 정보, 환자 맞춤형 진료<br/> 안내를 통해 유익하고 즐거운 시간을 제공합니다.
        </p>
        <div className="scroll-down-context">↓SCROLL DOWN</div>
      </div>

      {/* 슬라이드 섹션 */}
      <div className="silder-section">
      </div>


      {/* 콘텐츠 목록 섹션 */}
      <div className="content-section">
        <div className="content-section-title">로이스TV</div>
        <ul className="content-list">
        </ul>
      </div>

      
      <div className="detail-last-section">
        <div className="tag-context">#ROYCETV<br/>#로이스치과 #치과추천 #임플란트 #임플란트잘하는곳 #치과 #치과치료 #치아건강
        <br/>#정준호</div>
      </div>
    </div>
  );
}

export default Creatordetail;
