import React from "react";
import "./Community.css";

function Community() {
  return (
    <div className="community-wrap">
        <div className="community-contents">
      <div className="contact-us">CONTACT US</div>
      <p className="color-context">로이스치과와 함께</p>
      <p className="mid-context">편하고, 안 아픈 치료를 시작하세요.</p>
      <p className="email-context">E-mail | roycedental@royce.com</p>

      {/* 문의 폼 추가 */}
      <form className="contact-form">
        <label>
          이름 <span className="required">*</span>
        </label>
        <input type="text" name="name" required />

        <label>
          연락처 <span className="required">*</span>
        </label>
        <div className="phone-input">
          <input type="text" name="phone1" maxLength="3" required /> -
          <input type="text" name="phone2" maxLength="4" required /> -
          <input type="text" name="phone3" maxLength="4" required />
        </div>

        <label>문의 유형</label>
        <select name="inquiry-type">
          <option value="">(선택)</option>
          <option value="임플란트">임플란트</option>
          <option value="치아교정">치아교정</option>
          <option value="일반치료">일반치료</option>
          <option value="예방관리/로이스케어">예방관리/로이스케어</option>
        </select>

        <label>
          문의 내용 <span className="required">*</span>
        </label>
        <textarea name="message" rows="4" required></textarea>

        <label>
          개인정보 수집 및 이용동의 <span className="required">*</span>
        </label>
        <div name="agree" rows="5" required>
        로이스치과는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.
        </div>

        <button type="submit">작성 완료</button>
      </form>
      </div>
    </div>
  );
}

export default Community;
